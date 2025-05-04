// Directive indicating this is a client-side component (specific to frameworks like Next.js)
"use client";

// Import React and necessary hooks
import type React from "react"; // Type import for React specific usage
import { useState, useEffect } from "react";
// Import components and hooks from react-router-dom for navigation
import { useNavigate, Link } from "react-router-dom";
// Import specific icons from the lucide-react library
import {
  AlertTriangle,
  CheckCircle,
  FileWarning,
  Shield,
  HelpCircle,
  User,
  Menu,
} from "lucide-react";
// Import Firebase authentication and Firestore database instances/functions
import { auth, db } from "../../firebase"; // Assumes firebase config is in this path
import { signOut } from "firebase/auth"; // Firebase function for signing out
import { doc, updateDoc } from "firebase/firestore"; // Firestore functions for document referencing and updating

// Define the CourseListing3 functional component using React.FC type
const CourseListing3: React.FC = () => {
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

  /**
   * Asynchronous function to handle marking the course module (Phishing Awareness) as complete.
   * Updates the user's progress in Firestore and navigates to the homepage.
   */
  const handleFinish = async () => {
    // Check if a user is currently logged in via Firebase Auth
    if (auth.currentUser) {
      // Create a reference to the current user's document in the 'users' collection
      const userRef = doc(db, "users", auth.currentUser.uid);
      try {
        // Attempt to update the user's document in Firestore
        await updateDoc(userRef, {
          // Set the 'phishingAwareness' field within the 'progress' map to true
          "progress.phishingAwareness": true,
        });
        console.log("Progress updated: phishing marked complete");
      } catch (error) {
        // Log any errors during the Firestore update process
        console.error("Error updating progress:", error);
      }
      // Navigate the user to the homepage after attempting the update
      navigate("/");
    } else {
      // Log an error if no authenticated user is found
      console.error("No authenticated user found.");
      // Navigate the user to the homepage even if not logged in
      navigate("/");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrollPosition > 50
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

      {/* Main content area with padding and max-width */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Title: Phishing and Social Engineering */}
        <h1 className="mb-6 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Phishing
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Social Engineering
          </span>
        </h1>
        
        {/* Container for informational content sections */}
        <div className="space-y-8 mb-10">
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-red-500 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertTriangle className="mr-2 text-red-500" />
              Avoiding Social Engineering and Phishing Attacks
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Do not give sensitive information to anyone unless you are sure
              that they are indeed who they claim to be and that they should
              have access to the information.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <User className="mr-2 text-sky-500" />
              What is a social engineering attack?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In a social engineering attack, an attacker uses human interaction
              (social skills) to obtain or compromise information about an
              organization or its computer systems. An attacker may seem
              unassuming and respectable, possibly claiming to be a new
              employee, repair person, or researcher and even offering
              credentials to support that identity. However, by asking
              questions, he or she may be able to piece together enough
              information to infiltrate an organization's network. If an
              attacker is not able to gather enough information from one source,
              he or she may contact another source within the same organization
              and rely on the information from the first source to add to his or
              her credibility.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FileWarning className="mr-2 text-amber-500" />
              What is a phishing attack?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Phishing is a form of social engineering. Phishing attacks use
              email or malicious websites to solicit personal information by
              posing as a trustworthy organization. For example, an attacker may
              send email seemingly from a reputable credit card company or
              financial institution that requests account information, often
              suggesting that there is a problem. When users respond with the
              requested information, attackers can use it to gain access to the
              accounts.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              Phishing attacks may also appear to come from other types of
              organizations, such as charities. Attackers often take advantage
              of current events and certain times of the year, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Natural disasters (e.g., hurricanes, earthquake)</li>
              <li>Epidemics and health scares (e.g., H1N1)</li>
              <li>Economic concerns (e.g., IRS scams)</li>
              <li>Major political elections</li>
              <li>Holidays</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border-4 border-emerald-500">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" />
              How do you avoid being a victim?
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Be suspicious of unsolicited phone calls, visits, or email
                  messages from individuals asking about employees or other
                  internal information. If an unknown individual claims to be
                  from a legitimate organization, try to verify his or her
                  identity directly with the company.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Do not provide personal information or information about your
                  organization, including its structure or networks, unless you
                  are certain of a person's authority to have the information.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Do not reveal personal or financial information in email, and
                  do not respond to email solicitations for this information.
                  This includes following links sent in email.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Do not send sensitive information over the Internet before
                  checking a website's security.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Pay attention to the URL of a website. Malicious websites may
                  look identical to a legitimate site, but the URL may use a
                  variation in spelling or a different domain (e.g., .com vs.
                  .net).
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  If you are unsure whether an email request is legitimate, try
                  to verify it by contacting the company directly. Do not use
                  contact information provided on a website connected to the
                  request; instead, check previous statements for contact
                  information. Information about known phishing attacks is also
                  available online from groups such as the Anti-Phishing Working
                  Group.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Install and maintain anti-virus software, firewalls, and email
                  filters to reduce some of this traffic.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Take advantage of any anti-phishing features offered by your
                  email client and web browser.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border-4 border-amber-500">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <HelpCircle className="mr-2 text-amber-500" />
              What do you do if you think you are a victim?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <p className="text-gray-300 leading-relaxed">
                  If you believe you might have revealed sensitive information
                  about your organization, report it to the appropriate people
                  within the organization, including network administrators.
                  They can be alert for any suspicious or unusual activity.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <p className="text-gray-300 leading-relaxed">
                  If you believe your financial accounts may be compromised,
                  contact your financial institution immediately and close any
                  accounts that may have been compromised. Watch for any
                  unexplainable charges to your account.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Immediately change any passwords you might have revealed. If
                  you used the same password for multiple resources, make sure
                  to change it for each account, and do not use that password in
                  the future.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Watch for other signs of identity theft.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Consider reporting the attack to the police, and file a report
                  with the Federal Trade Commission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* "Mark as Complete" Button section */}
        <div className="flex justify-center mb-10">
          <button
            className="btn bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            onClick={handleFinish}
          >
            <CheckCircle className="mr-2" /> Mark as Complete
          </button>
        </div>

        {/* Carousel section for related activities */}
        <div className="flex carousel w-full mx-auto h-64 my-10 rounded-xl overflow-hidden ">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="social4.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/video3")}
              >
                Watch Video
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide4" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="social5.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-emerald-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/phishing-game")}
              >
                Play Phishing Game
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

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="social1.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-purple-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/matching3")}
              >
                Play Matching Game
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide2" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="social2.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-sky-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/quiz3")}
              >
                Take Quiz
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide3" className="btn btn-circle pointer-events-auto">
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

// Export the CourseListing3 component for use in other parts of the application
export default CourseListing3;
