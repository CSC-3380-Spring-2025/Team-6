import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./home-page";
import VideoOne from "./video-pages/video-one";
import PrivateRoute from "./PrivateRoute";
import CourseListing1 from "./course-listing-pages/physical-security/course-listing1";
import CourseListing2 from "./course-listing-pages/phishing/course-listing2";
import CourseListing3 from "./course-listing-pages/social-engineering-awareness/course-listing3";
import QuizFramework1 from "./course-listing-pages/physical-security/quiz-framework1";
import QuizFramework2 from "./course-listing-pages/phishing/quiz-framework2";
import QuizFramework3 from "./course-listing-pages/social-engineering-awareness/quiz-framework3";
import MatchingGame1 from "./course-listing-pages/physical-security/matching-game1";
import MatchingGame2 from "./course-listing-pages/phishing/matching-game2";
import MatchingGame3 from "./course-listing-pages/social-engineering-awareness/matching-game3";

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

        {/*
        <Route path="/video2" element={<VideoOne/>} />
        <Route path="/video3" element={<VideoOne/>} />

        <Route path="/reading1" element={<VideoOne/>} />
        <Route path="/reading2" element={<VideoOne/>} />
        <Route path="/reading3" element={<VideoOne/>} />

        <Route path="/matching1" element={<VideoOne/>} />
        <Route path="/matching2" element={<VideoOne/>} />
        <Route path="/matching3" element={<VideoOne/>} />

        <Route path="/quiz1" element={<VideoOne/>} />
        <Route path="/quiz2" element={<VideoOne/>} />
        <Route path="/quiz3" element={<VideoOne/>} />
        */}
      
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
        <Route path="/quiz1" element={<QuizFramework1 onGoHome={() => window.location.href = '/'} />} />
        <Route path="/quiz2" element={<QuizFramework2 onGoHome={() => window.location.href = '/'} />} />
        <Route path="/quiz3" element={<QuizFramework3 onGoHome={() => window.location.href = '/'} />} />

        <Route path="/matching1" element={<MatchingGame1 onGoHome={() => window.location.href = '/'} />} />
        <Route path="/matching2" element={<MatchingGame2 onGoHome={() => window.location.href = '/'} />} />
        <Route path="/matching3" element={<MatchingGame3 onGoHome={() => window.location.href = '/'} />} />

      </Routes>
    </Router>
  );
};

export default App;
