import manifest from "../../public/images/projects/banners/manifest.json";

const versions = new Map(manifest.images.map(({ src, sha256 }) => [src, sha256.slice(0, 12)]));

export function projectCoverSrc(src: string) {
  const version = versions.get(src);
  return version ? `${src}?v=${version}` : src;
}
