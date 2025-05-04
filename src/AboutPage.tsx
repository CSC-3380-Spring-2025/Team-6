// Indicates that this component should be rendered on the client-side (important for frameworks like Next.js that support Server Components)
"use client";

import type React from "react"; // Import React type for type checking (often optional with modern setups)
import { useEffect, useState } from "react";
// Import navigation hooks and Link component from React Router
import { useNavigate, Link } from "react-router-dom";
// Import specific icons from the lucide-react library
import { Menu, Shield, Users, User } from "lucide-react";
// Import the signOut function from Firebase Authentication
import { signOut } from "firebase/auth";
// Import the Firebase auth instance
import { auth } from "./firebase";

/**
 * AboutPage Component
 *
 * Displays information about the CyberDojo platform, including its mission
 * and key features. Includes a dynamic fixed navigation header with dropdown menus.
 */
const AboutPage: React.FC = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // State to control the visibility of the main navigation dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to control the visibility of the user profile dropdown menu
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // State to store the current vertical scroll position of the window
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect hook to track window scroll position
  useEffect(() => {
    // Function to update scrollPosition state when the window is scrolled
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Cleanup function: Remove scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  /**
   * Utility function to smoothly scroll the window to the top.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Component Rendering ---
  return (
    // Main container for the page
    <div className="flex flex-col min-h-screen w-full text-white">
      {/* --- Fixed Navigation Header --- */}
      <div
        // Header is fixed to the top, always visible (z-50)
        // Background style changes dynamically based on scroll position
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollPosition > 50 // Apply background/blur effect only after scrolling down 50px
            ? "bg-black/80 backdrop-blur-md shadow-lg" // Scrolled state style
            : "bg-transparent" // Top of page style
        }`}
      >
        {/* Container to constrain header content width and add padding */}
        <div className="container mx-auto flex justify-between items-center h-20 px-4">
          {/* Left side: Main Menu Button & Dropdown */}
          <div className="relative">
            {/* Button to toggle the main menu dropdown */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the isMenuOpen state
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="h-6 w-6 text-white" /> {/* Menu icon */}
            </button>
            {/* Main Menu Dropdown - Conditionally rendered based on isMenuOpen state */}
            {isMenuOpen && (
              <ul className="absolute left-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                {/* Navigation Links */}
                <li><Link to="/" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">Homepage</Link></li>
                <li><Link to="/about" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">About</Link></li>
                <li><Link to="/resource-library" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">Resource Library</Link></li>
                <li><Link to="/user-blogs" className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors">Blog</Link></li>
              </ul>
            )}
          </div>

          {/* Center: Logo (clickable to scroll to top) */}
          <div className="cursor-pointer" onClick={scrollToTop}> {/* Makes the logo area clickable */}
            <div className="w-auto h-10 relative">
              <img
                src="CyberLogo.png" // Ensure this path is correct
                alt="Cyber Logo"
                className="h-10" // Logo size
              />
            </div>
          </div>

          {/* Right side: Profile Button & Dropdown */}
          <div className="relative">
            {/* Button to toggle the profile dropdown */}
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)} // Toggles the isProfileOpen state
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <User className="h-6 w-6 text-white" /> {/* User profile icon */}
            </button>
            {/* Profile Dropdown - Conditionally rendered based on isProfileOpen state */}
            {isProfileOpen && (
              <ul className="absolute right-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                {/* Profile Link (uses navigate) */}
                <li><a onClick={() => navigate("/profile")} className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer">Profile</a></li>
                {/* Settings Link (uses navigate) */}
                <li><a onClick={() => navigate("/settings")} className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer">Settings</a></li>
                {/* Logout Action */}
                <li>
                  <a
                    onClick={async () => {
                      try {
                        await signOut(auth); // Call Firebase sign out function
                        navigate("/"); // Redirect to homepage after successful logout
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

      {/* --- Background Wrapper --- */}
      {/* This div provides the consistent background for the entire page, behind the main content */}
      <div className="fixed inset-0 z-0">
        {/* Gradient background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Subtle dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
          {/* Animated gradient blob (top-right) */}
          <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          {/* Animated gradient blob (bottom-left) */}
          <div
            className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }} // Stagger animation
          ></div>
        </div>
      </div>

      {/* --- Main Page Content --- */}
      {/* Positioned above the background (z-10) with margin-top to clear the fixed header */}
      <div className="z-10 mt-36 relative flex flex-col">
        {/* Hero Section */}
        <section className="hero py-20">
          {/* Using daisyUI 'hero' and 'hero-content' classes (inferred) for layout */}
          <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl text-left mx-auto px-4"> {/* Added px-4 for padding */}
            {/* Image for the hero section */}
            <div className="lg:w-1/2">
              <img
                src="/dabird.png?height=400&width=600" // Ensure image path is correct
                alt="Cybersecurity professionals working" // Descriptive alt text
                width={600} // Specify dimensions for performance/layout
                height={400}
                className="rounded-lg shadow-lg" // Added shadow for depth
              />
            </div>
            {/* Text content for the hero section */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold">About CyberDojo</h1>
              <p className="py-6 text-lg">
                CyberDojo is a platform designed to enhance your cybersecurity
                knowledge and skills through interactive learning experiences.
                Our mission is to empower individuals and organizations with the
                tools and knowledge needed to navigate the ever-evolving
                landscape of cybersecurity threats.
              </p>
              {/* Button likely styled by daisyUI ('btn', 'btn-primary') */}
              <button className="btn btn-primary" onClick={() => navigate("/")}>Our Courses</button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4"> {/* Corrected typo 4x1 -> 4xl */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              {/* Divider element, likely styled by daisyUI */}
              <div className="divider max-w-xs mx-auto"></div>
              <p className="text-xl">
                To transform mandatory corporate cybersecurity training into an interactive adventure—combining the playful rewards of Duolingo with the practical labs of TryHackMe—so that every user gains confidence and competence in basic online-safety practices.
              </p>
            </div>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Protections Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto w-full"> {/* Added w-full */}
                {/* Card layout likely styled by daisyUI ('card-body', 'card-title') */}
                <div className="card-body items-center text-center">
                  <Shield className="w-12 h-12 text-primary mb-4" /> {/* Shield icon */}
                  <h3 className="card-title text-xl font-semibold">Protections</h3> {/* Adjusted styling */}
                  <p>
                    The wide array of threats that can attack modern day systems are all covered on our site.
                  </p>
                </div>
              </div>
              {/* Community Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto w-full"> {/* Added w-full */}
                <div className="card-body items-center text-center">
                  <Users className="w-12 h-12 text-primary mb-4" /> {/* Users icon */}
                  <h3 className="card-title text-xl font-semibold">Community</h3> {/* Adjusted styling */}
                  <p>
                    Working together and developing knowledge is an important pillar of our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer or additional sections could go here */}

      </div> {/* End Main Page Content */}
    </div> // End Main Container
  );
};

export default AboutPage;