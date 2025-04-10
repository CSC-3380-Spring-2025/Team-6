import React, { useState, useEffect } from "react";
import "./matching-game.css";

interface Card {
  id: number;
  value: string;
  matched: boolean;
  incorrect: boolean;
}

const initialPairs = [
  { term: "1", definition: "1 ans" },
  { term: "2", definition: "2 ans" },
  { term: "3", definition: "3 ans" },
  { term: "4", definition: "4 ans" },
  { term: "5", definition: "5 ans" },
];

const shuffleArray = (array: any[]) => {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => ({ id: Math.random(), ...item }));
};

const MatchingGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const shuffledCards = shuffleArray([
      ...initialPairs.map((pair) => ({ value: pair.term, matched: false, incorrect: false })),
      ...initialPairs.map((pair) => ({ value: pair.definition, matched: false, incorrect: false })),
    ]);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && startTime !== null && !gameOver) {
      timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, startTime, gameOver]);

  useEffect(() => {
    // Check if all cards are matched
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameOver(true);
    }
  }, [cards]);

  const handleCardClick = (id: number) => {
    if (selectedCards.length === 2 || gameOver || cards.find((card) => card.id === id)?.matched) return;

    const newSelected = [...selectedCards, id];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      const firstCard = cards.find((card) => card.id === first);
      const secondCard = cards.find((card) => card.id === second);

      if (firstCard && secondCard) {
        const isMatch = initialPairs.some(
          (pair) =>
            (pair.term === firstCard.value && pair.definition === secondCard.value) ||
            (pair.definition === firstCard.value && pair.term === secondCard.value)
        );

        if (isMatch) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first || card.id === second ? { ...card, matched: true } : card
            )
          );
        } else {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first || card.id === second ? { ...card, incorrect: true } : card
            )
          );
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === first || card.id === second ? { ...card, incorrect: false } : card
              )
            );
          }, 500);
        }

        setTimeout(() => setSelectedCards([]), 500);
      }
    }

    if (!gameStarted) {
      setGameStarted(true);
      setStartTime(Date.now());
    }
  };

  return (
    <div className="matching-game">
      <h2>Matching Game</h2>
      {gameStarted && !gameOver && <h3>Time: {elapsedTime} seconds</h3>}
      {gameOver && <h3>🎉 You finished in {elapsedTime} seconds! 🎉</h3>}
      <div className="grid-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.matched ? "matched" : ""} ${card.incorrect ? "incorrect" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingGame;
