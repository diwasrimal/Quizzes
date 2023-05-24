import { useState } from "react";

export default function QuizDifficultyPicker({
  difficulties,
  difficulty,
  setDifficulty,
}) {
  return (
    <label>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        {difficulties.map((diffLevel, i) => {
          return (
            <option value={diffLevel} key={i}>
              {diffLevel}
            </option>
          );
        })}
      </select>
    </label>
  );
}
