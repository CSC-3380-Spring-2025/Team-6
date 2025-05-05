// Import React hooks and navigation hook
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// Import custom CSS for this specific matching game instance (Password Security)
import "./matching-game1.css";

// Define the structure for a card object used in the game
interface Card {
    id: number;         // Unique identifier for the card
    value: string;      // The text content (term, definition, or example) displayed on the card
    matched: boolean;   // Flag indicating if the card has been successfully matched
    incorrect: boolean; // Flag indicating if the card was part of a recent incorrect match attempt
}

// Define the initial pairs of terms/examples and definitions for the Password Security matching game
const initialPairs = [
    { term: "Strong Password", definition: "Hb5kG!v#@" }, // Example of a strong password
    { term: "Weak Password", definition: "1234" }, // Example of a weak password
    { term: "Password Manager", definition: "Password-storing tool" },
    { term: "Security Question", definition: "A question used to verify identity" },
    { term: "Brute Force Attack", definition: "Attack used for guessing passwords" },
    { term: "Password Reuse", definition: "Using the same password for multiple accounts" },
];

/**
 * Helper function to shuffle an array randomly and assign unique IDs.
 * @param {any[]} array - The array to shuffle.
 * @returns {any[]} - The shuffled array with added 'id' properties.
 */
const shuffleArray = (array: any[]) => {
    return array
        // Add a random sort key to each item
        .map((item) => ({ ...item, sort: Math.random() }))
        // Sort the array based on the random sort key
        .sort((a, b) => a.sort - b.sort)
        // Assign a unique random ID and remove the temporary sort key
        .map((item) => ({ id: Math.random(), ...item }));
};

// Define the MatchingGame functional component
const MatchingGame: React.FC = () => {
    // State hook for storing the array of card objects
    const [cards, setCards] = useState<Card[]>([]);
    // State hook for storing the IDs of the currently selected cards (max 2)
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    // State hook to track if the game has started (first card clicked)
    const [gameStarted, setGameStarted] = useState(false);
    // State hook to track if the game is over (all cards matched)
    const [gameOver, setGameOver] = useState(false);
    // State hook to store the timestamp when the game started
    const [startTime, setStartTime] = useState<number | null>(null);
    // State hook to store the elapsed time in seconds
    const [elapsedTime, setElapsedTime] = useState<number>(0);

    // Initialize useNavigate hook for navigation
    const navigate = useNavigate();

    // useEffect hook to initialize and shuffle cards on component mount
    useEffect(() => {
        // Create separate arrays for terms and definitions from the password security initialPairs
        const termCards = initialPairs.map((pair) => ({ value: pair.term, matched: false, incorrect: false }));
        const definitionCards = initialPairs.map((pair) => ({ value: pair.definition, matched: false, incorrect: false }));
        // Combine term and definition cards and shuffle them
        const shuffledCards = shuffleArray([...termCards, ...definitionCards]);
        // Set the shuffled cards into the component state
        setCards(shuffledCards);
    }, []); // Empty dependency array ensures this runs only once on mount

    // useEffect hook to manage the game timer
    useEffect(() => {
        let timer: NodeJS.Timeout;
        // Start the timer only if the game has started, a start time is set, and the game is not over
        if (gameStarted && startTime !== null && !gameOver) {
            // Set an interval to update the elapsed time every second
            timer = setInterval(() => {
                setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
            }, 1000);
        }
        // Cleanup function: Clear the interval when the component unmounts or dependencies change
        return () => clearInterval(timer);
    }, [gameStarted, startTime, gameOver]); // Dependencies for the timer effect

    // useEffect hook to check if the game is over
    useEffect(() => {
        // Check if there are cards loaded and if all cards have the 'matched' property set to true
        if (cards.length > 0 && cards.every((card) => card.matched)) {
            // If all cards are matched, set the gameOver state to true
            setGameOver(true);
        }
    }, [cards]); // Dependency: Run this check whenever the 'cards' state changes

    /**
     * Handles the logic when a card is clicked.
     * @param {number} id - The ID of the clicked card.
     */
    const handleCardClick = (id: number) => {
        // Prevent action if 2 cards are already selected, game is over, or the clicked card is already matched
        if (selectedCards.length === 2 || gameOver || cards.find((card) => card.id === id)?.matched) return;

        // Add the clicked card's ID to the selectedCards array
        const newSelected = [...selectedCards, id];
        setSelectedCards(newSelected);

        // If two cards are now selected, check if they form a match
        if (newSelected.length === 2) {
            const [firstId, secondId] = newSelected;
            const firstCard = cards.find((card) => card.id === firstId);
            const secondCard = cards.find((card) => card.id === secondId);

            // Ensure both card objects were found
            if (firstCard && secondCard) {
                // Check if the values of the two cards form a valid pair based on the password security initialPairs
                const isMatch = initialPairs.some(
                    (pair) =>
                        (pair.term === firstCard.value && pair.definition === secondCard.value) ||
                        (pair.definition === firstCard.value && pair.term === secondCard.value)
                );

                if (isMatch) {
                    // If it's a match, update the state to mark both cards as 'matched'
                    setCards((prevCards) =>
                        prevCards.map((card) =>
                            card.id === firstId || card.id === secondId ? { ...card, matched: true } : card
                        )
                    );
                } else {
                    // If it's not a match, mark both cards as 'incorrect' temporarily for visual feedback
                    setCards((prevCards) =>
                        prevCards.map((card) =>
                            card.id === firstId || card.id === secondId ? { ...card, incorrect: true } : card
                        )
                    );
                    // After a short delay (500ms), remove the 'incorrect' status
                    setTimeout(() => {
                        setCards((prevCards) =>
                            prevCards.map((card) =>
                                card.id === firstId || card.id === secondId ? { ...card, incorrect: false } : card
                            )
                        );
                    }, 500);
                }

                // After a short delay, clear the selected cards array to allow the next selection
                setTimeout(() => setSelectedCards([]), 500);
            }
        }

        // If this is the first card clicked in the game, start the game timer
        if (!gameStarted) {
            setGameStarted(true);
            setStartTime(Date.now());
        }
    };

    // Render the game component
    return (
        // Main container for the game (uses specific classes 'matching1-game body1')
        <div className="matching1-game body1">
            {/* Top section for displaying timer or results */}
            <div className="top-section">
                {/* Display elapsed time if the game is running */}
                {gameStarted && !gameOver && <h3>Time: {elapsedTime} seconds</h3>}
                {/* Display results and finish button if the game is over */}
                {gameOver && (
                    <>
                        <h3>You finished the quiz in {elapsedTime} seconds!</h3>
                        <button
                            className="btn btn-error p-3 pointer-events-auto"
                            onClick={() => navigate(-1)} // Navigate back on button click
                        >
                            Finish
                        </button>
                    </>
                )}
            </div>
            {/* Container for the grid of cards (uses specific class 'grid1-container') */}
            <div className="grid1-container">
                {/* Map over the cards state and render each card */}
                {cards.map((card) => (
                    <div
                        key={card.id} // Unique key for each card element
                        // Apply CSS classes conditionally: base class ('matching1-game-card'), 'matched', 'incorrect'
                        className={`matching1-game-card ${card.matched ? "matched" : ""} ${card.incorrect ? "incorrect" : ""}`}
                        // Attach the click handler to each card
                        onClick={() => handleCardClick(card.id)}
                    >
                        {/* Display the card's value (term, definition, or example) */}
                        {card.value}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export the MatchingGame component for use in other parts of the application
export default MatchingGame;