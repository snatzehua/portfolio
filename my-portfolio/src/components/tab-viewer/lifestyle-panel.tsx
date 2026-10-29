import PhotoGallery from "@/components/portfolio/photo-gallery";
import Image from "next/image";

export default function LifestylePanel() {
  return (
    <div className="section-page lifestyle-page">
      <header className="section-heading lifestyle-photo-heading">
        <Image src="/images/path.jpg" alt="A stone path winding through a green forest" fill sizes="(max-width: 760px) 90vw, 780px" />
        <div className="lifestyle-photo-copy"><p className="eyebrow">03 / Outside the screen</p><h1 id="lifestyle-heading">A few other things<span className="heading-dot">.</span></h1><p>Places, moments, and the occasional unexpected hobby.</p></div>
      </header>
      <section className="lifestyle-section" id="travel">
        <div className="lifestyle-section-heading"><span className="eyebrow">01 / Travel</span><h2>Exploring authenticity</h2></div>
        <video className="lifestyle-video" controls preload="none" playsInline poster="/images/IMG_3726.webp" aria-label="Japan travel vlog"><source src="/videos/japan-vlog-portfolio.mp4" type="video/mp4" />Your browser does not support this video.</video>
        <p>I love diving deep into authentic experiences — going where only locals eat, talking to strangers, or having a freezing barbeque in front of Mt. Fuji just because I wanted to. I love the spontaneity of the moment and the warmth of genuine connections.</p>
      </section>
      <section className="lifestyle-section" id="photography">
        <div className="lifestyle-section-heading"><span className="eyebrow">02 / Photography</span><h2>Finding moments</h2></div>
        <PhotoGallery photos={Array.from({ length: 9 }, (_, i) => ({ src: `/images/grid/photo${i + 1}.webp`, alt: `travel photograph ${i + 1}` }))} />
        <p>With a Sony A6400 and an iPhone 15 Pro, I try to capture authentic moments — expressing emotions in subtle ways. Photography for me isn&apos;t about technical perfection; it&apos;s about presence and noticing the beauty in what&apos;s already there.</p>
      </section>
      <section className="lifestyle-section" id="blacksmithing">
        <div className="blacksmithing-layout">
          <div className="blacksmithing-copy">
            <div className="lifestyle-section-heading"><span className="eyebrow">03 / Blacksmithing</span><h2>Forging ahead</h2></div>
            <p>Blacksmithing is something most people don&apos;t expect when they ask about your hobbies. I jumped at the chance to try it at a local workshop — learning to work with high-carbon steel, shape it into a blade, and refine it through grinding and polishing.</p>
          </div>
          <PhotoGallery polaroids photos={[{ src: "/images/blacksmith1-polaroid.png", alt: "blacksmithing workshop photograph 1" }, { src: "/images/blacksmith2-polaroid.png", alt: "blacksmithing workshop photograph 2" }]} />
        </div>
      </section>
    </div>
  );
}
