import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz-framework.css";

const QuizFramework1: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();

    const questions = [
        {
            question: "What is the minimum number of characters a password should have?",
            options: ["12", "10", "16", "8"],
            answer: "16",
        },
        {
            question: "Which password is the strongest?",
            options: ["ILoveDog$", "password333", ":Fz7!397$pm>", "123456"],
            answer: ":Fz7!397$pm>",
        },
        {
            question: "Which of the following characters should be in a strong password?",
            options: ["lowercase letters", "special characters", "numbers", "All of the above"],
            answer: "All of the above",
        },
        {
            question: "You should use the same password for all your accounts.",
            options: ["True", "False"],
            answer: "False",
        },
    ];

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRetry = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="quiz-box result-container">
                    <h2 className="question-title">Quiz Completed!</h2>
                    <p>Your Score: {score} / {questions.length}</p>
                    {score === questions.length ? (
                        <button className="btn btn-error p-3 pointer-events-auto" onClick={() => navigate(-1)}>
                            Finish
                        </button>
                    ) : (
                        <button className="btn btn-error p-3 pointer-events-auto" onClick={handleRetry}>
                            Retry
                        </button>
                    )}
                </div>
            ) : (
                <div className="quiz-box">
                    <h2 className="question-title">{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option) => (
                        <button
                            key={option}
                            className="option-button"
                            onClick={() => handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuizFramework1;