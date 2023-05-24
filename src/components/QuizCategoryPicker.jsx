import { useState } from "react";

export default function QuizCategoryPicker({
  quizCategories,
  quizCategory,
  setQuizCategory,
}) {

  return (
    <label>
      Quiz type
      <select
        value={quizCategory}
        onChange={(e) => setQuizCategory(e.target.value)}
      >
        {quizCategories.map((category, i) => {
          return (
            <option value={category} key={i}>
              {category}
            </option>
          );
        })}
      </select>
    </label>
  );
}
