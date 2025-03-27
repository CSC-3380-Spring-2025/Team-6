import React from "react";
import "./home-page.css";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="login" onClick={() => navigate("/login")}>
        Login
      </button>
      <div className="logos">
        <img src="CyberLogo.png" />
      </div>

      <div className="nav-bar">
        <a className="navbtn" href="url">
          Home
        </a>
        <a className="navbtn" href="url">
          Courses
        </a>
        <a className="navbtn" href="url">
          About
        </a>
        <a className="navbtn" href="url">
          Contacts
        </a>
      </div>

      <div className="Section-Buttons">
        <button className="sectionbtn" onClick={() => navigate("/courselisting1")}>
          Physical Security Fundamentals
        </button>
        <button className="sectionbtn" onClick={() => navigate("/courselisting2")}> 
          Phishing 
          </button>
        <button className="sectionbtn"onClick={() => navigate("/courselisting3")}>
          Social Engineering Awareness
        </button>
      </div>
    </div>
  );
};

export default HomePage;
