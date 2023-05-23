import { useState, useRef } from "react"
import "./FlashCard.css"


export default function FlashCard({ question, options, answer }) {

  // Flips the card
  const [flipped, setFlipped] = useState(false)
  // const cardRef = useRef(null)

  // function setInitialCardHeight() {
  //   if (flipped) {
  //     cardRef.current.style.setProperty(
  //       "--initial-height",
  //       `${cardRef.current.offsetHeight}px`
  //     )
  //   }
  // }

  return (
    <div 
      className={`flash-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      // onTransitionEnd={setInitialCardHeight}
      // ref={cardRef}
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
  )
}
