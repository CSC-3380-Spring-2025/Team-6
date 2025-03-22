import React, { useState, useEffect } from "react";

/*
/ Stuff I have to do for this (notes for later)
/ implement the same points system as quiz
/ fix the matching feature so that double clicking does not let you win
/ fix the matcher so it turns red and goes back to normal when you answer incorrectly
/ fix the format of the matching game to make it look better
/ DaBird needs to be on this page with a little speech bubble
*/




const pairs = [
  { id: 1, term: "1", definition: "1 ans" },
  { id: 2, term: "2", definition: "2 ans" },
  { id: 3, term: "3", definition: "3 ans" },
  { id: 4, term: "4", definition: "4 ans" },
  { id: 5, term: "5", definition: "5 ans" },
];

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MatchingGame: React.FC = () => {
  const [shuffledTerms, setShuffledTerms] = useState(() => shuffleArray(pairs));
  const [shuffledDefinitions, setShuffledDefinitions] = useState(() => shuffleArray(pairs));
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (matchedPairs.length === pairs.length) {
      setIsRunning(false);
    }
  }, [matchedPairs]);

  const handleMatch = (id: number, isTerm: boolean) => {
    if (selectedTerm === null) {
      setSelectedTerm(id);
    } else {
      if (pairs.find((pair) => pair.id === selectedTerm)?.id === id) {
        setMatchedPairs([...matchedPairs, id]);
      }
      setSelectedTerm(null);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Matching Game</h2>
      <h3>Time: {timer} seconds</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <div>
          <h3>Terms</h3>
          {shuffledTerms.map((pair) => (
            <div
              key={pair.id}
              onClick={() => handleMatch(pair.id, true)}
              style={{
                padding: "10px",
                margin: "5px",
                cursor: "pointer",
                background: matchedPairs.includes(pair.id) ? "lightgreen" : "lightgray",
              }}
            >
              {pair.term}
            </div>
          ))}
        </div>
        <div>
          <h3>Definitions</h3>
          {shuffledDefinitions.map((pair) => (
            <div
              key={pair.id}
              onClick={() => handleMatch(pair.id, false)}
              style={{
                padding: "10px",
                margin: "5px",
                cursor: "pointer",
                background: matchedPairs.includes(pair.id) ? "lightgreen" : "lightgray",
              }}
            >
              {pair.definition}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchingGame;

