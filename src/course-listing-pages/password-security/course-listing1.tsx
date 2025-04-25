"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const CourseListing1: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        "progress.passwordSecurity": true,
      });
      navigate("/");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <head>
        <title>Password Security</title>
      </head>

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Password
        </span>{" "}
        Security
      </h1>

      <div>
        <p>
          Create and Use Strong Passwords. Passwords are the keys to safeguarding
          your digital and online life. They are your first line of defense. Knowing
          how to create and store strong passwords is one of the most critical
          aspects of everyday cybersecurity.
        </p>
        <br />
        <p>
          Protect your passwords like you'd protect your house keys. Maintaining
          your password collection may be frustrating, but password managers make it
          easier. Strong, unique passwords are essential to keeping your accounts
          secure.
        </p>
        <br />
        <p>Here are the three key principles:</p>
        <br />
        <p>
          1. Long – At least 16 characters. 2. Unique – Each account should have a
          different password. 3. Complex – Include uppercase, lowercase, numbers,
          and symbols.
        </p>
        <br />
        <p>
          Using strong passwords is one of the best steps you can take to protect
          your digital identity.
        </p>
      </div>

      <button
        className="btn btn-error p-3 pointer-events-auto"
        onClick={handleFinish}
      >
        Finish
      </button>

      <div className="flex carousel w-3/4 mx-auto h-64 my-10">
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
