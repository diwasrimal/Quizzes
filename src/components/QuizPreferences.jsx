import { useState } from "react";
import {
  quizCategoriesMap,
  difficultiesMap,
  questionTypesMap,
} from "../assets/quizParameters.js";
import {
  QuizCategoryPicker,
  QuizDifficultyPicker,
  QuizQuestionTypePicker,
  QuizQuestionCounter,
} from "./QuizPreferencePickers.jsx";
import "../styles/QuizPreferences.css";

const quizCategories = Object.keys(quizCategoriesMap);
const difficulties = Object.keys(difficultiesMap);
const questionTypes = Object.keys(questionTypesMap);

export default function QuizPreferences({ quizQuestionFetcher, prefSubmitButton }) {
  const [quizCategory, setQuizCategory] = useState(quizCategories[0]);
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [questionType, setQuestionType] = useState(questionTypes[1]);
  const [questionCount, setQuestionCount] = useState(15);

  function sumbitHandler(e) {
    e.preventDefault();
    quizQuestionFetcher(
      quizCategoriesMap[quizCategory], 
      difficultiesMap[difficulty], 
      questionTypesMap[questionType],
      questionCount
    );
  }

  return (
    <form  className="pref-form" onSubmit={sumbitHandler}>
      <h4 style={{ margin: 0 }}>Quiz Preferences</h4>
      
      <QuizCategoryPicker {...{ quizCategories, quizCategory, setQuizCategory }} />
      <QuizDifficultyPicker {...{ difficulties, difficulty, setDifficulty }} />
      <QuizQuestionTypePicker {...{ questionTypes, questionType, setQuestionType }} />
      <QuizQuestionCounter {...{ questionCount, setQuestionCount }} />
      <button className="submit-btn" ref={prefSubmitButton}>Confirm</button>
    </form>
  );
}
