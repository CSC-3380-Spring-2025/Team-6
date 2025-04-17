import React, { useState, useEffect } from 'react';

interface IExample {
  id: number;
  type: 'email' | 'sms' | 'login_page';
  sender?: string;
  subject?: string;
  body: string;
  isPhishing: boolean;
  explanation: string;
  hints?: string[];
  imageUrl?: string;
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

interface ExampleDisplayProps {
  example: IExample;
}

const ExampleDisplay: React.FC<ExampleDisplayProps> = ({ example }) => {
  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg bg-white shadow">
      <h3 className="text-lg font-semibold mb-3 capitalize">{example.type.replace('_', ' ')} Example</h3>
      {example.type === 'email' && (
        <div className="mb-2 text-sm">
          <p><span className="font-medium">From:</span> {example.sender}</p>
          <p><span className="font-medium">Subject:</span> {example.subject}</p>
        </div>
      )}
      {example.type === 'sms' && (
         <div className="mb-2 text-sm">
          <p><span className="font-medium">From:</span> {example.sender}</p>
        </div>
      )}
      <div
        className="text-gray-700 prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: example.body }}
      />
    </div>
  );
};

const PhishingGame: React.FC = () => {
  const [examples, setExamples] = useState<IExample[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  const currentExample = examples[currentIndex];
  useEffect(() => {
    setTimeout(() => {
        setExamples([...examplesData].sort(() => Math.random() - 0.5));
        setIsLoading(false);
    }, 500); 
  }, []); 


  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-xl text-gray-600">Loading Game...</p>
        </div>
    );
}

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">Spot the Phish!</h1>
      {currentExample ? (
        <>
          <ExampleDisplay example={currentExample} />
        </>
       ) : (
         <p className="text-center text-red-500">Error: No examples found!</p>
      )}
    </div>
  );
};

export default PhishingGame;
