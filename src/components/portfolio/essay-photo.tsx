import Image from "next/image";
import { media } from "@/content/media";

type PhotoProps = { src: string; alt: string; className?: string; priority?: boolean; sizes?: string };

export default function EssayPhoto({
  src, alt, className, priority, sizes = "(max-width: 700px) 95vw, (max-width: 1100px) 75vw, 900px",
}: PhotoProps) {
  const { width, height } = media[src];

  return (
    <a className={className} data-essay-photo href={src} aria-label={`Enlarge: ${alt}`} style={{ display: "block", cursor: "zoom-in", maxWidth: `calc(${width}px / var(--media-dpr, 1))` }}>
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} style={{ width: "100%", height: "auto", display: "block" }} />
    </a>
  );
}
