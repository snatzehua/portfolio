import Image from "next/image";

export const LIFESTYLE_NAV = [
  { id: "life-0", label: "Travel" },
  { id: "life-1", label: "Photography" },
  { id: "life-2", label: "Blacksmithing" },
];

export default function LifestylePanel() {
  return (
    <div className="panel">
      <article id="life-0" className="post-card">
        <h2 className="post-media-title">Exploring Authenticity</h2>
        <video className="post-video" controls preload="none">
          <source src="/videos/japan-vlog-portfolio.mp4" type="video/mp4" />
        </video>
        <p className="post-body">
          I love diving deep into authentic experiences — going where only
          locals eat, talking to strangers, or having a freezing barbeque in
          front of Mt. Fuji just because I wanted to. I love the spontaneity
          of the moment and the warmth of genuine connections.
        </p>
      </article>

      <article id="life-1" className="post-card">
        <h2 className="post-media-title">Finding Moments</h2>
        <div className="post-photo-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <Image
              key={i}
              src={`/images/grid/photo${i + 1}.webp`}
              alt={`photo ${i + 1}`}
              width={300}
              height={300}
            />
          ))}
        </div>
        <p className="post-body">
          With a Sony A6400 and an iPhone 15 Pro, I try to capture authentic
          moments — expressing emotions in subtle ways. Photography for me
          isn&apos;t about technical perfection; it&apos;s about presence and
          noticing the beauty in what&apos;s already there.
        </p>
      </article>

      <article id="life-2" className="post-card">
        <h2 className="post-media-title">Forging Ahead</h2>
        <div className="post-polaroids">
          <Image
            src="/images/blacksmith1-polaroid.png"
            alt="Blacksmithing"
            width={1000}
            height={1000}
            className="post-polaroid-1"
          />
          <Image
            src="/images/blacksmith2-polaroid.png"
            alt="Blacksmithing"
            width={1000}
            height={1000}
            className="post-polaroid-2"
          />
        </div>
        <p className="post-body">
          Blacksmithing is something most people don&apos;t expect when they
          ask about your hobbies. I jumped at the chance to try it at a local
          workshop — learning to work with high-carbon steel, shape it into a
          blade, and refine it through grinding and polishing.
        </p>
      </article>
    </div>
  );
}
