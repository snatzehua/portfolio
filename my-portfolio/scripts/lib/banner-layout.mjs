// Shared output contract; individual banners retain their own art direction.
export const bannerSpec = Object.freeze({ width: 1600, height: 600, quality: 90, effort: 6 });

// Fit a complete point set without changing its geometry or clipping its nodes.
// Padding reserves room for point radii and strokes inside the target rectangle.
export function fitPoints(points, { x, y, width, height, padding = 0 }) {
  if (!points.length || points.some(p => p.length !== 2 || p.some(v => !Number.isFinite(v)))) {
    throw new Error('Expected a non-empty set of finite [x, y] points');
  }
  if (![x, y, width, height, padding].every(Number.isFinite) || padding < 0 || width <= 2 * padding || height <= 2 * padding) {
    throw new Error('Expected a positive target rectangle with room for padding');
  }
  const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const spanX = maxX - minX, spanY = maxY - minY;
  const scale = Math.min(spanX ? (width - padding * 2) / spanX : Infinity, spanY ? (height - padding * 2) / spanY : Infinity);
  const uniformScale = Number.isFinite(scale) ? scale : 1;
  return points.map(([px, py]) => [
    x + width / 2 + (px - (minX + maxX) / 2) * uniformScale,
    y + height / 2 + (py - (minY + maxY) / 2) * uniformScale,
  ]);
}
