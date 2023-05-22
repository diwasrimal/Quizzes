import FlashCardContainer from "./FlashCardContainer.jsx"
import quizQuestions from "./questions.js"
import "./App.css"

export default function App() {
  return (
    <FlashCardContainer quizQuestions={quizQuestions} />
  )
}
