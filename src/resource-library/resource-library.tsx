import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResourceLibrary() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-white">
      <h1 className="text-3xl font-bold mb-8">Choose a Reading to Annotate</h1>

      <button
        onClick={() => navigate("/resource-library/module-2-physical-security")}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Module 1: Physical Security Fundamentals
      </button>

      <button
        onClick={() => navigate("/resource-library/module-1-passwords")}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Module 2: Password Management
      </button>

      <button
        onClick={() => navigate("/resource-library/module-3-social-engineering-awareness")}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Module 3: Social Engineering Awareness
      </button>
    </div>
  );
}