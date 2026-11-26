import NativeMediaLimit from "@/components/portfolio/native-media-limit";
import SectionHeader from "@/components/portfolio/section-header";
import AuroraReveal from "@/components/portfolio/aurora-reveal";
import CollectionDetails from "@/components/portfolio/collection-details";
import EssayPhoto from "@/components/portfolio/essay-photo";
import EssayViewer from "@/components/portfolio/photo-gallery";
import LifestyleSequence from "./lifestyle-sequence";
import styles from "./lifestyle-essay.module.css";
import notes from "./lifestyle-notes.module.css";

type Film = { src: string; alt: string; poster: string; width: number; height: number };
type Still = { src: string; alt: string; print?: boolean };

const highlights = {
  redAurora: { src: "/images/lifestyle/aurora-red.webp", alt: "Red aurora above a snowy mountain range" },
  greenAurora: { src: "/images/lifestyle/aurora-green.webp", alt: "Green aurora curling over snow-covered trees" },
  pinkAurora: { src: "/images/lifestyle/aurora-pink.webp", alt: "Pink and green northern lights above a mountain valley" },
  budapest: { src: "/images/lifestyle/budapest-parliament.webp", alt: "The red dome and Gothic spires of the Hungarian Parliament" },
  paris: { src: "/images/projects/crop-paris-riverside.png", alt: "A couple beside the water at sunset in Paris" },
  tivoli: { src: "/images/lifestyle/tivoli-triptych.jpg", alt: "Three stacked views of Tivoli Gardens: a sunlit lake, mist over the water after dark, and a roller coaster beside a pagoda" },
  busFilm: { src: "/videos/lifestyle/flixbus.mp4", width: 1280, height: 720, alt: "Bus journey from Amsterdam through Milan to Rome", poster: "/videos/lifestyle/flixbus.jpg" },
  japanFilm: { src: "/videos/japan-vlog-portfolio.mp4", width: 1080, height: 1920, alt: "Japan travel vlog", poster: "/images/IMG_3726.webp" },
  workshop: { src: "/images/blacksmith1-polaroid.png", alt: "An instant print from the blacksmithing workshop", print: true },
  blade: { src: "/images/blacksmith2-polaroid.png", alt: "A finished blade from the workshop", print: true },
};

const cameraRoll: (Still | Film)[] = [
  { src: "/images/grid/photo4.webp", alt: "Snow-covered branches against a pale blue sky" },
  { src: "/images/grid/photo8.webp", alt: "Power lines crossing a snow-covered landscape" },
  { src: "/images/projects/crop-paris-night.png", alt: "Red flares lighting a Paris crowd after dark" },
  { src: "/images/grid/photo3.webp", alt: "A city street seen between rows of buildings" },
  { src: "/images/grid/photo5.webp", alt: "Lights spilling from doorways onto a narrow street at night" },
  { src: "/images/grid/photo2.webp", alt: "A lantern lighting up red foliage at dusk" },
  { src: "/images/grid/photo9.webp", alt: "A city skyline in the golden evening light" },
  { src: "/images/grid/photo1.webp", alt: "The sun low over a city and its river" },
  { src: "/images/lifestyle/sea-kayak.webp", alt: "Two paddlers in an orange kayak beyond a swell" },
  { src: "/images/lifestyle/hillside-climb.webp", alt: "A lone hiker climbing a steep hillside at dusk" },
  { src: "/images/lifestyle/rocky-ledge.webp", alt: "Three people on a ledge beneath an overhanging rock face" },
  { src: "/images/grid/photo6.webp", alt: "Trees reflected in a stretch of open water" },
  { src: "/images/grid/photo7.webp", alt: "Clouds over the rooftops of a hillside town" },
  { src: "/images/lifestyle/monument-statues.webp", alt: "Statues silhouetted against blue sky at the base of a stone column" },
  { src: "/videos/lifestyle/travel-4958.mp4", width: 720, height: 1280, alt: "A crowd dressed in orange on a canal boat", poster: "/videos/lifestyle/travel-4958.jpg" },
  { src: "/images/lifestyle/print-at-the-table.webp", alt: "Friends sitting together at a table", print: true },
  { src: "/images/lifestyle/print-cathedral.webp", alt: "Friends in front of a cathedral", print: true },
  { src: "/images/lifestyle/print-certificates.webp", alt: "Two people holding certificates", print: true },
  { src: "/images/lifestyle/plate-armour.webp", alt: "A suit of plate armour lit against a dark backdrop" },
];

