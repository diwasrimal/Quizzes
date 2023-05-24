import { useState } from "react";
import "../styles/FlashCard.css";

export default function FlashCard({ question, options, answer }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flash-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">
        {question}
        <ul>
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
      <div className="back">{answer}</div>
    </div>
  );
}
