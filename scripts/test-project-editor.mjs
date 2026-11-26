import assert from 'node:assert/strict';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
async function loadLocalTypeScript(filename) {
 const compiled = ts.transpileModule(await fs.readFile(filename, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText;
 const dependencies = new Map();
 for (const match of compiled.matchAll(/require\("(\.[^"]+)"\)/g)) dependencies.set(match[1], await loadLocalTypeScript(path.resolve(path.dirname(filename), match[1] + '.ts')));
 const module = {exports:{}};
 new Function('require','module','exports',compiled)(specifier => dependencies.has(specifier) ? dependencies.get(specifier) : require(specifier),module,module.exports);
 return module.exports;
}
const {createProjectEditor,authorizeEditorRequest,readEditorPayload,readEditorImage,validateProjectUpdate} = await loadLocalTypeScript(path.resolve('src/lib/project-editor.ts'));
const root = await fs.mkdtemp(path.join(os.tmpdir(),'portfolio-project-editor-'));
const directory = path.join(root,'src/content/projects');
await fs.mkdir(directory,{recursive:true});
const original = {
 slug:'example-project',title:'Original title',summary:'Original summary',publishedAt:'2026-11-18',period:'2026',role:'Personal project',status:'In progress',tags:['TypeScript'],cover:'/images/cover.webp',coverAlt:'Original cover',repository:'https://github.com/example/project',outcome:'Recorded outcome',sections:[
  {id:'problem',title:'The problem',navTitle:'Problem',blocks:[{type:'text',content:'Original prose.'},{type:'image',src:'/images/figure.png',caption:'Original image',technical:true},{type:'diagram',title:'Flow',steps:[{label:'A',detail:'Input'},{label:'B',detail:'Output'}],caption:'Original method'}]},
  {id:'conclusion',title:'Conclusion',blocks:[{type:'text',content:'Original conclusion.'}]},
 ]
};
const wrap = project=>'import type { Project } from "../types";\n\nconst project: Project = '+JSON.stringify(project,null,2)+';\n\nexport default project;\n';
const source=wrap(original);
await fs.writeFile(path.join(directory,'example-project.ts'),source);
await fs.writeFile(path.join(directory,'openclaw-network.ts'),wrap({...original,slug:'openclaw-network-mapping',title:'OpenClaw'}));
await fs.writeFile(path.join(directory,'index.ts'),'This index must never be parsed as a project.');
const editor=createProjectEditor(root,'development');
let checks=0;
const clone=()=>structuredClone(original);
function rejects(fn,status){assert.throws(fn,error=>error.status===status);checks++;}
async function asyncRejects(fn,status){await assert.rejects(fn,error=>error.status===status);checks++;}
function request(options={}){
 return new Request('http://localhost:3100/api/editor/projects/example-project',{method:'PUT',headers:{host:'localhost:3100',origin:'http://localhost:3100','content-type':'application/json',...options.headers},body:'{}'});
}
try {
 rejects(()=>authorizeEditorRequest(request(),true,'production'),404);
 await asyncRejects(()=>createProjectEditor('/missing/project-directory','production').list(),404);
 rejects(()=>authorizeEditorRequest(request({headers:{host:'attacker.test'}}),true,'development'),403);
 rejects(()=>authorizeEditorRequest(request({headers:{origin:'https://attacker.test'}}),true,'development'),403);
 rejects(()=>authorizeEditorRequest(request({headers:{origin:'https://attacker.test'}}),false,'development'),403);
 rejects(()=>authorizeEditorRequest(request({headers:{'content-type':'text/plain'}}),true,'development'),415);
 rejects(()=>authorizeEditorRequest(request({headers:{'content-length':'1048577'}}),true,'development'),413);
 const noOrigin=request();noOrigin.headers.delete('origin');rejects(()=>authorizeEditorRequest(noOrigin,true,'development'),403);
 authorizeEditorRequest(request(),true,'development');checks++;
 authorizeEditorRequest(request({headers:{host:'127.0.0.1:3100',origin:'http://127.0.0.1:3100'}}),true,'development');checks++;
 rejects(()=>authorizeEditorRequest(request({headers:{host:'127.0.0.1:3100',origin:'http://localhost:3100'}}),true,'development'),403);
 rejects(()=>authorizeEditorRequest(request({headers:{host:'localhost:99999',origin:'http://localhost:99999'}}),true,'development'),403);
 await asyncRejects(()=>readEditorPayload(new Request('http://localhost',{method:'PUT',body:'bad JSON'})),400);
 await asyncRejects(()=>readEditorPayload(new Request('http://localhost',{method:'PUT',body:'x'.repeat(1048577)})),413);
 assert.deepEqual(await readEditorPayload(request()),{});checks++;
 assert.equal((await editor.list()).length,2);checks++;
 assert.equal((await editor.read('openclaw-network-mapping')).project.title,'OpenClaw');checks++;
 await asyncRejects(()=>editor.read('../example-project'),404);
 await asyncRejects(()=>editor.read('%2e%2e%2fexample-project'),404);
 const first=await editor.read(original.slug);assert.match(first.revision,/^[a-f0-9]{64}$/);checks++;
 let bad=clone();bad.cover='/images/replaced.png';rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.status=['Completed'];rejects(()=>validateProjectUpdate(bad,original),400);
 for (const period of ['Jun 2026','2026-11-19','2025 — present','2026–2025','2026–2026','2025 - 2026','2026 ']) {
  bad=clone();bad.period=period;rejects(()=>validateProjectUpdate(bad,original),400);
 }
 const yearSpan=clone();yearSpan.period='2025–2026';assert.equal(validateProjectUpdate(yearSpan,original).period,'2025–2026');checks++;
 bad=clone();bad.sections[0].blocks[1].src='/images/replaced.png';rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.sections.shift();rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.sections[1].id='problem';rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.sections[0].blocks[0].content=' ';rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.sections[1].blocks.push({type:'image',src:'/images/unreviewed.png'});rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.sections[0].blocks.push({type:'html',content:'<script>bad()</script>'});rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.sections[1].navTitle='x'.repeat(41);rejects(()=>validateProjectUpdate(bad,original),400);
 bad=clone();bad.extra='unexpected';rejects(()=>validateProjectUpdate(bad,original),400);
 bad=JSON.parse(JSON.stringify(original).replace('"title":"Original title"','"__proto__":{"injected":true},"title":"Original title"'));rejects(()=>validateProjectUpdate(bad,original),400);
 const draft=clone();draft.title='Saved title';draft.sections.reverse();draft.sections[1].blocks[0].content='Edited text with $money and `backticks` safely stored.';
 // Put the image after the diagram, preserving its original caption and metadata.
 draft.sections[1].blocks.push(draft.sections[1].blocks.splice(1, 1)[0]);
 const saved=await editor.save(original.slug,{project:draft,revision:first.revision});
 assert.equal(saved.project.title,'Saved title');assert.notEqual(saved.revision,first.revision);checks++;
 assert.deepEqual((await editor.read(original.slug)).project.sections, draft.sections);checks++;
 const backups=await fs.readdir(path.join(root,'.local-content-backups'));assert.equal(backups.length,1);assert.equal(await fs.readFile(path.join(root,'.local-content-backups',backups[0]),'utf8'),source);checks++;
 assert.equal((await fs.stat(path.join(root,'.local-content-backups',backups[0]))).mode&0o777,0o600);checks++;
 await asyncRejects(()=>editor.save(original.slug,{project:draft,revision:first.revision}),409);
 assert.equal((await fs.readdir(path.join(root,'.local-content-backups'))).length,1);checks++;
 const attemptA=structuredClone(saved.project),attemptB=structuredClone(saved.project);attemptA.title='Concurrent A';attemptB.title='Concurrent B';
 const results=await Promise.allSettled([editor.save(original.slug,{project:attemptA,revision:saved.revision}),editor.save(original.slug,{project:attemptB,revision:saved.revision})]);
 assert.equal(results.filter(r=>r.status==='fulfilled').length,1);assert.equal(results.filter(r=>r.status==='rejected'&&r.reason.status===409).length,1);checks++;
 const final=await editor.read(original.slug);assert.ok(['Concurrent A','Concurrent B'].includes(final.project.title));checks++;
 assert.equal((await fs.readdir(path.join(root,'.local-content-backups'))).length,2);checks++;
 // Exercise the same upload, draft, save and reload sequence used by the editor.
 const raster = await require('sharp')({
  create: { width: 5, height: 3, channels: 3, background: '#abcdef' },
 }).png().toBuffer();
 const uploadRequest = new Request('http://localhost:3100/api/editor/projects/example-project/images', {
  method: 'POST', headers: { host: 'localhost:3100', origin: 'http://localhost:3100', 'content-type': 'image/png' }, body: raster,
 });
 authorizeEditorRequest(uploadRequest, 'image', 'development');
 assert.deepEqual(await readEditorImage(uploadRequest), raster);checks++;
 rejects(() => authorizeEditorRequest(request({headers: {'content-type': 'image/svg+xml'}}), 'image', 'development'), 415);
 rejects(() => authorizeEditorRequest(request({headers: {'content-type': 'image/png', 'content-length': String(12 * 1024 * 1024 + 1)}}), 'image', 'development'), 413);
 await asyncRejects(() => editor.uploadImage(original.slug, Buffer.from('invalid image data')), 400);
 const uploaded = await editor.uploadImage(original.slug, raster);
 assert.equal(uploaded.type, 'image');
 assert.deepEqual(uploaded.dimensions, { width: 5, height: 3 });
 assert.match(uploaded.src, /^\/images\/projects\/uploads\/example-project\/[a-f0-9]{64}\.webp$/);
 assert.deepEqual(await editor.uploadImage(original.slug, raster), uploaded);checks++;
 const assetFile = path.join(root, 'public', uploaded.src);
 const metadata = await require('sharp')(assetFile).metadata();
 assert.deepEqual([metadata.format, metadata.width, metadata.height], ['webp', 5, 3]);checks++;
 const withImage = structuredClone(final.project);
 const [movedImage] = withImage.sections[1].blocks.splice(2, 1);
 withImage.sections[0].blocks.unshift({ ...uploaded, alt: 'Test image', caption: 'Uploaded from a local file' }, movedImage);
 const wrongDimensions = structuredClone(withImage);
 wrongDimensions.sections[0].blocks[0].dimensions.height += 1;
 await asyncRejects(() => editor.save(original.slug, { project: wrongDimensions, revision: final.revision }), 400);
 const imageSave = await editor.save(original.slug, { project: withImage, revision: final.revision });
 assert.deepEqual((await editor.read(original.slug)).project.sections, withImage.sections);checks++;
 const withoutImage = structuredClone(imageSave.project);
 withoutImage.sections[0].blocks.shift();
 await editor.save(original.slug, { project: withoutImage, revision: imageSave.revision });
 assert.deepEqual((await editor.read(original.slug)).project.sections, withoutImage.sections);checks++;
 assert.ok((await fs.stat(assetFile)).isFile());checks++;
 // Nonmatching source code is never executed to obtain content.
 await fs.writeFile(path.join(directory,'unsafe-source.ts'),'throw new Error("must not execute")');
 await asyncRejects(()=>editor.list(),500);
 console.log(`Project editor backend: ${checks} checks passed (authorization, validation, assets, backups, stale/concurrent saves and safe parsing).`);
} finally {await fs.rm(root,{recursive:true,force:true});}
