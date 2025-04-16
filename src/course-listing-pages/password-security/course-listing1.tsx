"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework1 from "./quiz-framework1";

const CourseListing1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <head>
        <title>HTML Elements Reference</title>
      </head>

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Password
        </span>{" "}
        Security
      </h1>

      <div>
        <p>
          <p>
            Create and Use Strong Passwords Passwords are the keys to
            safeguarding your digital and online life. They are your first line
            of defense. And knowing how to create and store strong passwords is
            one of the most critical aspects of everyday cybersecurity.
          </p>
          <br />
          <p>
            Protect your passwords like you'd protect your house keys. Of
            course, maintaining your password collection is frustrating for many
            of us (until you start using a password manager). But we’re here to
            help! While creating, storing, and remembering passwords can feel
            overwhelming, they remain your first line of defense against
            cybercriminals and data breaches. Fortunately, free, secure, and
            user-friendly password managers have made it easier than ever to
            maintain strong passwords. You can work to secure your online
            presence with just a few simple steps today.
          </p>
          <br />
          <p>
            The power of long, unique, and complex passwords For maximum
            security, remember three principles:
          </p>
          <br />
          <p>
            1. Long Passwords should be at least 16 characters long. The longer
            your password, the longer it takes for hackers to crack it using
            brute force techniques. Right now, an eight-character password takes
            a few minutes for hacker software to guess by trying every
            combination of letters, numbers, and symbols. A 16-character
            password takes a billion years to guess!
          </p>
          <br />
          <p>
            2. Unique Each account should have a unique password. If you reuse
            passwords, don’t feel ashamed! Reusing passwords is a bad habit many
            of us are guilty of, but you can start changing your habits today!
            Reusing passwords across multiple accounts can cause huge headaches.
            If one account is compromised, unique passwords ensure your other
            accounts remain secure. Small tweaks like adding a number or a
            special character aren’t enough; each password should be entirely
            distinct. You can use a password manager to create and store unique
            passwords for all your accounts!
          </p>
          <p>
            3. Complex Passwords should include a mix of uppercase and lowercase
            letters, numbers, and special characters (like @, !, or $). Some
            platforms even allow spaces. The strongest passwords are a long
            string of random characters, not identifiable words, names, or
            dates. However, even if your passwords are random, you must ensure
            they are each at least 16 characters long!
          </p>
          <br />
          <p>
            Let’s review! Each of your passwords should be: Unique to the
            account At least 16 characters long A random jumble of letters,
            numbers, and symbols. By using strong passwords, you’re taking a
            crucial step toward protecting your digital identity.
          </p>
        </p>
      </div>

      <div className="flex carousel w-3/4 mx-auto h-64 my-10">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/video1")}
            >
              Video
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide4" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/reading1")}
            >
              Reading
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide1" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/matching1")}
            >
              Matching Game
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide2" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/quiz1")}
            >
              Quiz
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide3" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListing1;
