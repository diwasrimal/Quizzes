import { useState } from "react";

export default function QuizQuestionCounter({
  questionCount,
  setQuestionCount,
}) {
  return (
    <label>
      Question count
      <input
        type="number"
        value={questionCount}
        onChange={(e) => setQuestionCount(e.target.value)}
      />
    </label>
  );
}
