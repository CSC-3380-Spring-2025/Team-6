import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./home-page";
import VideoOne from "./video-one";
import PrivateRoute from "./PrivateRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/video-one"
          element={
            <PrivateRoute>
              <VideoOne />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
