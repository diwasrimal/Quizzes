import { useState } from "react";

export default function QuizQuestionTypePicker({
  questionTypes,
  questionType,
  setQuestionType,
}) {
  return (
    <label>
      <select
        value={questionType}
        onChange={(e) => setQuestionType(e.target.value)}
      >
        {questionTypes.map((type, i) => {
          return (
            <option value={type} key={i}>
              {type}
            </option>
          );
        })}
      </select>
    </label>
  );
}
