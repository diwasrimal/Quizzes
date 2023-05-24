import { useState } from "react";
import "../styles/QuizCategoryPicker.css"

export default function QuizCategoryPicker({
  quizCategories,
  quizCategory,
  setQuizCategory,
}) {

  return (
    <label>
      Category:
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
