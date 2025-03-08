import React, { useState } from "react";

interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
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

const QuizApp: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);

    const handleAnswer = (option: string) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

   
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column" as "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(to bottom right,rgb(74, 10, 10),rgb(82, 11, 11))",
            padding: "20px",
            color: "black", 
        },
        quizBox: {
            background: "white",
            color: "black", // 
            padding: "20px",
            width: "400px",
            textAlign: "center" as "center",
            fontFamily: "'Arial', sans-serif", 
        },
        questionTitle: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "black", 
            marginBottom: "15px",
            fontFamily: "'Arial', sans-serif", 
        },
        optionsContainer: {
            display: "flex",
            flexDirection: "column" as "column",
            gap: "10px",
        },
        optionButton: {
            padding: "12px 16px",
            fontSize: "1rem",
            background: "#D3D3D3", 
            color: "black", 
            border: "none",
            borderRadius: "0px", 
            cursor: "pointer",
            transition: "0.3s",
        },
        optionButtonHover: {
            background: "#A9A9A9", 
        },
        resultContainer: {
            textAlign: "center" as "center",
        },
        restartButton: {
            marginTop: "20px",
            padding: "12px 16px",
            fontSize: "1rem",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.quizBox}>
                {showResult ? (
                    <div style={styles.resultContainer}>
                        <h2 style={styles.questionTitle}>Quiz Completed!</h2>
                        <p className="text-xl mt-2">
                            Your Score: {score} / {questions.length}
                        </p>
                        <button
                            style={styles.restartButton}
                            onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowResult(false);
                            }}
                        >
                            Home
                        </button>
                    </div>
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <h2 style={styles.questionTitle}>{questions[currentQuestion].question}</h2>
                        <div style={styles.optionsContainer}>
                            {questions[currentQuestion].options.map((option) => (
                                <button
                                    key={option}
                                    style={styles.optionButton}
                                    onMouseOver={(e) => (e.currentTarget.style.background = styles.optionButtonHover.background)}
                                    onMouseOut={(e) => (e.currentTarget.style.background = styles.optionButton.background)}
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizApp;




