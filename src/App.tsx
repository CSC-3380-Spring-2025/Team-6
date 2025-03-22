import React, { useState } from "react";
import Home from "./Home.tsx";
import QuizApp from "./QuizApp.tsx";

const App: React.FC = () => {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div>
            {showQuiz ? (
                <QuizApp onGoHome={() => setShowQuiz(false)} />
            ) : (
                <Home onStartQuiz={() => setShowQuiz(true)} />
            )}
        </div>
    );
};

export default App;