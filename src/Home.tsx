import React from "react";

interface HomeProps {
    onStartQuiz: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz }) => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to the Quiz Game!</h1>
            <button onClick={onStartQuiz}>Start Quiz</button>
        </div>
    );
};

export default Home;