import { useState, useRef } from "react";
import FlashCardContainer from "./components/FlashCardContainer.jsx";
import QuizPreferences from "./components/QuizPreferences.jsx";
import FetchError from "./components/FetchError.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import "./App.css";

export default function App() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [questionsBeingFetched, setQuestionsBeingFetched] = useState(false);
  const fetchError = useRef(false);
  const prefSubmitButton = useRef(null);

  // Fetches questions from https://opentdb.com and sets `quizQuestions`
  async function quizQuestionFetcher(category, difficulty, type, count) {
    const url =
      `https://opentdb.com/api.php?` +
      `amount=${count}` +
      `&category=${category}` +
      `&difficulty=${difficulty}` +
      `&type=${type}`;

    console.log(`Fetching from ${url}...`);

    // Unmount <FlashCardContainer /> and mount <LoadingSpinner /> during fetch
    // Also keep track if fetch raises some error
    // Disable submit button during fetch
    setQuizQuestions([]);
    setQuestionsBeingFetched(true);
    fetchError.current = false;
    prefSubmitButton.current.disabled = true;

    const questions = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length === 0)
          throw new Error("Could not fetch enough questions!");
        return data.results;
      })
      .catch((err) => {
        fetchError.current = true;
        console.log(err);
      });

    // Unmount spinner and enable submit button after fetch, and exit on unsucessful fetch
    setQuestionsBeingFetched(false);
    prefSubmitButton.current.disabled = false;
    if (questions === undefined) return;

    setQuizQuestions(
      questions.map((q) => {
        return {
          question: stringDecode(q.question),
          answer: stringDecode(q.correct_answer),
          options: [...q.incorrect_answers, q.correct_answer]
            .sort(() => Math.random() - 0.5)
            .map((opt) => stringDecode(opt)),
        };
      })
    );
  }

  function stringDecode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  const status = {
    quizQuestions: quizQuestions,
    fetchError: fetchError,
    questionsBeingFetched: questionsBeingFetched,
    prefSubmitButton: prefSubmitButton,
  };
  console.log(status);

  return (
    <>
      <div className="header">
        <h2> Flash Card Quiz </h2>
      </div>
      <QuizPreferences
        quizQuestionFetcher={quizQuestionFetcher}
        prefSubmitButton={prefSubmitButton}
      />

      {questionsBeingFetched && <LoadingSpinner />}
      {fetchError.current && <FetchError />}
      {quizQuestions.length !== 0 && (
        <FlashCardContainer quizQuestions={quizQuestions} />
      )}
    </>
  );
}
