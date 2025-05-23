// Directive indicating this is a client-side component (specific to frameworks like Next.js)
"use client";

// Import React and necessary hooks
import type React from "react"; // Type import for React specific usage
import { useState, useEffect } from "react";
// Import components and hooks from react-router-dom for navigation
import { useNavigate, Link } from "react-router-dom";
// Import specific icons from the lucide-react library
import { Menu, User, CheckCircle, ChevronRight, Lock, Shield } from "lucide-react";
// Import Firebase authentication and Firestore database instances/functions
import { auth, db } from "../../firebase"; // Assumes firebase config is in this path
import { signOut } from "firebase/auth"; // Firebase function for signing out
import { doc, updateDoc } from "firebase/firestore"; // Firestore functions for document referencing and updating


// Define the CourseListing1 functional component using React.FC type
const CourseListing1: React.FC = () => {
  // Initialize the navigate function for programmatic navigation
  const navigate = useNavigate();
  // State hook to manage the visibility of the main navigation menu dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State hook to manage the visibility of the user profile dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // State hook to store the current vertical scroll position of the window
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect hook to add and remove a scroll event listener
  useEffect(() => {
    // Function to update the scroll position state
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Cleanup function: Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  // Function to scroll the window smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollPosition > 50
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center h-20 px-4">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
            {isMenuOpen && (
              <ul className="absolute left-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resource-library"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-blogs"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="cursor-pointer" onClick={scrollToTop}>
            <div className="w-auto h-10 relative">
              <img
                src="CyberLogo.png"
                alt="Cyber Logo"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <User className="h-6 w-6 text-white" />
            </button>
            {isProfileOpen && (
              <ul className="absolute right-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                <li>
                  <a
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/settings")}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    onClick={async () => {
                      try {
                        await signOut(auth);
                        navigate("/");
                      } catch (error) {
                        console.error("Logout failed:", error);
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="mb-4 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Password
          </span>{" "}
          Security
        </h1>

        {/* Container for informational content sections */}
        <div className="space-y-8 mb-10">
          {/* Section: Introduction to Strong Passwords */}
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-emerald-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="mr-2 text-emerald-500" />
              Create and Use Strong Passwords
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Passwords are the keys to safeguarding your digital and online
              life. They are your first line of defense. And knowing how to
              create and store strong passwords is one of the most critical
              aspects of everyday cybersecurity.
            </p>
          </div>

          {/* Section: General text on password management */}
          <div className="bg-gray-900 rounded-lg p-6 ">
            <p className="text-gray-300 leading-relaxed">
              Protect your passwords like you'd protect your house keys. Of
              course, maintaining your password collection is frustrating for
              many of us (until you start using a password manager). But we're
              here to help! While creating, storing, and remembering passwords
              can feel overwhelming, they remain your first line of defense
              against cybercriminals and data breaches. Fortunately, free,
              secure, and user-friendly password managers have made it easier
              than ever to maintain strong passwords. You can work to secure
              your online presence with just a few simple steps today.
            </p>
          </div>

          {/* Section: Principles of Strong Passwords */}
          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" />
              The power of long, unique, and complex passwords
            </h2>
            <p className="text-gray-300 mb-4">
              For maximum security, remember three principles:
            </p>
            
            {/* Container for the three principles */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4 border-4 border-sky-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="bg-sky-500 text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    1
                  </span>
                  Long
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passwords should be at least 16 characters long. The longer
                  your password, the longer it takes for hackers to crack it
                  using brute force techniques. Right now, an eight-character
                  password takes a few minutes for hacker software to guess by
                  trying every combination of letters, numbers, and symbols. A
                  16-character password takes a billion years to guess!
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-emerald-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="bg-emerald-500 text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    2
                  </span>
                  Unique
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Each account should have a unique password. If you reuse
                  passwords, don't feel ashamed! Reusing passwords is a bad
                  habit many of us are guilty of, but you can start changing
                  your habits today! Reusing passwords across multiple accounts
                  can cause huge headaches. If one account is compromised,
                  unique passwords ensure your other accounts remain secure.
                  Small tweaks like adding a number or a special character
                  aren't enough; each password should be entirely distinct. You
                  can use a password manager to create and store unique
                  passwords for all your accounts!
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-purple-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="bg-purple-500 text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    3
                  </span>
                  Complex
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passwords should include a mix of uppercase and lowercase
                  letters, numbers, and special characters (like @, !, or $).
                  Some platforms even allow spaces. The strongest passwords are
                  a long string of random characters, not identifiable words,
                  names, or dates. However, even if your passwords are random,
                  you must ensure they are each at least 16 characters long!
                </p>
              </div>
            </div>
          </div>
          
          {/* Section: Review/Summary */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2 text-emerald-500" />
              Let's review!
            </h2>
            <p className="text-gray-300 mb-4">
              Each of your passwords should be:
            </p>
            {/* List summarizing the principles */}
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-300">
                <ChevronRight className="text-emerald-500 mr-2" />
                <span>Unique to the account</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="text-emerald-500 mr-2" />
                <span>At least 16 characters long</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="text-emerald-500 mr-2" />
                <span>A random jumble of letters, numbers, and symbols</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4 italic">
              By using strong passwords, you're taking a crucial step toward
              protecting your digital identity.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-10">
        <button
          className="btn bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
          onClick={async () => {
            if (auth.currentUser) {
              const userRef = doc(db, "users", auth.currentUser.uid);
              try {
                await updateDoc(userRef, {
                  "progress.passwordSecurity": true, 
                });
                console.log("Progress updated successfully!");
              } catch (error) {
                console.error("Error updating progress:", error);
              }
            } else {
              console.error("No authenticated user found.");
            }
            navigate("/");
          }}
        >
          <CheckCircle className="mr-2" /> Mark as Complete
        </button>

        </div>

        <div className="flex carousel w-full mx-auto h-64 my-10 rounded-xl overflow-hidden ">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/passwordpic1.jpg"
              alt="Password Security"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/video1")}
              >
                Watch Video
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide3" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          {/* <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-emerald-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/reading1")}
              >
                <BookOpen className="h-5 w-5" />
                Start Reading
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide1" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div> */}

          {/* Slide 3 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="passwordpic2.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-purple-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/matching1")}
              >
                Play Matching Game
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide1" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="passwordpic3.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-sky-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/quiz1")}
              >
                Take Quiz
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide2" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListing1;
