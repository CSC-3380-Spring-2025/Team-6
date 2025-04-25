import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // or however you're importing auth
import LandingPage from "./landing-page";

const LandingRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return <LandingPage />;
};

export default LandingRedirect;
