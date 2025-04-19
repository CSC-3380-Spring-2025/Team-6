import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page"; 
import AuthPage from "./AuthPage";
import HomePage from "./home-page";
import VideoOne from "./course-listing-pages/password-security/video1";
import VideoThree from "./course-listing-pages/phishing-and-social-engineering/video3";
import VideoTwo from "./course-listing-pages/physical-security/video2";
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
import PhishingGame from "./course-listing-pages/phishing-and-social-engineering/phishing-game";
import ProfilePage from "./ProfilePage";
import ResourceLibrary from "./resource-library/resource-library";
import ResourceLibraryPage1 from "./resource-library/module-1-passwords/page1";
import ResourceLibraryPage2 from "./resource-library/module-2-physical-security/page2";
import ResourceLibraryPage3 from "./resource-library/module-3-social-engineering-awareness/page3";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/**/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
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
        
        <Route path="/phishing-game" element={<PhishingGame />} />

        <Route path="/resource-library" element={<ResourceLibrary />} />
        <Route path="/resource-library/module-1-passwords" element={<ResourceLibraryPage1 />} />
        <Route path="/resource-library/module-2-physical-security" element={<ResourceLibraryPage2 />} />
        <Route path="/resource-library/module-3-social-engineering-awareness" element={<ResourceLibraryPage3 />} />
        
      </Routes>
    </Router>
  );
};

export default App;
