/* Stuff I need to do next

- implement a kahoot-esque point system where fast answers = more points
- User gets the most possible points first attempt, every attempt after, points are cut by half
- ^ enourages user to try their hardest first attempt for max points
- ^^ add a message telling user that to get max points they need to get 100 first try
- ^ If user doesn't get 100% first try, user is prompted to try again
- aka implement the timer like the matching game
- make a pop up that shows the points you got before hitting home
- figure out how to store the points to the user's account
- leaderboard + phishing email gen
- put DaBird with a little speech bubble in case the user forgets instructions
*/
import React, { useState } from "react";
import "./QuizGame.css"; // Import the new CSS file

interface QuizAppProps {
    onGoHome: () => void;
}

const QuizApp: React.FC<QuizAppProps> = ({ onGoHome }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: "What is the minimum number of characters a password should have?",
            options: ["5", "10", "12", "8"],
            answer: "12",
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

export default QuizApp;
