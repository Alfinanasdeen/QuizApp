import { useState } from "react";
import "./QuizApp.css";
import questionList from "./constant/question.json";
import Question from "./components/question.jsx";
import Result from "./components/result.jsx";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (isCorrect) => {
    const newAnswers = [...userAnswer];
    newAnswers[currentQuestion] = isCorrect;
    setUserAnswer(newAnswers);
    setAnswerSelected(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      //Prevents the "Next" button from being enabled unless an answer has been chosen.
      setAnswerSelected(userAnswer[currentQuestion + 1] !== undefined);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswerSelected(true);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
    setAnswerSelected(false);
    setQuizCompleted(false);
  };

  return (
    <div className="App">
      <h1>Quiz World</h1>
      {!quizCompleted ? (
        <>
          <Question
            questionList={questionList[currentQuestion]}
            onSelectedAnswer={handleAnswerSelection}
          />

          {/* Navigation Buttons */}
          <div className="navigation">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            {currentQuestion < questionList.length - 1 ? (
              <button onClick={handleNextQuestion} disabled={!answerSelected}>
                Next
              </button>
            ) : (
              <button onClick={handleSubmitQuiz} disabled={!answerSelected}>
                Submit Quiz
              </button>
            )}
          </div>
        </>
      ) : (
        <Result
          userAnswer={userAnswer}
          questionList={questionList}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default QuizApp;
