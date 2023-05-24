import { useState } from "react";

export default function QuizQuestionCounter({
  questionCount,
  setQuestionCount,
}) {
  const maxCount = 50;
  return (
    <label>
      Count:
      <input
        type="number"
        value={questionCount}
        max={maxCount}
        onChange={(e) => setQuestionCount(e.target.value)}
      />
    </label>
  );
}
