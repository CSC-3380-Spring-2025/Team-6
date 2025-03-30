import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./landing-page.css"; // Import CSS for styling

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the login page when the button is clicked
  };

  return (
    <div className="landing-page-container">
      <div className="landing-logos">
        <img src="CyberLogo.png" alt="Cyber Logo" />
      </div>
      <div className="landing-container">
        <h1>Welcome to CyberDojo</h1>
        <button className="landing-btn" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;

