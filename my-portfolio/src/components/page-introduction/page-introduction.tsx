import "./styles.css";

import QuotedText from "../quoted-text/quoted-text";
import ScrollPrompt from "../scroll-prompt/scroll-prompt";

interface PageIntroductionProps {
  text: React.ReactNode;
  header?: string;
}

export default function PageIntroduction({
  text,
  header,
}: PageIntroductionProps) {
  return (
    <>
      <div className="scroll-section">
        <div className="section-wrapper">
          <div className="pattern-bg">
            <div className="content-wrapper">
              <QuotedText text={text} header={header} />
            </div>
            <ScrollPrompt />
          </div>
        </div>
      </div>
    </>
  );
}
