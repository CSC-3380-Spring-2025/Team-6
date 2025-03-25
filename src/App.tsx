import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./home-page";
import VideoOne from "./video-one";

const App: React.FC = () => {
  return (
    /*/<VideoOne />*/
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
