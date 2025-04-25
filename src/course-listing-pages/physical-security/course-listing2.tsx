import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const CourseListing2: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        "progress.physicalSecurity": true,
      });
      navigate("/");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <head>
        <title>Physical Security</title>
      </head>

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Physical Security
        </span>
      </h1>

      <div>
        <p>
          Physical security focuses on protecting physical assets like buildings, computers,
          and personnel. It complements cybersecurity and ensures that access to critical
          infrastructure is limited and monitored.
        </p>
      </div>

      <button className="btn btn-error p-3 pointer-events-auto" onClick={handleFinish}>
        Finish
      </button>

      <div className="flex carousel w-3/4 mx-auto h-64 my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full z-0 pointer-events-none" />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button className="btn btn-error p-3 pointer-events-auto" onClick={() => navigate("/video2")}>Video</button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide4" className="btn btn-circle pointer-events-auto">❮</a>
            <a href="#slide2" className="btn btn-circle pointer-events-auto">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full z-0 pointer-events-none" />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button className="btn btn-error p-3 pointer-events-auto" onClick={() => navigate("/reading2")}>Reading</button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide1" className="btn btn-circle pointer-events-auto">❮</a>
            <a href="#slide3" className="btn btn-circle pointer-events-auto">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" className="w-full z-0 pointer-events-none" />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button className="btn btn-error p-3 pointer-events-auto" onClick={() => navigate("/matching2")}>Matching Game</button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide2" className="btn btn-circle pointer-events-auto">❮</a>
            <a href="#slide4" className="btn btn-circle pointer-events-auto">❯</a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full z-0 pointer-events-none" />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button className="btn btn-error p-3 pointer-events-auto" onClick={() => navigate("/quiz2")}>Quiz</button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide3" className="btn btn-circle pointer-events-auto">❮</a>
            <a href="#slide1" className="btn btn-circle pointer-events-auto">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListing2;