import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/images/projects/banners');
const snapshotPath = path.join(root, 'scripts/project-cover-data/snapshot.json');
const data = JSON.parse(await fs.readFile(snapshotPath, 'utf8'));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const text = (x, y, value, size = 40, color = '#273d49', weight = 400, anchor = 'start') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" font-family="Arial,Helvetica,sans-serif">${escape(value)}</text>`;
const line = (x1, y1, x2, y2, stroke, width = 2, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;
const circle = (x, y, r, fill, extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" ${extra}/>`;
const rect = (x, y, w, h, fill, rx = 0, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" rx="${rx}" ${extra}/>`;
const svg = (body, background = '#f5f3ec', defs = '') => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1600" height="600" viewBox="0 0 1600 600"><defs>${defs}</defs>${rect(0, 0, 1600, 600, background)}${body}</svg>`);
const polyline = (points, stroke, width = 5, extra = '') => `<polyline points="${points.map(p => p.join(',')).join(' ')}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
const imageSources = {};
async function source(relative) {
  const bytes = await fs.readFile(path.join(root, relative));
  imageSources[relative] = hash(bytes);
  return bytes;
}
const image = (x, y, w, h, bytes, mime = 'image/webp') => `<image x="${x}" y="${y}" width="${w}" height="${h}" xlink:href="data:${mime};base64,${bytes.toString('base64')}"/>`;
const images = [];
async function write(slug, input, alt, basis) {
  const buffer = await sharp(input).resize(1600, 600, { fit: 'cover' }).webp({ quality: 90, effort: 6 }).toBuffer();
  await fs.writeFile(path.join(output, `${slug}.webp`), buffer);
  images.push({ slug, src: `/images/projects/banners/${slug}.webp`, width: 1600, height: 600, bytes: buffer.length, sha256: hash(buffer), alt, basis });
}
await fs.mkdir(output, { recursive: true });

// Original branding, expanded to the entire artboard.
await write('careersphere', await source('public/images/projects/careersphere-cover.svg'),
  'CareerSphere’s original wordmark and globe icon on a full dark banner.', 'Original CareerSphere wordmark and favicon, retained in careersphere-cover.svg.');

// Saved synthetic demonstration, indexed to 100. These are not real market returns.
{
  const p = data.systematic.points;
  const values = p.flatMap(d => [d.strategy, d.benchmark]);
  const lo = Math.floor(Math.min(...values) / 10) * 10, hi = Math.ceil(Math.max(...values) / 10) * 10;
  const y = v => 500 - (v - lo) / (hi - lo) * 320;
  const points = key => p.map((d, i) => [100 + i / (p.length - 1) * 1410, y(d[key])]);
  let body = text(92, 86, 'A backtest you can inspect', 60, '#eaf1f4', 600) + text(94, 137, 'SYNTHETIC DEMO · INDEXED TO 100', 30, '#a8bfca');
  for (let i = 0; i < 4; i++) { const value = lo + i / 3 * (hi - lo); body += line(100, y(value), 1510, y(value), '#375363', 1.5) + text(70, y(value) + 10, value.toFixed(0), 28, '#a8bfca', 400, 'end'); }
  body += polyline(points('benchmark'), '#b8c4cb', 5) + polyline(points('strategy'), '#67c4b4', 7);
  body += text(100, 558, data.systematic.start, 30, '#c4d3dc') + text(1510, 558, data.systematic.end, 30, '#c4d3dc', 400, 'end');
  body += line(970, 121, 1040, 121, '#67c4b4', 6) + text(1060, 132, 'Strategy', 30, '#eaf1f4') + line(1260, 121, 1330, 121, '#b8c4cb', 5) + text(1350, 132, 'Benchmark', 30, '#eaf1f4');
  await write('systematic-portfolio', svg(body, '#172e3c'), 'Equity curves from the saved seeded synthetic demo, indexed to 100; not real investment performance.', 'systematic-portfolio/runs/demo-monthly/equity.csv and manifest.json; synthetic seed 42, saved run.');
}

// Crop an existing satellite image; never synthesize imagery or detections.
{
  const photo = await sharp(await source('public/images/projects/strait.webp')).resize(1600, 600, { fit: 'cover', position: 'south' }).toBuffer();
  const overlay = svg(`<rect width="1600" height="600" fill="url(#shade)"/>${text(78, 122, 'Strait of Hormuz', 74, '#ffffff', 500)}${text(80, 178, 'Sentinel-2 · 24 October 2026', 36, '#e6eef0')}${text(80, 557, 'Modified Copernicus Sentinel data · Microsoft Planetary Computer', 26, '#e6eef0')}`, 'none', '<linearGradient id="shade"><stop stop-color="#081a27" stop-opacity=".6"/><stop offset="1" stop-color="#081a27" stop-opacity="0"/></linearGradient>');
  await write('state-of-the-strait', await sharp(photo).composite([{ input: overlay }]).toBuffer(), 'Full-width crop of the saved Sentinel-2 Hormuz image from 24 October 2026, including visible cloud cover. Modified Copernicus Sentinel data via Microsoft Planetary Computer.', 'Existing source image strait.webp; crop and legibility overlay only, no generated satellite features.');
}

// Development-only data, with a zero baseline and explicit units.
{
  let body = text(86, 84, 'Fraud prevalence changes over time', 58, '#243e50', 600) + text(90, 133, 'DEVELOPMENT MONTHS 0–6 · SYNTHETIC BAF DATA', 29, '#607887');
  const y = v => 495 - v / 1.5 * 300;
  for (const v of [0, .5, 1, 1.5]) body += line(120, y(v), 1505, y(v), '#c9d7dc', 2) + text(95, y(v) + 10, `${v}%`, 29, '#607887', 400, 'end');
  for (const [i, d] of data.baf.entries()) { const x = 200 + i * 198; body += rect(x, y(d.prevalence), 112, 495 - y(d.prevalence), '#47778c', 3) + text(x + 56, y(d.prevalence) - 15, `${d.prevalence.toFixed(2)}%`, 34, '#294e61', 500, 'middle') + text(x + 56, 548, `M${d.month}`, 32, '#607887', 400, 'middle'); }
  await write('bank-account-fraud', svg(body, '#edf3f5'), 'Fraud prevalence in development months 0–6 from the first BAF study; the held-out month is excluded.', 'bt-4012-project-2026/reports/baf-study-v1/monthly.csv; original development-only descriptive statistics.');
}

// Anonymised, genuine graph structure; coordinates are a saved seeded spring layout.
{
  const { nodes, edges } = data.bitcoin;
  const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const point = n => [65 + (n.x - minX) / (maxX - minX) * 1470, 140 + (n.y - minY) / (maxY - minY) * 415];
  let body = '';
  for (const [a, b] of edges) body += line(...point(nodes[a]), ...point(nodes[b]), '#648391', 1.7, 'opacity=".48"');
  for (const kind of ['unknown', 'licit', 'illicit']) for (const n of nodes.filter(n => n.kind === kind)) body += circle(...point(n), kind === 'illicit' ? 7 : kind === 'licit' ? 5 : 3.3, { unknown: '#7592a0', licit: '#72bce1', illicit: '#f1a06b' }[kind]);
  body += text(64, 74, 'Transaction graph · step 28', 48, '#edf4f6', 500);
  ['unknown', 'licit', 'illicit'].forEach((kind, i) => { const x = 1040 + i * 175; body += circle(x, 63, 7, { unknown: '#7592a0', licit: '#72bce1', illicit: '#f1a06b' }[kind]) + text(x + 20, 74, kind, 28, '#d0e1e8'); });
  await write('bitcoin-fraud-graph', svg(body, '#162c39'), 'Anonymised transaction graph at time step 28, with licit, illicit, and unlabelled nodes; this is data structure, not model predictions.', 'Competition train.parquet and txs_edgelist.csv; 1,653 nodes, original figure’s layout recipe with seed 4. Raw transaction identifiers are omitted from the checked-in snapshot.');
}

// A compact redraw of the documented jury/critic architecture, not a screenshot.
{
  let body = text(80, 240, 'JurAI', 132, '#fff8ed', 600) + text(85, 310, 'Regulatory research', 40, '#d8c9c0');
  const ys = [125, 245, 365, 485];
  for (const y of ys) body += line(850, y, 1050, y, '#b2957b', 3) + line(1050, y, 1260, 300, '#b2957b', 3) + circle(850, y, 37, '#e6cda7') + circle(1050, y, 26, '#a38677') + circle(1050, y, 11, '#3b3036');
  body += rect(1260, 152, 230, 300, '#fff8ed', 10);
  for (let i = 0; i < 5; i++) body += line(1300, 212 + i * 45, 1445 - (i % 2) * 35, 212 + i * 45, '#aa8b72', 7);
  body += text(802, 568, 'Juries', 31, '#e2d4c9') + text(1000, 568, 'Critics', 31, '#e2d4c9') + text(1278, 520, 'Consolidated report', 29, '#e2d4c9');
  await write('jurai', svg(body, '#3b3036'), 'Illustration of JurAI’s four jury/critic branches feeding a consolidated report; redrawn from the team’s architecture diagram.', 'techjam-2025/README.md and original team workflow image; architecture illustration only.');
}

// Actual project wordmark, with a decorative route motif (no purported trip data).
{
  const logo = await sharp(await source('public/images/projects/travlah.webp')).png().toBuffer();
  const route = [[-70, 465], [370, 400], [650, 490], [1050, 390], [1670, 470]];
  let body = polyline(route, '#94b7b4', 4, 'stroke-dasharray="10 13"');
  for (const [x, y] of route.slice(1, -1)) body += circle(x, y, 13, '#f3f4e9', 'stroke="#5b8b89" stroke-width="5"');
  body += image(300, 140, 1000, 213, logo, 'image/png') + text(800, 555, 'Shared travel planning', 42, '#3c6566', 400, 'middle');
  await write('travlah', svg(body, '#e9f1ed'), 'Travlah’s original wordmark across a pale full-width banner with an illustrative travel-route motif.', 'bt3103-travlah/public/travlah-logo.png, retained as travlah.webp; route motif is decorative, not a recorded itinerary.');
}

// Original app cart icon and a coupon silhouette; no invented balances or adoption.
{
  const cart = await source('public/images/projects/banner-sources/shopping-cart.png');
  let body = `<path d="M1030 125H1650V258C1565 258 1565 342 1650 342V475H1030V342C1115 342 1115 258 1030 258Z" fill="#d3bc85"/>` + line(1150, 156, 1150, 445, '#7c6c4b', 3, 'stroke-dasharray="10 14"');
  for (let i = 0; i < 12; i++) body += rect(1220 + i * 24, 220, i % 3 === 0 ? 11 : 5, 160, '#7c6c4b');
  body += image(90, 160, 245, 245, cart, 'image/png') + text(390, 260, 'Hack4Good', 91, '#fbf8ee', 600) + text(395, 330, 'Voucher marketplace', 41, '#c5d9d4');
  await write('hack4good-marketplace', svg(body, '#244c50'), 'Original marketplace cart icon beside a coupon illustration on a full-width Hack4Good banner.', 'Hack4Good2025 frontend shopping_cart_icon.png and voucher/minimart routes; conceptual graphic, not a screenshot or real voucher.');
}

// Representative empty calendar grid and task ticks. Never use private calendar data.
{
  let body = text(80, 245, 'Calendar + tasks', 88, '#29445b', 600) + text(86, 315, 'A local planning assistant', 38, '#5f7c90');
  for (let row = 0; row < 4; row++) for (let col = 0; col < 5; col++) body += rect(930 + col * 113, 100 + row * 106, 102, 94, '#f9fbfd', 4);
  for (const [col, row, color] of [[0, 0, '#507a9b'], [2, 1, '#95b6c7'], [3, 1, '#507a9b'], [1, 2, '#a5bdad'], [4, 3, '#507a9b']]) body += rect(940 + col * 113, 122 + row * 106, 82, 16, color, 3) + rect(940 + col * 113, 148 + row * 106, 51, 9, color, 2);
  body += text(1510, 559, 'Illustrative schedule', 29, '#5f7c90', 400, 'end');
  await write('local-calendar-assistant', svg(body, '#e3edf4'), 'Illustrative calendar blocks for the local planning assistant; no real dates, tasks, events, or personal data.', 'claude-pa/README.md and calendar/task tool structure; purpose-drawn illustration, not a product screenshot.');
}

// Saved transition probabilities. The displayed subset is not renormalised.
{
  let body = text(85, 240, 'HMM', 135, '#f0eee2', 600) + text(90, 315, 'Estimated tag transitions', 40, '#adc4bd');
  const colors = ['#254e4c', '#37655e', '#4d7e6a', '#6e9d7b', '#a2bc8c', '#d5d8a5', '#f1e9bd'];
  for (let row = 0; row < 8; row++) for (let col = 0; col < 8; col++) { const value = data.pos.matrix[row][col]; const color = colors[Math.min(6, Math.floor(Math.sqrt(value) * 7))]; body += rect(990 + col * 56, 70 + row * 56, 51, 51, color, 2); }
  data.pos.tags.forEach((tag, i) => { body += text(968, 106 + i * 56, tag, 32, '#dce7dc', 400, 'end') + text(1015 + i * 56, 557, tag, 32, '#dce7dc', 400, 'middle'); });
  colors.forEach((color, i) => body += rect(90 + i * 45, 389, 45, 18, color));
  body += text(90, 451, '0', 29, '#adc4bd') + text(405, 451, '1', 29, '#adc4bd', 400, 'end');
  await write('hmm-pos-tagger', svg(body, '#193c3c'), 'Heatmap of eight selected tag-to-tag probabilities from the saved HMM transition table; not accuracy or prediction results.', 'pos-tagger/project_files/trans_probs.txt; smoothed probabilities, selected tags, square-root colour scale from 0 to 1.');
}

// Recorded final causal model only; positive and negative bars share a zero baseline.
{
  let body = text(80, 180, 'News tone', 90, '#353f4a', 600) + text(85, 248, 'after trading costs', 52, '#68737b') + text(86, 330, 'Final causal model', 33, '#68737b') + text(86, 382, 'Out-of-sample CAGR (%)', 33, '#68737b');
  const y = v => 260 - v * 83;
  body += line(760, y(0), 1510, y(0), '#909ba1', 3);
  for (const [i, d] of data.gdelt.entries()) { const x = 820 + i * 240, top = Math.min(y(d.oosCagr), y(0)), height = Math.abs(y(d.oosCagr) - y(0)); body += rect(x, top, 130, height, d.oosCagr < 0 ? '#b87762' : '#6b9482', 2) + text(x + 65, d.oosCagr >= 0 ? top - 24 : top + height + 47, `${d.oosCagr.toFixed(2)}%`, 43, '#46535c', 500, 'middle') + text(x + 65, 554, `${d.costBps} bps`, 34, '#68737b', 400, 'middle'); }
  await write('gdelt-sentiment', svg(body, '#f1efea'), 'Final causal GDELT model’s recorded out-of-sample CAGR: 1.09%, −0.74%, and −2.54% at 0, 5, and 10 bps respectively; not legacy exploratory results.', 'c-finance/README.md final causal-model out-of-sample cost table; saved results, no experiments rerun.');
}

// Conceptual connected notes, deliberately unrelated to real contacts or usage counts.
{
  let body = '';
  const nodes = Array.from({ length: 28 }, (_, i) => { const angle = i * 2.399963; const radius = 60 + Math.sqrt(i / 27) * 225; return [1180 + Math.cos(angle) * radius * 1.2, 300 + Math.sin(angle) * radius]; });
  nodes.forEach((p, i) => { if (i) body += line(...p, ...nodes[Math.floor((i - 1) / 2)], '#655a77', 3); if (i > 4 && i % 3 === 0) body += line(...p, ...nodes[i - 4], '#655a77', 2); });
  nodes.forEach((p, i) => { body += circle(...p, i % 5 === 0 ? 15 : 9, i % 5 === 0 ? '#d2bbdd' : '#8c7ba4'); });
  body += text(80, 228, 'Connected notes', 82, '#eee7f2', 500) + text(85, 300, 'People · context · connections', 37, '#bcadc8') + text(85, 535, 'Concept illustration', 29, '#bcadc8');
  await write('openclaw-network-mapping', svg(body, '#302b3b'), 'Conceptual connected-note graph for the OpenClaw exploration; illustrative nodes, not real contacts or implemented usage.', 'Existing portfolio OpenClaw notes. No matching source checkout was found; graph topology is explicitly illustrative and deterministic.');
}

const manifest = { size: { width: 1600, height: 600 }, generation: 'Deterministic SVG composition, source-image crops, and saved-data plots; no generative image model.', sourceSnapshotSha256: hash(await fs.readFile(snapshotPath)), assetSha256: imageSources, images };
await fs.writeFile(path.join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Generated ${images.length} full-width project banners (${Math.round(images.reduce((sum, i) => sum + i.bytes, 0) / 1024)} KiB total).`);
