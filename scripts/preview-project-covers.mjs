import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { checkProjectCovers } from './check-project-covers.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = await checkProjectCovers();
const columns = 3, width = 440, height = 165, captionHeight = 36, gap = 24;
const tiles = [];
for (const [i, image] of manifest.images.entries()) {
  const left = gap + (i % columns) * (width + gap), top = gap + Math.floor(i / columns) * (height + captionHeight + gap);
  tiles.push({ input: await sharp(path.join(root, 'public', image.src)).resize(width, height).toBuffer(), left, top });
  // Slugs are validated by checkProjectCovers and contain no markup characters.
  const caption = `<svg width="${width}" height="${captionHeight}"><rect width="100%" height="100%" fill="#fff"/><text x="10" y="24" font-family="Arial,sans-serif" font-size="14" fill="#25333a">${image.slug}</text></svg>`;
  tiles.push({ input: Buffer.from(caption), left, top: top + height });
}
const output = path.join(root, '.banner-preview/projects.webp');
await fs.mkdir(path.dirname(output), { recursive: true });
await sharp({ create: { width: columns * (width + gap) + gap, height: Math.ceil(manifest.images.length / columns) * (height + captionHeight + gap) + gap, channels: 3, background: '#e8e6e1' } }).composite(tiles).webp({ quality: 92 }).toFile(output);
console.log(`Card-size review sheet: ${output}`);
