import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz-framework2.css";

const QuizFramework2: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();

    const questions = [
        {
            question: "Why is it important to integrate physical security with cybersecurity?",
            options: ["It reduces the number of employees needed", "It simplifies budgeting", "It improves threat detection, response, and overall security", "It replaces the need for security personnel"],
            answer: "It improves threat detection, response, and overall security",
        },
        {
            question: "What is a cyberattack on a physical system?",
            options: ["A hacking attempt that only affects data", "A digital threat targeting physical infrastructure like access control systems", "A natural disaster affecting a server room", "A power outage causing data loss"],
            answer: "A digital threat targeting physical infrastructure like access control systems",
        },
        {
            question: "Which of the following is considered part of perimeter security?",
            options: ["Keycard access systems", "Fire alarms", "Fences and vehicle barriers", "Security cameras"],
            answer: "Fences and vehicle barriers",
        },
        {
            question: "Physical access to servers and network hardware can lead to cyberattacks.",
            options: ["True", "False"],
            answer: "True",
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
        <div className="quiz2-container">
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
                    <h2 className="question2-title">{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option) => (
                        <button
                            key={option}
                            className="option2-button"
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

export default QuizFramework2;