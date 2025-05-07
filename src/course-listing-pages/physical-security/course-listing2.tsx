// Directive indicating this is a client-side component (specific to frameworks like Next.js)
"use client"

// Import React and necessary hooks
import type React from "react" // Type import for React specific usage
import { useState, useEffect } from "react";
// Import components and hooks from react-router-dom for navigation
import { useNavigate, Link } from "react-router-dom"
// Import icons from lucide-react library
import { CheckCircle, Lock, Shield, Camera, Bell, Key, Fence, AlertTriangle, Users, Lightbulb, Menu, User } from "lucide-react"
// Import Firebase authentication and Firestore database instances/functions
import { auth, db } from "../../firebase" // Assumes firebase config is in this path
import { signOut } from "firebase/auth"; // Firebase function for signing out
import { doc, updateDoc } from "firebase/firestore" // Firestore functions for document referencing and updating

// Define the CourseListing2 functional component using React.FC type
const CourseListing2: React.FC = () => {
    // Initialize the navigate function for programmatic navigation
    const navigate = useNavigate()
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
     * Asynchronous function to handle marking the course module as complete.
     * Updates the user's progress in Firestore and navigates to the homepage.
     */
    const handleFinish = async () => {
        // Check if a user is currently logged in via Firebase Auth
        if (auth.currentUser) {
            // Create a reference to the current user's document in the 'users' collection
            const userRef = doc(db, "users", auth.currentUser.uid)
            try {
                // Attempt to update the user's document in Firestore
                await updateDoc(userRef, {
                    // Set the 'physicalSecurity' field within the 'progress' map to true
                    "progress.physicalSecurity": true,
                })
                console.log("Progress updated: physicalSecurity marked complete")
            } catch (error) {
                // Log any errors during the Firestore update process
                console.error("Error updating progress:", error)
            }
            // Navigate the user to the homepage after attempting the update
            navigate("/")
        } else {
            // Log an error if no authenticated user is found
            console.error("No authenticated user found.")
            // Navigate the user to the homepage even if not logged in
            navigate("/")
        }
    }

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

      {/* Main content area with padding and max-width */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="mb-6 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Physical Security
          </span>{" "}
          Fundamentals
        </h1>

        {/* Container for informational content sections */}
        <div className="space-y-8 mb-10">
          {/* Introductory section */}
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-emerald-500 ">
            <p className="text-gray-300 leading-relaxed">
              Physical security and cybersecurity measures have traditionally been viewed as separate efforts. However,
              integrating physical security and cybersecurity can improve threat detection and response capabilities,
              cut costs, and increase overall security posture.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              To fully protect your sensitive assets, all your security programs must communicate. Cybersecurity experts
              and physical security professionals are concerned with risk management and stand a better chance of
              keeping potential bad actors out by working together.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-sky-500" />
              What is the Importance of Physical Security and Cybersecurity?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Through the adoption of the Internet of Things (IoT) and Industrial Internet of Things (IIoT) devices,
                the world is becoming increasingly interconnected. This mesh of cyber-physical systems (CPS) expands the
                attack surface, making physical and digital security essential to prevent cyber physical attacks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, even commonplace devices like surveillance cameras can be targeted by cybercriminals. Protecting
                these devices is no longer just a technology concern; it involves safeguarding people, processes, and
                physical infrastructure.
              </p>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Incidents involving the convergence of cyber and physical security fall into two main categories:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" />
                  Cyberattacks on Physical Systems
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  These incidents involve cybersecurity threats targeting physical infrastructure, such as video
                  management systems, access control devices, or industrial control systems. Attackers aim to compromise
                  these systems to gain unauthorized access, disrupt operations, or cause harm.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-amber-500">
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <Lock className="mr-2 text-amber-500" />
                  Physical Systems Used in Cyberattacks
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  In this scenario, physical devices or systems become tools for cyberattacks. For instance, insecure
                  Internet of Things (IoT) devices can be hijacked and used as part of botnets to launch a distributed
                  denial of service attack. Safeguarding hardware like servers, computers, and networked technology from
                  unauthorized physical access or tampering is crucial to prevent data breaches and cyber-system
                  disruptions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" />
              What Are the Key Components of Physical Security?
            </h2>
            <p className="text-gray-300 mb-6">
              It takes the implementation of many physical security measures to keep sensitive assets safe, such as:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 border-4 border-sky-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Key className="mr-2 text-sky-500" />
                  1. Access Control Systems
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Access control systems, including key card door locks and cloud-based solutions, are vital in
                  restricting access to specific areas, such as exterior entry doors, server rooms, and HR offices. They
                  ensure that only authorized individuals can enter, bolstering security and confidentiality.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-emerald-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Fence className="mr-2 text-emerald-500" />
                  2. Perimeter Security
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perimeter security involves fences, vehicle barriers, and access control points. These measures are
                  designed to prevent unauthorized access to a facility, creating the first line of defense against
                  potential threats.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-purple-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Camera className="mr-2 text-purple-500" />
                  3. Surveillance Systems
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Surveillance systems, such as CCTV cameras, monitor and record activities in and around a facility,
                  enhance security, and aid investigations by providing a detailed visual record.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-red-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" />
                  4. Intrusion Detection Systems
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Intrusion detection systems are crucial for alerting security personnel to unauthorized access
                  attempts. They enable a rapid response and the swift initiation of security protocols.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-amber-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Lightbulb className="mr-2 text-amber-500" />
                  5. Security Lighting
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Security lighting serves multiple purposes — it helps deter intruders while ensuring proper night
                  visibility. It acts as a deterrent and enhances overall safety.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Users className="mr-2 text-blue-500" />
                  6. Security Personnel
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Trained security personnel provide a human presence in your security framework. They assist in
                  monitoring and responding to security threats, enhancing the proactive security posture.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-pink-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Bell className="mr-2 text-pink-500" />
                  7. Security Alarms
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Security alarms are essential for detecting breaches and triggering alerts. These alarms prompt
                  immediate action and facilitate a quick and effective response to security incidents.
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
              src="physsec1.jpeg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/video2")}
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
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="physsec2.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-purple-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/matching2")}
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

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="physsec3.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-sky-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/quiz2")}
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
  )
}

// Export the CourseListing2 component for use in other parts of the application
export default CourseListing2