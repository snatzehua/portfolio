import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { bannerSpec } from './lib/banner-layout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const directory = path.join(root, 'public/images/projects/banners');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

export async function checkProjectCovers(coverPaths = []) {
  const manifest = JSON.parse(await fs.readFile(path.join(directory, 'manifest.json'), 'utf8'));
  assert.deepEqual(manifest.size, { width: bannerSpec.width, height: bannerSpec.height }, 'Incorrect banner size contract');
  assert.equal(hash(await fs.readFile(path.join(root, 'scripts/project-cover-data/snapshot.json'))), manifest.sourceSnapshotSha256, 'Source snapshot changed; regenerate banners');
  assert(manifest.recipeSha256?.['scripts/generate-project-covers.mjs'] && manifest.recipeSha256?.['scripts/lib/banner-layout.mjs'], 'Missing generator fingerprints');
  for (const [relative, expected] of Object.entries({ ...manifest.assetSha256, ...manifest.recipeSha256 })) {
    const filename = path.resolve(root, relative);
    assert(filename.startsWith(`${root}${path.sep}`), `Input outside app: ${relative}`);
    assert.equal(hash(await fs.readFile(filename)), expected, `Input changed; regenerate banners: ${relative}`);
  }
  const paths = new Set();
  for (const image of manifest.images) {
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(image.slug), `Invalid banner slug: ${image.slug}`);
    assert.equal(image.src, `/images/projects/banners/${image.slug}.webp`, `Incorrect banner path: ${image.slug}`);
    assert(!paths.has(image.src), `Duplicate banner: ${image.src}`);
    paths.add(image.src);
    for (const key of ['alt', 'basis', 'artDirection']) assert(typeof image[key] === 'string' && image[key].trim(), `Missing ${key}: ${image.slug}`);
    assert.equal(image.width, bannerSpec.width, `Incorrect recorded width: ${image.slug}`);
    assert.equal(image.height, bannerSpec.height, `Incorrect recorded height: ${image.slug}`);
    const bytes = await fs.readFile(path.join(root, 'public', image.src));
    assert.equal(bytes.length, image.bytes, `Incorrect file size: ${image.slug}`);
    assert.equal(hash(bytes), image.sha256, `Banner changed outside generator: ${image.slug}`);
    const metadata = await sharp(bytes).metadata();
    assert.equal(metadata.format, 'webp', `Expected WebP: ${image.slug}`);
    assert.equal(metadata.width, bannerSpec.width, `Incorrect width: ${image.slug}`);
    assert.equal(metadata.height, bannerSpec.height, `Incorrect height: ${image.slug}`);
  }
  const files = (await fs.readdir(directory)).filter(file => file.endsWith('.webp')).sort();
  assert.deepEqual(files, manifest.images.map(image => `${image.slug}.webp`).sort(), 'Banner files and manifest disagree');
  for (const cover of coverPaths) assert(paths.has(cover), `Project cover missing from generator: ${cover}`);
  console.log(`banners: ${paths.size} outputs; dimensions, descriptions, source/recipe fingerprints, and output hashes checked.`);
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await checkProjectCovers();
