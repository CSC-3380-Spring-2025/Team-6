"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";

const CourseListing1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <head>
        <title>HTML Elements Reference</title>
      </head>

      <h1>Physical Security Fundamentals</h1>

      <div className="carousel w-full">
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
              Matching Terms/Games
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
