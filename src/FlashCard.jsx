import { useState } from "react"
import "./FlashCard.css"


export default function FlashCard({question, options, answer }) {

  // Flips the card
  const [flipped, flip] = useState(false)

  return (
    <div 
      className={"flash-card " + (flipped ? "flipped" : "unflipped")}
      onClick={() => flip(!flipped)}
    >
      {flipped ? (
        <div className="answer">{answer}</div>
      ) : (
        <div>
          {question}
          <ul>
            {options.map((option, i) => (
              <li key={i}>{option}</li> 
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
