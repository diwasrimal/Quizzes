import { useState } from "react";

export default function QuizQuestionTypePicker({
  questionTypes,
  questionType,
  setQuestionType,
}) {
  return (
    <label>
      Type:
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
