
import React, { useState, useEffect } from 'react';

interface IExample {
  id: number;
  type: 'email' | 'sms';
  sender: string;
  subject?: string; // Email only
  body: string;
  isPhishing: boolean;
  explanation: string;
  hints?: string[];
}

const examplesData: IExample[] = [
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

interface ScoreboardProps {
  currentScore: number;
  totalQuestions: number;
  questionNumber?: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ currentScore, totalQuestions, questionNumber }) => {
  return (
    <div className="mb-4 p-3 bg-white rounded-lg text-center ">
      <p className="text-lg font-semibold text-black">
        Score: {currentScore} / {totalQuestions}
        {questionNumber && <span className="ml-4 text-sm">Question: {questionNumber} of {totalQuestions}</span>}
      </p>
    </div>
  );
};

interface ExampleDisplayProps {
  example: IExample;
}

const ExampleDisplay: React.FC<ExampleDisplayProps> = ({ example }) => {
  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-white ">
      <h3 className="text-lg font-semibold mb-3 capitalize text-black">{example.type.replace('_', ' ')} Example</h3>
      {example.type === 'email' && (
        <div className="mb-2 text-sm text-black">
          <p><span className="font-medium text-black">From:</span> {example.sender}</p>
          <p><span className="font-medium text-black">Subject:</span> {example.subject}</p>
        </div>
      )}
      {example.type === 'sms' && (
        <div className="mb-2 text-sm text-black">
          <p><span className="font-medium text-black">From:</span> {example.sender}</p>
        </div>
      )}
      <div
        className="text-gray-700 prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: example.body }}
      />
    </div>
  );
};

interface ChoiceButtonsProps {
  onChoice: (userChoiceIsPhishing: boolean) => void;
  disabled: boolean;
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ onChoice, disabled }) => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button
        onClick={() => onChoice(false)}
        disabled={disabled}
        className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors duration-200
          bg-green-500`}
        aria-label="Mark as Legitimate"
      >
        Legitimate
      </button>
      <button
        onClick={() => onChoice(true)}
        disabled={disabled}
        className={`px-6 py-2 rounded-lg font-semibold text-white  transition-colors duration-200 bg-red-500`}
        aria-label="Mark as Phishing"
      >
        Phishing
      </button>
    </div>
  );
};

interface FeedbackModalProps {
  isCorrect: boolean;
  explanation: string;
  hints?: string[];
  onNext: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isCorrect, explanation, hints, onNext }) => {
  const bgColor = isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500';
  const textColor = isCorrect ? 'text-green-800' : 'text-red-800';
  const title = isCorrect ? 'Correct!' : 'Incorrect!';

  return (
    <div className={`mt-4 p-4 ${bgColor} ${textColor} rounded-md`}>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="mb-3">{explanation}</p>
      {/* Display hints if available */}
      {hints && hints.length > 0 && (
        <div className="mb-3">
          <p className="font-semibold text-sm">Key Indicators:</p>
          <ul className="list-disc list-inside text-sm">
            {hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={onNext}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md font-semibold transition-colors duration-200"
        aria-label="Go to next example"
      >
        Next
      </button>
    </div>
  );
};


const PhishingGame: React.FC = () => {
  const [examples, setExamples] = useState<IExample[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setExamples([...examplesData].sort(() => Math.random() - 0.5));
      setIsLoading(false);
    });
  }, []);

  // Get the current example based on the index
  const currentExample = examples[currentIndex];

  const handleChoice = (userChoiceIsPhishing: boolean) => {
    if (showFeedback || !currentExample) return;
    const correctAnswer = currentExample.isPhishing;
    const isCorrect = userChoiceIsPhishing === correctAnswer;

    setLastAnswerCorrect(isCorrect);
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setShowFeedback(true);
  };

  // Handler for the "Next" button in the feedback modal
  const handleNext = () => {
    setShowFeedback(false);
    setLastAnswerCorrect(null);

    if (currentIndex < examples.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setIsLoading(true);
    setScore(0);
    setCurrentIndex(0);
    setShowFeedback(false);
    setLastAnswerCorrect(null);
    setGameOver(false);
    setTimeout(() => {
      setExamples([...examplesData].sort(() => Math.random() - 0.5));
      setIsLoading(false);
    }, 500);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading Game...</p>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="max-w-2xl mx-auto p-6 font-sans bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Game Over!</h1>
        <div className="mb-6 w-full">
          <Scoreboard currentScore={score} totalQuestions={examples.length} />
        </div>
        <p className="text-lg mb-6 text-gray-700">
          You got {score} out of {examples.length} examples correct!
        </p>
        <button
          onClick={handleRestart}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          aria-label="Play Again"
        >
          Play Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-4 px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          aria-label="Go to Home"
        >
          Go to Home
        </button>
      </div>
    );
  }

  // Main game screen
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 font-sans bg-grbay-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">Spot the Phish!</h1>

      {/* Shows the current example if there's one to pull from */}
      {currentExample ? (
        <>
          <Scoreboard
            currentScore={score}
            totalQuestions={examples.length}
            questionNumber={currentIndex + 1}
          />
          <ExampleDisplay example={currentExample} />

          {!showFeedback && (
            <ChoiceButtons onChoice={handleChoice} disabled={showFeedback} />
          )}

          {showFeedback && (
            <FeedbackModal
              isCorrect={lastAnswerCorrect ?? false}
              explanation={currentExample.explanation}
              hints={currentExample.hints}
              onNext={handleNext}
            />
          )}
        </>
      ) : (
        // The "just in case" fallback if no examples are available
        <p className="text-center text-red-500">Error: No examples found!</p>
      )}
    </div>
  );
};

export default PhishingGame;
