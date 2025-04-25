import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <img src="CyberLogo.png" alt="Cyber Logo" className="h-20 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Welcome to CyberDojo
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
          CyberDojo is your ultimate cybersecurity training hub. Whether you're a beginner or looking to sharpen your skills, our interactive modules, real-world scenarios, and guided learning paths help you understand, practice, and defend against cyber threats.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleLogin}
            className="px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;