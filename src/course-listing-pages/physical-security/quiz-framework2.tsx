import React, { useState } from "react";
import "./quiz-framework.css"; // Updated import

interface QuizFrameworkProps {
    onGoHome: () => void;
}

const QuizFramework: React.FC<QuizFrameworkProps> = ({ onGoHome }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: "Phishing question answer 12?",
            options: ["5", "10", "12", "8"],
            answer: "12",
        },
        {
            question: "Phishing question answer the weird one?",
            options: ["ILoveDog$", "password333", ":Fz7!397$pm>", "123456"],
            answer: ":Fz7!397$pm>",
        },
        {
            question: "Phishing question answer all of the above?",
            options: ["lowercase letters", "special characters", "numbers", "All of the above"],
            answer: "All of the above",
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

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="quiz-box result-container">
                    <h2 className="question-title">Quiz Completed!</h2>
                    <p>Your Score: {score} / {questions.length}</p>
                    <button className="restart-button" onClick={onGoHome}>
                        Home
                    </button>
                </div>
            ) : (
                <div className="quiz-box">
                    <h2 className="question-title">{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option) => (
                        <button key={option} className="option-button" onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuizFramework;