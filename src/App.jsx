import { useState, useEffect, useRef } from "react";
import FlashCardContainer from "./components/FlashCardContainer.jsx";
import QuizPreferences from "./components/QuizPreferences.jsx";
import FetchError from "./components/FetchError.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import "./App.css";

export default function App() {
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Used to unmount flash card components and show loading
  // spinner while questions are being fetched
  const [fetchingQuestions, setFetchingQuestions] = useState(false);

  // Helps us know if we fetched any questions
  // We shouldn't display <FetchError /> if we haven't
  // tried to fetched any questions.
  let questionsWereFetched = useRef(false);
  useEffect(() => {
    questionsWereFetched.current = true;
  }, [quizQuestions]);

  console.log("questionsWereFetched: ", questionsWereFetched.current);

  // Fetches questions from https://opentdb.com and sets `quizQuestions`
  async function quizQuestionFetcher(category, difficulty, type, count) {
    const url =
      `https://opentdb.com/api.php?` +
      `amount=${count}` +
      `&category=${category}` +
      `&difficulty=${difficulty}` +
      `&type=${type}`;

    console.log(`Fetching from ${url}...`);
    setFetchingQuestions(true);

    let responseData = await fetch(url)
      .then((res) => {
        setFetchingQuestions(false);
        console.log("Fetched!");
        return res.json();
      })
      .catch((err) => console.log(err));

    // Update question state with fetched data
    setQuizQuestions(
      responseData.results.map((r) => {
        return {
          question: stringDecode(r.question),
          answer: stringDecode(r.correct_answer),
          options: [...r.incorrect_answers, r.correct_answer]
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

  console.log(quizQuestions);

  return (
    <>
      <div className="header">
        <h2> Flash Card Quiz </h2>
      </div>

      <QuizPreferences quizQuestionFetcher={quizQuestionFetcher} />

      {/* Show spinner when questions are being fetched */}
      {fetchingQuestions
        ? <LoadingSpinner />
        : // Show error if questions were fetched but had zero length
          questionsWereFetched.current &&
          (quizQuestions.length === 0 ? (
            <FetchError />
          ) : (
            <FlashCardContainer
              quizQuestions={quizQuestions}
              fetchingQuestions={fetchingQuestions}
            />
          ))}
    </>
  );
}
