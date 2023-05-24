import { useState, useEffect, useRef } from "react";
import FlashCardContainer from "./components/FlashCardContainer.jsx";
import QuizPreferences from "./components/QuizPreferences.jsx";
import FetchError from "./components/FetchError.jsx";
import "./App.css";

export default function App() {
  // quizQuestions is a list of objects containing a question, a answer and options
  const [quizQuestions, setQuizQuestions] = useState([]);
  let questionsWereFetched = useRef(false);

  // Helps us know if we fetched any questions
  // We shouldn't display <FetchError /> if we haven't
  // tried to fetched any questions.
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

    console.log(`Retrieving from ${url}`);

    let responseData = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    console.log("Fetch complete!");

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

      {/* Show error only if question were fetched but had zero length */}
      {questionsWereFetched.current && (
        quizQuestions.length === 0 ? (
          <FetchError />
        ) : (
          <FlashCardContainer quizQuestions={quizQuestions} />
        )
      )}

    </>
  );
}