function TravelFilm({ film }: { film: Film }) {
  return (
    <video controls playsInline preload="none" poster={film.poster} aria-label={film.alt}
      width={film.width} height={film.height}
      style={{ maxWidth: `calc(${film.width}px / var(--media-dpr, 1))`, aspectRatio: `${film.width} / ${film.height}` }}>
      <source src={film.src} type="video/mp4" />
    </video>
  );
}

export default function LifestylePanel() {
  return (
    <NativeMediaLimit>
      <div className={`section-page lifestyle-page ${styles.page}`}>
        <div className={styles.masthead}>
          <SectionHeader section="lifestyle" title="Lifestyle" headingId="lifestyle-heading" />
          <aside className={notes.note}>
            <h2>Camera stack</h2>
            <ul>
              <li>iPhone 15 Pro</li>
              <li>Sony A6400</li>
              <li>DJI Osmo Nano</li>
            </ul>
          </aside>
        </div>

        <LifestyleSequence>
          <section id="photography" className={styles.night} aria-labelledby="aurora-title">
            <EssayViewer>
              <AuroraReveal {...highlights.redAurora} title="Exploits in Norway" />
              <div className={styles.skyPair}>
                <EssayPhoto {...highlights.greenAurora} sizes="(max-width: 900px) 23vw, 200px" />
                <EssayPhoto {...highlights.pinkAurora} sizes="(max-width: 900px) 48vw, 420px" />
              </div>
            </EssayViewer>
          </section>

          <section id="amsterdam-rome" className={styles.route} aria-labelledby="route-title">
            <div className={styles.routeSpread}>
              <div>
                <h2 id="route-title">Best &amp; Worst Ideas</h2>
                <p>Two spur-of-the-moment trips. One by FlixBus from Amsterdam to Rome, the other on foot in Spain.</p>
              </div>
              <TravelFilm film={highlights.busFilm} />
            </div>
          </section>

          <section id="travel" className={styles.europe} aria-labelledby="europe-title">
            <div className={styles.europeSpread}>
              <h2 id="europe-title">European Favourites</h2>
              <EssayViewer>
                <div className={styles.postcards}>
                  <div className={styles.cities}>
                    <EssayPhoto {...highlights.budapest} />
                    <EssayPhoto {...highlights.paris} />
                  </div>
                  <EssayPhoto {...highlights.tivoli} sizes="(max-width: 900px) 32vw, 300px" />
                </div>
              </EssayViewer>
              <p>Parliament in Budapest, a couple by the river in Paris, and Tivoli Gardens in Copenhagen.</p>
            </div>
          </section>

          <section id="japan" className={styles.cinema} aria-labelledby="japan-title">
            <div className={styles.screening}>
              <h2 id="japan-title">2 months in Japan</h2>
              <TravelFilm film={highlights.japanFilm} />
            </div>
          </section>

          <section id="blacksmithing" className={styles.workshop} aria-labelledby="workshop-title">
            <div className={styles.bench}>
              <h2 id="workshop-title">Others</h2>
              <EssayViewer>
                <div className={styles.line}>
                  <EssayPhoto {...highlights.workshop} sizes="(max-width: 720px) 36vw, 315px" />
                  <EssayPhoto {...highlights.blade} sizes="(max-width: 720px) 36vw, 315px" />
                </div>
              </EssayViewer>
            </div>
          </section>
        </LifestyleSequence>

        <CollectionDetails className={styles.archive} id="city-light">
          <summary>More from the camera roll</summary>
          <EssayViewer>
            <div className={styles.roll}>
              {cameraRoll.map(item => "poster" in item ? (
                <TravelFilm key={item.src} film={item} />
              ) : (
                <EssayPhoto key={item.src} {...item} className={item.print ? styles.print : undefined} />
              ))}
            </div>
          </EssayViewer>
        </CollectionDetails>
      </div>
    </NativeMediaLimit>
  );
}
