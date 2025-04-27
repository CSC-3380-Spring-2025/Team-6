import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResourceLibrary() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-4 bg-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid/Dot Patterning */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>

          {/* Gradient Animation, Color Transitions */}
          <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold mb-4 text-white">
                  Choose a Reading to Annotate
                </h1>
                
        <button
          onClick={() => navigate("/resource-library/module-1-passwords")}
          className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
        >
          Module 1: Password Management
        </button>

        <button
          onClick={() => navigate("/resource-library/module-2-physical-security")}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
        >
          Module 2: Physical Security Fundamentals
        </button>

        

        <button
          onClick={() => navigate("/resource-library/module-3-social-engineering-awareness")}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 flex items-center justify-center gap-2"
        >
          Module 3: Social Engineering Awareness
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
        >
          Back
        </button>
      </div>
    </div>
  );
}