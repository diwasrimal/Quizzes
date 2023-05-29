import { useState, useEffect, useRef } from "react";
import "../styles/FlashCard.css";

const MIN_CARD_HEIGHT = 200;

export default function FlashCard({ question, options, answer }) {
  const [flipped, setFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState(MIN_CARD_HEIGHT);
  const frontSide = useRef(null);
  const backSide = useRef(null);

  // Resize the card when window resizes
  useEffect(() => {
    window.addEventListener("resize", resizeCard);
    return () => window.removeEventListener("resize", resizeCard);
  }, []);

  // Resize the card when props change
  useEffect(() => {
    resizeCard();
  }, [question, options, answer]);

  // Set the card's height to max of front height, back height and 200px
  function resizeCard() {
    const frontHeight = frontSide.current.getBoundingClientRect().height;
    const backHeight = backSide.current.getBoundingClientRect().height;
    const maxHeight = Math.max(frontHeight, backHeight, MIN_CARD_HEIGHT);
    setCardHeight(maxHeight);
  }

  return (
    <div
      className={`flash-card ${flipped ? "flipped" : ""}`}
      style={{ height: `${cardHeight}px` }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front" ref={frontSide}>
        {question}
        <ul>
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
      <div className="back" ref={backSide}>
        {answer}
      </div>
    </div>
  );
}
