import React, { useEffect, useState } from "react";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const fetchQuizQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/quiz/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      // Check if the selected option is correct
      if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }
      // Move to the next question
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null); // Reset selected option for next question
      } else {
        setQuizCompleted(true); // Finish quiz if it's the last question
      }
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizCompleted(false);
  };

  return (
    <div>
      <h1>Quiz Questions</h1>
      {quizCompleted ? (
        <div>
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        questions.length > 0 && (
          <div>
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="quiz"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )
      )}
    </div>
  );
};

export default QuizPage;
