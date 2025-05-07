// Import necessary React hooks (useState) and routing hooks (useNavigate)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import custom CSS styles for this specific quiz component
import "./quiz-framework3.css";

// Define the QuizFramework3 functional component using React.FC type
const QuizFramework3: React.FC = () => {
    // State hook to keep track of the index of the current question being displayed
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // State hook to store the user's score
    const [score, setScore] = useState(0);
    // State hook to control whether to show the quiz questions or the final result
    const [showResult, setShowResult] = useState(false);

    // Initialize the navigate function for programmatic navigation
    const navigate = useNavigate();

    // Array of quiz questions related to Social Engineering
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

    /**
     * Handles the user selecting an answer option.
     * Checks if the selected option is correct and updates the score.
     * Proceeds to the next question or shows the result.
     * @param {string} option - The answer option selected by the user.
     */
    const handleAnswer = (option: string) => {
        // Check if the selected option matches the correct answer for the current question
        if (option === questions[currentQuestion].answer) {
            // If correct, increment the score
            setScore(score + 1);
        }
        // Move to the next question or show the results
        handleNextQuestion();
    };

    /**
     * Moves to the next question in the quiz or sets the state to show results
     * if the current question was the last one.
     */
    const handleNextQuestion = () => {
        // Check if there is a next question available
        if (currentQuestion + 1 < questions.length) {
            // If yes, update the currentQuestion state to the next index
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // If no more questions, set showResult state to true to display the final score
            setShowResult(true);
        }
    };

    /**
     * Resets the quiz state to allow the user to retry.
     * Resets score, current question index, and hides the result view.
     */
    const handleRetry = () => {
        setScore(0); // Reset score to 0
        setCurrentQuestion(0); // Reset to the first question
        setShowResult(false); // Hide the result screen and show the quiz questions again
    };

    // Return the JSX for rendering the quiz component
    return (
        // Main container for the quiz layout (uses specific class 'quiz3-container')
        <div className="quiz3-container">
            {/* Conditional rendering: Show results if showResult is true, otherwise show the current question */}
            {showResult ? (
                // Container for displaying the quiz results
                <div className="quiz-box result-container">
                    {/* Title indicating quiz completion */}
                    <h2 className="question-title">Quiz Completed!</h2>
                    {/* Display the final score */}
                    <p>Your Score: {score} / {questions.length}</p>
                    {/* Conditional button: Show "Finish" if score is perfect, otherwise show "Retry" */}
                    {score === questions.length ? (
                        // Finish button: Navigates back to the previous page on click
                        <button className="btn btn-error p-3 pointer-events-auto" onClick={() => navigate(-1)}>
                            Finish
                        </button>
                    ) : (
                        // Retry button: Calls handleRetry function on click to restart the quiz
                        <button className="btn btn-error p-3 pointer-events-auto" onClick={handleRetry}>
                            Retry
                        </button>
                    )}
                </div>
            ) : (
                // Container for displaying the current question and options
                <div className="quiz-box">
                    {/* Display the text of the current question */}
                    <h2 className="question-title">{questions[currentQuestion].question}</h2>
                    {/* Map through the options for the current question and render a button for each */}
                    {questions[currentQuestion].options.map((option) => (
                        <button
                            // Unique key for each option button (important for React lists)
                            key={option}
                            // CSS class for styling the option buttons (uses specific class 'option3-button')
                            className="option3-button"
                            // onClick handler: Calls handleAnswer with the selected option when clicked
                            onClick={() => handleAnswer(option)}
                        >
                            {/* Display the option text on the button */}
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// Export the QuizFramework3 component for use in other parts of the application
export default QuizFramework3;