import "./styles.css";

interface QuoteProps {
  text: string;
  header?: string;
}

export default function QuotedText({ text, header }: QuoteProps) {
  return (
    <div className="quote-wrapper">
      {header && <h3 className="quote-header">{header}</h3>}
      <div className="quote">{text}</div>
    </div>
  );
}
