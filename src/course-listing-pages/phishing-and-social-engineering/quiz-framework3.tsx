import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz-framework3.css";

const QuizFramework3: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();

    const questions = [
        {
            question: "What the goal of social engineering?",
            options: ["To physically damage a network", "To upgrade software on a system", "To increase website traffic", "To manipulate people into revealing information"],
            answer: "To manipulate people into revealing information",
        },
        {
            question: "What is phishing?",
            options: ["A scam where attackers trick people into giving up personal information", "A method of creating strong passwords", "A type of firewall", "A secure way to share login credentials"],
            answer: "A scam where attackers trick people into giving up personal information",
        },
        {
            question: "Which of the following is a common sign of a phishing email?",
            options: ["It’s sent from your boss’s personal email", "It contains spelling mistakes and urgent requests", "It has a generic greeting like “Dear Customer”", "All of the above"],
            answer: "All of the above",
        },
        {
            question: "What should you do if you receive a suspicious message asking for your password?",
            options: ["Reply and ask for more information", "Click the link to verify", "Report it to your IT/security team", "Forward it to your friends"],
            answer: "Report it to your IT/security team",
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
        <div className="quiz3-container">
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
                            className="option3-button"
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

export default QuizFramework3;
