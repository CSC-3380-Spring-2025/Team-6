import React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework1 from "./quiz-framework2";

const CourseListing2: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <head>
            <title>HTML Elements Reference</title>
            </head>

            <h1>Phishing</h1>

            <button onClick={() => navigate("/video2")}>
            Video
            </button>

            <button onClick={() => navigate("/reading2")}>
            Reading
            </button>

            <button onClick={() => navigate("/matching2")}>
            Matching Terms/Games
            </button>

            <button onClick={() => navigate("/quiz2")}>
            Quiz
            </button>
        </div>
    );
};

export default CourseListing2;