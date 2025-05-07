import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const PhishingGame = () => {
  const navigate = useNavigate();
  type Email = {
    id: number;
    sender: string;
    subject: string;
    greeting: string;
    body: string;
    safe: boolean;
    userDetSafe: boolean | null;
    phishingExplanation?: string;
  };
  type EmailList = Email[];

  const emails: EmailList = [
    {
      id: 0,
      sender: "security-alert@mybank-online.co",
      subject: "Unusual Login Attempt Detected on Your Account",
      greeting: "Dear Customer,",
      body: 'We detected a login to your account from an unrecognized device. If this was not you, please secure your account immediately by verifying your details here: <a href="#" style="color:blue; text-decoration:underline;">http://mybank-online.co/verify-identity</a><br/><br/>Ignoring this message may lead to account restrictions.',
      safe: false,
      userDetSafe: null,
      phishingExplanation:
        'This is likely phishing. The domain "mybank-online.co" is suspicious (often legitimate banks use .com or country-specific TLDs, and avoid unusual extensions like .co for primary login portals). The urgent call to action through a direct link is also a common tactic.',
    },
    {
      id: 1,
      sender: "notifications@realsocialnetwork.com",
      subject: "You have a new message",
      greeting: "Hi User,",
      body: 'You have received a new message from Alex. Click here to view and reply: <a href="#" style="color:blue; text-decoration:underline;">https://realsocialnetwork.com/messages/12345</a><br/><br/>Regards,<br/>The RealSocialNetwork Team',
      safe: true,
      userDetSafe: null,
    },
    {
      id: 2,
      sender: "admin@company-internal-portal.com",
      subject: "Action Required: Mandatory Password Reset",
      greeting: "All Employees,",
      body: 'Due to a recent security update, all employees are required to reset their passwords. Please use the following link to update your credentials immediately: <a href="#" style="color:blue; text-decoration:underline;">http://company-internal-portal.com/password-reset-employee</a><br/><br/>This must be completed by EOD to maintain network access.<br/>Thanks,<br/>IT Support',
      safe: false,
      userDetSafe: null,
      phishingExplanation:
        'This is a phishing email. While it might look like an internal corporate email, the URL "company-internal-portal.com" could be a spoofed domain. Always be cautious with unexpected mandatory password resets, especially if the URL isn\'t one you recognize or typically use. Verify with IT through a separate, known channel.',
    },
    {
      id: 3,
      sender: "orders@shopmajorretailer.com",
      subject: "Your Order #SHP98765 has been shipped!",
      greeting: "Dear Customer,",
      body: 'Great news! Your recent order #SHP98765 from ShopMajorRetailer has been shipped. You can track your package here: <a href="#" style="color:blue; text-decoration:underline;">https://shopmajorretailer.com/tracking/SHP98765</a><br/><br/>Estimated delivery: May 10, 2025.<br/><br/>Thank you for your purchase!',
      safe: true,
      userDetSafe: null,
    },
    {
      id: 4,
      sender: "benefits@yourcompanycorp.com",
      subject: "Important: Update Your Beneficiary Information",
      greeting: "Dear Employee,",
      body: 'This is a reminder to review and update your beneficiary information for your company benefits plan. Please log in to the employee portal to make any necessary changes: <a href="#" style="color:blue; text-decoration:underline;">https://hr.yourcompanycorp.com/benefits</a><br/><br/>Regards,<br/>Human Resources',
      safe: true,
      userDetSafe: null,
    },
    {
      id: 5,
      sender: "winner@luckydrawinternational.net",
      subject: "CONGRATULATIONS! You Have Won $1,000,000!",
      greeting: "Dear Lucky Winner,",
      body: "We are pleased to inform you that your email address has been selected as a winner in the annual Lucky Draw International lottery! You have won $1,000,000. To claim your prize, please provide your full name, address, phone number, and a copy of your ID by replying to this email. You must also pay a processing fee of $199 via wire transfer to the details provided upon your reply.<br/><br/>Congratulations once again!<br/>Mr. John Smith, Claims Agent",
      safe: false,
      userDetSafe: null,
      phishingExplanation:
        "This is a classic phishing scam. Unsolicited emails claiming you've won a lottery, especially one you didn't enter, are always suspicious. Requests for personal information and upfront fees to claim a prize are major red flags.",
    },
    {
      id: 6,
      sender: "updates@streamflix.com",
      subject: "New Shows Added This Week!",
      greeting: "Hi Streamer,",
      body: 'Discover new movies and series added just for you on Streamflix! From gripping dramas to hilarious comedies, there’s something for everyone.<br/><br/>Start watching now: <a href="#" style="color:blue; text-decoration:underline;">https://streamflix.com/new-releases</a><br/><br/>Happy Streaming,<br/>The Streamflix Team',
      safe: true,
      userDetSafe: null,
    },
    {
      id: 7,
      sender: "alerts@mycloudphotoservice.com",
      subject: "Your Photo Memories from This Day Last Year",
      greeting: "Hello,",
      body: 'We found some photos from this day in your archive! Take a trip down memory lane and rediscover your special moments.<br/><br/>View your memories: <a href="#" style="color:blue; text-decoration:underline;">https://mycloudphotoservice.com/memories/2025-05-07</a><br/><br/>Enjoy,<br/>My Cloud Photo Service',
      safe: true,
      userDetSafe: null,
    },
    {
      id: 8,
      sender: "info@techsummit2025.org",
      subject: "Reminder: TechSummit 2025 Early Bird Discount Ends Soon",
      greeting: "Dear Colleague,",
      body: 'Just a friendly reminder that the early bird discount for TechSummit 2025 registrations ends in one week! Don\'t miss out on the opportunity to save on your ticket for the premier technology conference of the year.<br/><br/>Register here: <a href="#" style="color:blue; text-decoration:underline;">https://techsummit2025.org/register</a><br/><br/>We look forward to seeing you there!',
      safe: true,
      userDetSafe: null,
    },
  ];
  const [selectedEmail, setSelectedEmail] = useState<number>(0);
  const [emailList, setEmailList] = useState(emails);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phishingScore, setPhishingScore] = useState(0);
  const [scoreCard, setScoreCard] = useState({
    safeWrong: 0,
    phishingCaught: 0,
  });
  const [isExplanationVisible, setIsExplanationVisible] = useState(true);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const calculateMarkedPhishing = (updatedEmails: EmailList) => {
    let score = 0;
    updatedEmails.forEach((email) => {
      if (email.userDetSafe === null) {
        return;
      }
      if (!email.userDetSafe) {
        score += 1;
      }
    });
    setPhishingScore(score);
  };
  const calculateScore = (emails: EmailList) => {
    let safeWrong = 0;
    let phishingCaught = 0;
    emails.forEach((email) => {
      if (!email.userDetSafe && !email.safe) {
        phishingCaught += 1;
      } else if (email.safe && !email.userDetSafe) {
        safeWrong += 1;
      }
    });
    setScoreCard({
      safeWrong: safeWrong,
      phishingCaught: phishingCaught,
    });
  };
  const handleNext = () => {
    if (selectedEmail < emailList.length - 1) {
      setSelectedEmail(selectedEmail + 1);
    }
  };

  const emailSafeClass = clsx(
    "h-9 bg-blue-100 border border-blue-300 rounded-md justify-center items-center flex"
  );
  const emailPhishingClass = clsx(
    "h-9 bg-orange-100 border border-orange-300 rounded-md justify-center items-center flex"
  );
  const emailNeutralClass = clsx(
    "h-9 bg-gray-100 border border-gray-300 rounded-md justify-center items-center flex"
  );
  if (isExplanationVisible) {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-5xl h-[750px] max-h-[90vh] bg-white rounded-xl shadow-2xl flex overflow-hidden border border-gray-300">
          <aside className="w-[180px] bg-gray-50 p-4 border-r border-gray-300 flex flex-col space-y-4">
            <div className="h-12 bg-gray-200 rounded-md border border-gray flex text-sm items-center justify-center">
              <img src="/dabird.png" alt="Cyberdojo Bird" />
            </div>
            <div className={clsx(emailNeutralClass)}>
              <p className="text-xs text-gray-500 truncate">
                dabird@cyberdojo.com
              </p>
            </div>
          </aside>
          <main className="flex flex-1 flex-col p-8 overflow-y-auto">
            <div className="flex justify-end items-center mb-4">
              <span className="text-gray-800 font-semibold text-base bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                {phishingScore}/3
              </span>
            </div>

            <div className="mb-4">
              <p className="w-full p-3 border border-gray-400 rounded-lg text-gray-800 text-base bg-white leading-relaxed shadow-sm">
                dabird@cyberdojo.com
              </p>
            </div>
            <div className="flex-grow bg-white p-5 border border-gray-400 rounded-lg shadow-sm text-gray-800 text-base leading-relaxed">
              <p className="font-medium text-gray-900 mb-2 border-b border-gray-200">
                Email Phishing Training
              </p>
              <p>Welcome User,</p>
              <p>
                In this training, you will learn how to identify phishing emails
                and protect yourself from online scams. After hitting "Start",
                you will be presented with a series of emails. Your task is to
                identify which emails are phishing attempts and which are safe.
                You will have to mark three phishing emails before you can
                submit your answers. Goodluck!
              </p>
            </div>
            <div className="flex flex-row justify-end items-center mt-6 pt-4 border-t border-gray-200 space-x-3">
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-blue-50 text-blue-700 border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {}}
              >
                Safe
              </button>
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-orange-50 text-orange-700 border-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {}}
              >
                Phishing
              </button>
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-gray-50 text-gray-700 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  setIsExplanationVisible(false);
                  setSelectedEmail(0);
                }}
              >
                Start
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  } else if (!isSubmitted) {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-5xl h-[750px] max-h-[90vh] bg-white rounded-xl shadow-2xl flex overflow-hidden border border-gray-300">
          <aside className="w-[180px] bg-gray-50 p-4 border-r border-gray-300 flex flex-col space-y-4">
            <div className="h-12 bg-gray-200 rounded-md border border-gray flex text-sm items-center justify-center">
              <img src="/dabird.png" alt="Cyberdojo Bird" />
            </div>
            {emailList.map((email) => (
              <div
                key={email.id}
                className={clsx(
                  email.userDetSafe === null
                    ? emailNeutralClass
                    : !email.userDetSafe
                    ? emailPhishingClass
                    : emailSafeClass,
                  email.id === selectedEmail && "border-2 border-blue-400"
                )}
                onClick={() => setSelectedEmail(email.id)}
              >
                <p className="text-xs text-gray-500 truncate">{email.sender}</p>
              </div>
            ))}
          </aside>
          <main className="flex flex-1 flex-col p-8 overflow-y-auto">
            <div className="flex justify-end items-center mb-4">
              <span className="text-gray-800 font-semibold text-base bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                {phishingScore}/3
              </span>
            </div>

            <div className="mb-4">
              <p className="w-full p-3 border border-gray-400 rounded-lg text-gray-800 text-base bg-white leading-relaxed shadow-sm">
                {emailList[selectedEmail].sender}
              </p>
            </div>
            <div className="flex-grow bg-white p-5 border border-gray-400 rounded-lg shadow-sm text-gray-800 text-base leading-relaxed">
              <p className="font-medium text-gray-900 mb-2 border-b border-gray-200">
                {emailList[selectedEmail].subject}
              </p>
              <p>{emailList[selectedEmail].greeting}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: emailList[selectedEmail].body,
                }}
              ></p>
            </div>
            <div className="flex flex-row justify-end items-center mt-6 pt-4 border-t border-gray-200 space-x-3">
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-blue-50 text-blue-700 border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  const updatedEmails = emailList.map((email) => {
                    if (email.id === selectedEmail) {
                      return { ...email, userDetSafe: true };
                    }
                    return email;
                  });
                  setEmailList(updatedEmails);
                  calculateMarkedPhishing(updatedEmails);
                  handleNext();
                }}
              >
                Safe
              </button>
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-orange-50 text-orange-700 border-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  const updatedEmails = emailList.map((email) => {
                    if (email.id === selectedEmail) {
                      return { ...email, userDetSafe: false };
                    }
                    return email;
                  });
                  setEmailList(updatedEmails);
                  calculateMarkedPhishing(updatedEmails);
                  handleNext();
                }}
              >
                Phishing
              </button>
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-gray-50 text-gray-700 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  if (phishingScore === 3) {
                    calculateScore(emailList);
                    setSelectedEmail(0);
                    setIsSubmitted(true);
                  } else {
                    alert(
                      "Please ensure you have marked three phishing emails before submitting."
                    );
                  }
                }}
              >
                Finish
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  } else if (isSubmitted && !isReviewMode) {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8">
        <div className="w-1/2 max-w-5xl h-[500px] max-h-[90vh] bg-white rounded-xl shadow-2xl flex overflow-hidden border border-gray-300">
          <div className="justify-start items-center flex flex-col w-full p-8 ">
            <h1 className="text-4xl text-black">Results</h1>
            <p className="text-gray-600 text-lg mt-8">
              You have successfully completed the phishing game. You caught{" "}
              {scoreCard.phishingCaught} phishing{" "}
              {scoreCard.phishingCaught === 1 ? "email" : "emails"} and marked{" "}
              {scoreCard.safeWrong} safe{" "}
              {scoreCard.safeWrong === 1 ? "email" : "emails"} as phishing.
            </p>
            <div className="flex justify-center items-center mt-4">
              <span className="text-gray-800 font-semibold text-2xl bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                {scoreCard.phishingCaught}/3
              </span>
            </div>
            <div className="flex flex-row justify-end items-center mt-6 pt-4 border-t border-gray-200 space-x-3">
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                    bg-gray-50 text-gray-700 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  navigate("/courselisting3");
                }}
              >
                Home
              </button>
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                    bg-gray-50 text-gray-700 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  setIsReviewMode(true);
                }}
              >
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isSubmitted && isReviewMode) {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-5xl h-[750px] max-h-[90vh] bg-white rounded-xl shadow-2xl flex overflow-hidden border border-gray-300">
          <aside className="w-[180px] bg-gray-50 p-4 border-r border-gray-300 flex flex-col space-y-4">
            <div className="h-12 bg-gray-200 rounded-md border border-gray flex text-sm items-center justify-center">
              <img src="/dabird.png" alt="Cyberdojo Bird" />
            </div>
            {emailList.map((email) => (
              <div
                key={email.id}
                className={clsx(
                  email.safe === email.userDetSafe
                    ? "h-9 bg-green-100 border border-green-300 rounded-md justify-center items-center flex"
                    : "h-9 bg-red-100 border border-red-300 rounded-md justify-center items-center flex",
                  email.id === selectedEmail && "border-2 border-blue-400"
                )}
                onClick={() => setSelectedEmail(email.id)}
              >
                <p className="text-xs text-gray-500 truncate">{email.sender}</p>
              </div>
            ))}
          </aside>
          <main className="flex flex-1 flex-col p-8 overflow-y-auto">
            <div className="flex justify-end items-center mb-4">
              <span className="text-gray-800 font-semibold text-base bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                {emailList[selectedEmail].safe
                  ? "Safe Email: "
                  : "Phishing Email: "}
                {emailList[selectedEmail].userDetSafe ===
                emailList[selectedEmail].safe
                  ? "Correct"
                  : "Incorrect"}
              </span>
            </div>

            <div className="mb-4">
              <p className="w-full p-3 border border-gray-400 rounded-lg text-gray-800 text-base bg-white leading-relaxed shadow-sm">
                {emailList[selectedEmail].sender}
              </p>
            </div>
            <div className="flex-grow bg-white p-5 border border-gray-400 rounded-lg shadow-sm text-gray-800 text-base leading-relaxed">
              <p className="font-medium text-gray-900 mb-2">
                {emailList[selectedEmail].greeting}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: emailList[selectedEmail].body,
                }}
              ></p>
              {emailList[selectedEmail].phishingExplanation && (
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                  <p className="font-bold">Phishing Explanation:</p>
                  <p>{emailList[selectedEmail].phishingExplanation}</p>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-end items-center mt-6 pt-4 border-t border-gray-200 space-x-3">
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-gray-50 text-gray-700 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  setIsReviewMode(false);
                  setSelectedEmail(0);
                  setEmailList(emails);
                  setIsSubmitted(false);
                  setPhishingScore(0);
                  setScoreCard({
                    safeWrong: 0,
                    phishingCaught: 0,
                  });
                }}
              >
                Restart
              </button>
              <button
                className="w-auto px-6 py-2.5 rounded-lg font-semibold text-base border-2 transition-all duration-150 ease-in-out
                               bg-gray-50 text-gray-700 border-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-sm hover:shadow-md"
                onClick={() => {
                  navigate("/courselisting3");
                }}
              >
                Finish
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>this shouldnt happen</h1>
      </div>
    );
  }
};

export default PhishingGame;
