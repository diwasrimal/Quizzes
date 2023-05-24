import { useState } from "react";
import uuid from "react-uuid";
import FlashCard from "./FlashCard.jsx";
import "../styles/FlashCardContainer.css";

export default function FlashCardContainer({ quizQuestions }) {
	return (
		<div className="flash-card-container">
			{quizQuestions.map((q, i) => (
				<FlashCard
					question={q.question}
					options={q.options}
					answer={q.answer}
					key={i}
				/>
			))}
		</div>
	);
}
