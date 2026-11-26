import styles from "./travel-clips.module.css";

const clips = [
  { file: "flixbus", label: "Bus journey from Amsterdam through Milan to Rome", width: 1280, height: 720 },
  { file: "travel-4958", label: "A crowd dressed in orange on a canal boat", width: 720, height: 1280 },
  { file: "tivoli", label: "Day and night scenes at Tivoli", width: 720, height: 1280 },
];

export default function TravelClips() {
  return (
    <div className={styles.clips}>
      {clips.map(({ file, label, width, height }) => (
        <video
          key={file}
          controls
          playsInline
          preload="none"
          width={width}
          height={height}
          aria-label={label}
          poster={`/videos/lifestyle/${file}.jpg`}
        >
          <source src={`/videos/lifestyle/${file}.mp4`} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
