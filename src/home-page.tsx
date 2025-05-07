// Indicates that this component should be rendered on the client-side
"use client";

import { useState, useEffect } from "react";
// Import navigation hooks and Link component from React Router
import { useNavigate, Link } from "react-router-dom";
// Import icons from lucide-react
import { Menu, User } from "lucide-react";
// Import Firebase sign out function and auth instance
import { signOut } from "firebase/auth";
import { auth } from "./firebase";


/**
 * HomePage Component
 *
 * Serves as the main landing/dashboard page for logged-in users.
 * Features a dynamic fixed navigation header, a hero section,
 * sections detailing available course topics with links to start them,
 * and a footer. Includes smooth scrolling functionality.
 */
const HomePage = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // State for main navigation menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for profile dropdown menu visibility
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // State to store current vertical scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to track scroll position for dynamic header styling
  useEffect(() => {
    // Handler to update scroll position state
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Add listener on mount
    window.addEventListener("scroll", handleScroll);
    // Remove listener on unmount (cleanup)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means run only on mount/unmount

  /**
   * Scrolls the window smoothly to the top of the page.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Scrolls the window smoothly to the HTML element with the specified ID.
   * @param {string} id - The ID of the element to scroll to.
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use the scrollIntoView method for smooth scrolling
      element.scrollIntoView({ behavior: "smooth", block: "start" }); // Adjusted block to 'start' for better positioning
    } else {
      console.warn(`scrollToSection: Element with id "${id}" not found.`);
    }
  };

  // --- Component Rendering ---
  return (
    // Main container for the page
    <div className="flex flex-col items-center min-h-screen w-full bg-black text-white">
      {/* --- Reusable Fixed Navigation Header --- */}
      <div
        // Header fixed to the top (z-50)
        // Background transitions based on scrollPosition
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollPosition > 50
            ? "bg-black/80 backdrop-blur-md shadow-lg" // Style when scrolled
            : "bg-transparent" // Style at the top
        }`}
      >
        <div className="container mx-auto flex justify-between items-center h-20 px-4">
          {/* Left: Main Menu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
            {/* Conditionally rendered main menu */}
            {isMenuOpen && (
              <ul className="absolute left-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                <li><Link to="/" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">Homepage</Link></li>
                <li><Link to="/about" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">About</Link></li>
                <li><Link to="/resource-library" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">Resource Library</Link></li>
                <li><Link to="/user-blogs" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">Blog</Link></li>
              </ul>
            )}
          </div>

          {/* Center: Logo (Scrolls to Top) */}
          <div className="cursor-pointer" onClick={scrollToTop}>
            <div className="w-auto h-10 relative">
              <img src="CyberLogo.png" alt="Cyber Logo" className="h-10" />
            </div>
          </div>

          {/* Right: Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <User className="h-6 w-6 text-white" />
            </button>
            {/* Conditionally rendered profile menu */}
            {isProfileOpen && (
              <ul className="absolute right-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                <li><a onClick={() => navigate("/profile")} className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer">Profile</a></li>
                <li><a onClick={() => navigate("/settings")} className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer">Settings</a></li>
                <li>
                  {/* Logout Action */}
                  <a
                    onClick={async () => {
                      try {
                        await signOut(auth); // Sign out using Firebase auth
                        navigate("/"); // Redirect to landing page after logout
                      } catch (error) {
                        console.error("Logout failed:", error);
                        // TODO: Add user feedback for logout failure
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* --- End Navigation Header --- */}


      {/* Container for page content, sits above the fixed background */}
      <div className="flex flex-col w-full">
        {/* --- Fixed Background Elements --- */}
        {/* Provides the consistent gradient/pattern background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Dot Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
            {/* Animated Blobs */}
            <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
        {/* --- End Background Elements --- */}


        {/* --- Page Sections --- */}

        {/* Hero Section (Top of Page) */}
        <section className="relative h-screen w-full flex flex-col justify-center items-center z-10 overflow-hidden"> {/* Added overflow-hidden */}
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Cyber Security
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-orange-400">
                  For Beginners
                </span>
              </h1>

              {/* Sub-headline/Description */}
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                Empowering individuals with cutting-edge knowledge to protect
                themselves in an increasingly complex digital world.
              </p>

              {/* Call to Action Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-md">
                <button
                  // Scrolls smoothly to the first course section ('section1') on click
                  onClick={() => scrollToSection("section1")}
                  className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2 flex-1"
                >
                  Explore Courses
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"> {/* Added pointer-events-none */}
            <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              {/* Animated bouncing dot */}
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* --- Course Section Template --- */}
        {/* Each section follows a similar structure: */}
        {/* - <section> tag with a unique ID for scrolling */}
        {/* - Container div */}
        {/* - Card div with background/blur */}
        {/* - Content: Title, Description, Bullet points, "Start Learning" Button */}

        {/* Section 1: Password Security */}
        <section
          id="section1" // ID used by scrollToSection
          className="relative min-h-[60vh] w-full flex flex-col justify-center items-center z-10 py-16" // Added padding
        >
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">Password Security</h1>
                {/* NOTE: This description seems incorrect for Password Security */}
                <p className="max-w-2xl text-center mb-8 text-white/80">
                   Learn the essentials of creating strong, unique passwords and utilizing tools like password managers and multi-factor authentication to secure your accounts effectively.
                </p>
                <ul className="space-y-3 mb-8 text-left self-start max-w-lg mx-auto"> {/* Centered list */}
                  <li className="flex items-start gap-3"> {/* Increased gap */}
                    <div className="min-w-5 min-h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-1 flex-shrink-0"> {/* Added flex-shrink-0 */}
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    </div>
                    <span className="text-white/80">Creating strong, unique passwords</span> {/* Increased text opacity */}
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    </div>
                    <span className="text-white/80">Multi-factor authentication (MFA)</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-rose-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    </div>
                    <span className="text-white/80">Password manager best practices</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate("/courselisting1")} // Navigates to the specific course page
                  className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Physical Security */}
        <section
          id="section2" // ID used by potential future scroll links
          className="relative min-h-[60vh] w-full flex flex-col justify-center items-center z-10 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">Physical Security</h1>
                 {/* NOTE: This description seems incorrect for Physical Security */}
                <p className="max-w-2xl text-center mb-8 text-white/80">
                  Understand the importance of securing physical assets like devices and documents, controlling access to sensitive areas, and being aware of environmental security risks.
                </p>
                 <ul className="space-y-3 mb-8 text-left self-start max-w-lg mx-auto">
                   <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Securing physical devices and documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Understanding access control systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-white/80">Environmental security considerations</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate("/courselisting2")} // Navigates to course page 2
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Phishing and Social Engineering */}
        <section
          id="section3" // ID used by potential future scroll links
          className="relative min-h-[60vh] w-full flex flex-col justify-center items-center z-10 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4 text-white">Phishing & Social Engineering</h1>
                 {/* This description seems appropriate */}
                <p className="max-w-2xl text-center mb-8 text-white/80">
                  Explore how attackers manipulate people through deceptive emails, messages, or calls, and learn best practices for identifying and reporting these threats to protect personal information.
                </p>
                <ul className="space-y-3 mb-8 text-left self-start max-w-lg mx-auto">
                  <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                       <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <span className="text-white/80">Identifying phishing attempts (email, SMS, voice)</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <span className="text-white/80">Recognizing common social engineering tactics</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="min-w-5 min-h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <span className="text-white/80">Protecting personal information from requests</span>
                  </li>
                </ul>
                <button
                  onClick={() => navigate("/courselisting3")} // Navigates to course page 3
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 flex items-center justify-center gap-2"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="relative bg-black/50 backdrop-blur-md text-white/70 w-full p-8 z-20 border-t border-white/10 mt-16"> {/* Added margin-top */}
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
            {/* Copyright Info */}
            <div className="flex items-center mb-4 sm:mb-0">
              {/* Placeholder logo/icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current mr-2 opacity-50">
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              {/* Dynamically display the current year */}
              <p>Copyright © {new Date().getFullYear()} CyberDojo - All right reserved</p>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4"> {/* Reduced gap */}
              {/* Twitter Link */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors"> {/* Updated link and added target/rel */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              {/* YouTube Link */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors"> {/* Updated link */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
              </a>
              {/* Facebook Link */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </a>
            </div>
          </div>
        </footer>
        {/* --- End Footer --- */}

      </div> {/* End Page Sections Container */}
    </div> // End Main Container
  );
};

export default HomePage;