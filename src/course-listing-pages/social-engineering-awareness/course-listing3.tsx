import React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework1 from "./quiz-framework3";

const CourseListing3: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <head>
            <title>HTML Elements Reference</title>
            </head>

            <h1>Social Engineering Awareness</h1>

            <button onClick={() => navigate("/video3")}>
            Video
            </button>

            <button onClick={() => navigate("/reading3")}>
            Reading
            </button>

            <button onClick={() => navigate("/matching3")}>
            Matching Terms/Games
            </button>

            <button onClick={() => navigate("/quiz3")}>
            Quiz
            </button>
        </div>
    );
};

export default CourseListing3;