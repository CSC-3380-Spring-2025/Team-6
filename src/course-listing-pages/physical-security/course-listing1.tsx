import React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework1 from "./quiz-framework1";

const CourseListing1: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <head>
            <title>HTML Elements Reference</title>
            </head>

            <h1>Physical Security Fundamentals</h1>

            <button onClick={() => navigate("/video1")}>
            Video
            </button>

            <button onClick={() => navigate("/reading1")}>
            Reading
            </button>

            <button onClick={() => navigate("/matching1")}>
            Matching Terms/Games
            </button>

            <button onClick={() => navigate("/quiz1")}>
            Quiz
            </button>
        </div>
    );
};

export default CourseListing1;