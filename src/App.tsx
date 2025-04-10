import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./home-page";
import VideoOne from "./course-listing-pages/password-security/video1";
import VideoTwo from "./course-listing-pages/phishing-and-social-engineering/video2";
import VideoThree from "./course-listing-pages/physical-security/video3";
import PrivateRoute from "./PrivateRoute";
import CourseListing1 from "./course-listing-pages/password-security/course-listing1";
import CourseListing2 from "./course-listing-pages/physical-security/course-listing2";
import CourseListing3 from "./course-listing-pages/phishing-and-social-engineering/course-listing3";
import QuizFramework1 from "./course-listing-pages/password-security/quiz-framework1";
import QuizFramework2 from "./course-listing-pages/physical-security/quiz-framework2";
import QuizFramework3 from "./course-listing-pages/phishing-and-social-engineering/quiz-framework3";
import MatchingGame1 from "./course-listing-pages/password-security/matching-game1";
import MatchingGame2 from "./course-listing-pages/physical-security/matching-game2";
import MatchingGame3 from "./course-listing-pages/phishing-and-social-engineering/matching-game3";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />

        <Route path="/courselisting1" element={<CourseListing1/>} />
        <Route path="/courselisting2" element={<CourseListing2/>} />
        <Route path="/courselisting3" element={<CourseListing3/>} />
        <Route path="/video1" element={<VideoOne/>} />
        <Route path="/video2" element={<VideoTwo/>} />
        <Route path="/video3" element={<VideoThree/>} />
      
        {/*
        <Route
          path="/video-one"
          element={
            <PrivateRoute>
              <VideoOne />
            </PrivateRoute>
          }
        />
        */}
        <Route path="/quiz1" element={<QuizFramework1 />} />
        <Route path="/quiz2" element={<QuizFramework2 />} />
        <Route path="/quiz3" element={<QuizFramework3 />} />

        <Route path="/matching1" element={<MatchingGame1/>} />
        <Route path="/matching2" element={<MatchingGame2/>} />
        <Route path="/matching3" element={<MatchingGame3/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
