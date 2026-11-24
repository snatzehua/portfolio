import manifest from "../../public/images/projects/banners/manifest.json";

const covers = new Map(manifest.images.map(image => [image.src, image]));

export function projectCover(src: string, alt: string) {
  const image = covers.get(src);
  return {
    src: image ? `${src}?v=${image.sha256.slice(0, 12)}` : src,
    alt,
    width: image?.width ?? manifest.size.width,
    height: image?.height ?? manifest.size.height,
  };
}
