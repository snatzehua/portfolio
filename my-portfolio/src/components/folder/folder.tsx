import "./styles.css";

import Image from "next/image";
import Head from "next/head";

<Head>
  <link
    rel="preload"
    as="image"
    href="/images/folder.png"
    fetchPriority="high"
  />
</Head>;

interface FolderProps {
  title: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
  imgSrc: string;
}

export default function Folder({
  title,
  period,
  description,
  tags,
  index,
  imgSrc,
}: FolderProps) {
  return (
    <section
      className="folder-section"
      style={{ "--i": index } as React.CSSProperties}
    >
      <div className="folder-image-wrapper">
        <div className="folder-content">
          <div className="top-section">
            <h1>{title}</h1>
            <p className="folder-period">{period}</p>
            <div className="folder-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="folder-image">
            <Image
              src={imgSrc}
              alt="Folder visual"
              width={10000}
              height={10000}
              className="project-image"
              priority
            />
          </div>
          <div className="folder-tags">
            {tags.map((tag, i) => (
              <span className="folder-tag" key={i}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
