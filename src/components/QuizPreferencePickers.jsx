import "../styles/QuizPreferencePickers.css";

// A dropdown that selects the quiz category
export function QuizCategoryPicker({
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

// A dropdown that selects the difficulty level
export function QuizDifficultyPicker({
  difficulties,
  difficulty,
  setDifficulty,
}) {
  return (
    <label>
      Difficulty:
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

// Select a type of question, Ex- Math, Science, History
export function QuizQuestionTypePicker({
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

// Number of questions to be displayed.
export function QuizQuestionCounter({ questionCount, setQuestionCount }) {
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
