import React, { useState, useEffect } from 'react';

// Types
type ExampleType = 'email' | 'sms';

interface Example {
  id: number;
  type: ExampleType;
  sender: string;
  subject?: string;
  body: string;
  isPhishing: boolean;
  explanation: string;
  hints?: string[];
}

// Just made simple examples for now, an API could be used to fetch actual examples or include more variety
const EXAMPLES: Example[] = [
  {
    id: 1,
    type: 'email',
    sender: 'Your Bank <service@yourbannk.com>',
    subject: 'Urgent: Account Security Alert!',
    body: 'Dear Customer,<br/><br/>We detected suspicious activity on your account. Please verify your identity immediately by clicking here: <a href="#" class="text-blue-500 underline">http://yourbannk-security-update.com/login</a><br/><br/>Failure to do so may result in account suspension.',
    isPhishing: true,
    explanation: 'Phishing! Notice the typo in the sender address ("bannk" instead of "bank") and the suspicious URL. Legitimate banks usually ask you to log in directly through their official website or app, not via urgent email links.',
    hints: ['Sender typo', 'Suspicious link', 'Urgent tone'],
  },
  {
    id: 2,
    type: 'email',
    sender: 'notifications@official-socialsite.com',
    subject: 'You have a new friend request',
    body: 'Hi User,<br/><br/>Someone wants to connect with you on SocialSite. Click here to view the request: <a href="#" class="text-blue-500 underline">https://official-socialsite.com/requests</a>',
    isPhishing: false,
    explanation: 'Legitimate. The sender address and link point to a plausible official domain. The tone is informative, not demanding urgent action or sensitive information.',
  },
  {
    id: 3,
    type: 'sms',
    sender: '+1 (555) 123-4567',
    body: 'Your package #ABC123XYZ could not be delivered due to an incomplete address. Please update your details and pay a $1.99 redelivery fee here: <a href="#" class="text-blue-500 underline">bit.ly/updateAddr3ss</a>',
    isPhishing: true,
    explanation: 'Phishing! Unexpected requests for payment or personal info via SMS, especially using generic greetings, urgent language, and shortened/suspicious links, are common phishing tactics. Legitimate delivery services usually handle address issues differently.',
    hints: ['Unexpected fee', 'Suspicious link', 'Urgent request'],
  }
];

// Components

// Simple Scoreboard display
interface ScoreboardProps {
  score: number;
  total: number;
  current?: number; // Optional current question number
}

function Scoreboard({ score, total, current }: ScoreboardProps) {
  return (
    <div className="mb-4 p-3 bg-white rounded-lg text-center shadow-sm"> {/* Added shadow */}
      <p className="text-lg font-semibold text-gray-800"> {/* Darker text */}
        Score: {score} / {total}
        {current !== undefined && ( // Slightly more explicit check
          <span className="ml-4 text-sm text-gray-600">
            Question: {current} of {total}
          </span>
        )}
      </p>
    </div>
  );
}

// Card displays a single example
function ExampleCard({ data }: { data: Example }) {
  // Helper to render email/sms specific headers
  const renderHeader = () => {
    if (data.type === 'email') {
      return (
        <>
          <p><span className="font-bold">From:</span> {data.sender}</p>
          {/* Only show subject if it exists */}
          {data.subject && <p><span className="font-bold">Subject:</span> {data.subject}</p>}
        </>
      );
    }
    // SMS just gets sender
    return <p><span className="font-bold">From:</span> {data.sender}</p>;
  }

  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-white">
      <h3 className="text-lg font-bold mb-3 text-black uppercase">{data.type}</h3> {/* Uppercase type */}
      <div className="mb-2 text-sm text-black space-y-1"> {/* Added space-y */}
        {renderHeader()}
      </div>
      <hr className="my-2" /> {/* Adjusted margin */}
      <div
        className="text-gray-700 prose prose-sm max-w-none" // Added prose plugin classes
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </div>
  );
}

// Main game component
const PhishingGame = () => {
  // Explicitly type state for clarity, even if inferred
  const [examples, setExamples] = useState<Example[]>(EXAMPLES);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Derived state - get the current example based on index
  const currentExample = examples[currentIndex];

  // Event handlers

  const handleAnswer = (guessedPhishing: boolean) => {
    const correct = guessedPhishing === currentExample.isPhishing;
    setIsCorrect(correct);

    if (correct) {
      // Use functional update form 
      setScore(prevScore => prevScore + 1);
    }

    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false); // Hide feedback first
    setIsCorrect(null);    // Reset correctness indicator

    const nextIndex = currentIndex + 1;
    if (nextIndex >= examples.length) {
      // Last question answered, end the game
      setGameOver(true);
    } else {
      // Move to the next example
      setCurrentIndex(nextIndex);
    }
  };

  const restart = () => {
    console.log("Restarting game...");
    // Reset all game state variables
    setScore(0);
    setCurrentIndex(0);
    setShowFeedback(false);
    setIsCorrect(null);
    setGameOver(false);
  };

  // Rendering logic

  // Game Over screen
  if (gameOver) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center"> {/* Centering */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Game Over!</h1>

        {/* Pass score and total, but maybe not current question index */}
        <Scoreboard score={score} total={examples.length} />

        <p className="text-xl mb-8 text-gray-700 text-center"> {/* Bigger text */}
          You scored {score} out of {examples.length}!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={restart}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow"
          >
            Play Again
          </button>

          {/* Basic navigation */}
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-bold shadow"
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  // Defensive check in case examples array is empty or index is somehow wrong
  if (!currentExample) {
    console.error("Error: Could not get current example for index", currentIndex);
    return <p className="text-red-500 p-4">Something went wrong trying to load the example. Please refresh.</p>;
  }

  // Main game screen
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Spot the Phish!</h1>

      <Scoreboard
        score={score}
        total={examples.length}
        current={currentIndex + 1} // Show 1-based index
      />

      <ExampleCard data={currentExample} />

      {/* Made it so either the buttons or the feedback component are shown */}
      {!showFeedback ? (
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => handleAnswer(false)} // Legitimate guess
            className="px-6 py-2 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow"
          >
            Legitimate
          </button>
          <button
            onClick={() => handleAnswer(true)} // Phishing guess
            className="px-6 py-2 rounded-lg font-bold text-white bg-red-600 hover:bg-red-700 shadow"
          >
            Phishing
          </button>
        </div>
      ) : (
        // Feedback display area
        <div className={`mt-4 p-4 rounded-md border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'} shadow-sm`}>
          <h4 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? 'Right!' : 'Wrong!'}
          </h4>

          <p className="mb-3 text-gray-800">{currentExample.explanation}</p>

          {currentExample.hints && currentExample.hints.length > 0 && (
            <div className="mb-3">
              <p className="font-semibold text-sm text-gray-600">Red flags:</p>
              <ul className="list-disc list-inside pl-2 text-sm text-gray-600 space-y-0.5">
                {/* Using index as key is common for static lists */}
                {currentExample.hints.map((hint, index) => (
                  <li key={index}>{hint}</li> // Simplified key
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={nextQuestion}
            className="mt-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold shadow-sm"
          >
            {/* Ternary operator for button text */}
            {currentIndex >= examples.length - 1 ? 'Finish Game' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhishingGame;