export default function Home() {
  return (
    <div className="scroll-view">
      <div className="base-screen">
        <div className="image-container">
          <img
            className="mask-layer"
            src="/images/background-mask-layer.png"
            alt="Mask Image"
          ></img>
        </div>
      </div>
      <div className="section-wrapper">
        <div className="timeline">
          <div className="timeline-item">
            <img src="/images/RI-logo-circle.png"></img>
            <div className="content">
              <h2>Raffles Institution (IP)</h2>
              <h3>GCE 'A'-levels (2015-2020)</h3>
              <p>83.75 RP - AAB/B</p>
              <p>Raffles Diploma - Distinction</p>
              <p>Integrated Programme Y1-6 PCME</p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="/images/MINDEF-logo-circle.png"></img>
            <div className="content">
              <h2>National Service (Joint Service)</h2>
              <h3>Regular Service / Full-time NS (2021 - 2022)</h3>
              <p>BSOM Award</p>
              <p>Airforce Recruitment Centre, Pilot & WSO Recruitment</p>
              <p>Officer Cadet - Pilot Trainee</p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="/images/NUS-logo-circle.png"></img>
            <div className="content">
              <h2>National University of Singapore (NUS)</h2>
              <h3>BSC (Hons) in Business Analytics (2023 - Present)</h3>
              <p>4.48/5.00 CAP</p>
              <p>Double Speciailisation in Machine Learning & Finance</p>
              <p>Teaching Assistant for CS1010 - Programming Methodology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-wrapper">
        <div className="pattern-bg"></div>
      </div>
    </div>
  );
}
