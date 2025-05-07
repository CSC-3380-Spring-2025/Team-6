import React from "react";
// Import navigation hook from React Router to handle changing routes
import { useNavigate } from "react-router-dom";

/**
 * LandingPage Component
 *
 * Serves as the main entry point/homepage for the CyberDojo application.
 * It displays an introduction, branding, a call-to-action (Login button),
 * and a brief overview of the offered cybersecurity topics.
 * Features decorative background elements.
 */
const LandingPage: React.FC = () => {
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Handler function to navigate the user to the login page when called
  const handleLogin = () => navigate("/login");

  return (
    // Main container: Full screen height, dark background, centers content vertically and horizontally
    // `relative overflow-hidden` is needed for positioning the absolute background elements
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* --- Background Elements --- */}
      {/* These elements are positioned absolutely behind the main content (z-0) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Subtle dot pattern background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        {/* Animated gradient blob (top-right) */}
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        {/* Animated gradient blob (bottom-left) with delayed animation */}
        <div
          className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }} // Stagger the pulse animation
        ></div>
      </div>

      {/* --- Main Content Area (Hero Section) --- */}
      {/* This content sits above the background elements (z-10) */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Application Logo */}
        <img
          src="CyberLogo.png" // Ensure this path is correct relative to the public folder or build process
          alt="Cyber Logo"
          className="h-20 mx-auto mb-6" // Adjust size and margin as needed
        />
        {/* Main Headline */}
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome To{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-rose-300 dark:decoration-orange-500">
            CyberDojo
          </span>
        </h1>
        {/* Introductory paragraph explaining the application's purpose */}
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
          CyberDojo is your ultimate cybersecurity training hub. Whether you're
          a beginner or looking to sharpen your skills, our interactive modules,
          real-world scenarios, and guided learning paths help you understand,
          practice, and defend against cyber threats.
        </p>
        {/* Call to action button container */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Login Button */}
          <button
            onClick={handleLogin} // Triggers navigation to the login page
            className="px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300"
          >
            Log In
          </button>
          {/* Add Register button here if needed */}
          {/* <button onClick={() => navigate('/register')} className="...">Register</button> */}
        </div>
      </div>

      {/* --- Course Overview Section --- */}
      {/* Positioned below the main hero content, providing a glimpse of the topics */}
      <section
        id="section1" // Optional ID for linking or targeting
        className="relative h-[40vh] w-full flex flex-col justify-center items-center z-10 mt-16" // Added margin-top for spacing
      >
        <div className="container mx-auto px-4">
          {/* Card container for the course overview content */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              {/* Section Title */}
              <h1 className="text-4xl font-bold mb-4 text-white">
                Protect Yourself Online and Beyond
              </h1>
              {/* Brief description of the course topics */}
              <p className="max-w-2xl text-center mb-8 text-white/80">
                Learn how to stay safe with quick, beginner-friendly lessons on
                essential topics:
              </p>
              {/* List of key topics covered */}
              <ul className="space-y-3 mb-8 text-left">
                {/* Phishing Topic */}
                <li className="flex items-start gap-2">
                  {/* Decorative bullet point */}
                  <div className="min-w-5 min-h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  </div>
                  <span className="text-white/70">
                    Phishing & Social Engineering — Spot scams before they catch
                    you.
                  </span>
                </li>
                {/* Password Security Topic */}
                <li className="flex items-start gap-2">
                  <div className="min-w-5 min-h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  </div>
                  <span className="text-white/70">
                    Password Security — Build strong passwords that keep hackers
                    out.
                  </span>
                </li>
                {/* Physical Security Topic */}
                <li className="flex items-start gap-2">
                  <div className="min-w-5 min-h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  </div>
                  <span className="text-white/70">
                    Physical Security — Keep your devices and information safe
                    in everyday life.
                  </span>
                </li>
              </ul>
              {/* Could add another CTA button here, e.g., "Explore Courses" */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Export the component for use in routing or other parts of the app
export default LandingPage;