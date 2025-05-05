import React, { useEffect, useState } from "react";
// Import Firebase authentication and Firestore database instances
import { auth, db } from "./firebase";
// Import Firestore functions for document operations (getDoc for single fetch, onSnapshot for real-time updates)
import { doc, getDoc, onSnapshot } from "firebase/firestore";
// Import navigation hook from React Router
import { useNavigate } from "react-router-dom";

/**
 * ProfilePage Component
 *
 * Displays the currently logged-in user's profile information,
 * including display name, email, course progress, and earned badges.
 * Fetches data in real-time from Firestore.
 */
const ProfilePage: React.FC = () => {
  // State variable to hold the user's profile data fetched from Firestore. Initialized to null.
  const [profileData, setProfileData] = useState<any>(null); // Consider defining a TypeScript interface for profileData instead of 'any' for better type safety
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Effect hook to fetch user profile data when the component mounts
  useEffect(() => {
    // Ensure a user is currently logged in before attempting to fetch data
    if (!auth.currentUser) {
      console.warn("No user logged in, cannot fetch profile."); // Optional: Add a warning or redirect logic
      // Possibly navigate('/login') or handle this case appropriately
      return; // Exit the effect if no user is logged in
    }

    // Create a reference to the specific user's document in the 'users' collection
    // Uses the logged-in user's unique ID (uid) as the document ID
    const docRef = doc(db, "users", auth.currentUser.uid);

    // Set up a real-time listener (onSnapshot) for the user's document.
    // This function will be called immediately with the current data,
    // and then again whenever the document changes in Firestore.
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        // If the document exists, update the profileData state with the document's content
        setProfileData(docSnap.data());
      } else {
        // Handle the case where the user document might not exist (e.g., new user, data inconsistency)
        console.error("User profile document does not exist!");
        setProfileData(null); // Or set some default/error state
      }
    });

    // Cleanup function returned by useEffect.
    // This function runs when the component unmounts.
    // It detaches the Firestore listener (unsubscribe) to prevent memory leaks
    // and unnecessary background operations.
    return () => unsubscribe();

    // The empty dependency array [] means this effect runs only once when the component mounts
    // and the cleanup function runs when it unmounts.
  }, []); // Run effect only on mount

  // Conditional rendering: Display a loading message while profileData is being fetched (is null)
  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl">
        Loading profile...
      </div>
    );
  }

  // Render the main profile page content once profileData is available
  return (
    // Main container with background gradient and centering content
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0e0e1f] to-black text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Card container for profile details */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-md w-full">
        {/* Welcome message displaying the user's name */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Welcome,{" "}
          <span className="text-rose-400">{profileData.displayName}</span>
        </h1>
        {/* Display the user's email */}
        <p className="text-center text-white/80 mb-8">
          Email: {profileData.email}
        </p>

        {/* Section for displaying course progress */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-white/20 pb-2 mb-4 text-white">
            Course Progress
          </h2>
          {/* List of courses and their completion status */}
          <ul className="space-y-3">
            {/* Password Security Progress Item */}
            <li className="flex justify-between items-center">
              <span>Password Security</span>
              {/* Dynamically set text and color based on completion status */}
              <span
                className={`font-bold ${
                  // Optional chaining (?.) prevents errors if 'progress' or the specific course field doesn't exist
                  profileData.progress?.passwordSecurity
                    ? "text-green-400" // Green if completed
                    : "text-gray-400" // Gray if incomplete
                }`}
              >
                {profileData.progress?.passwordSecurity
                  ? "✓ Completed"
                  : "Incomplete"}
              </span>
            </li>
            {/* Physical Security Progress Item */}
            <li className="flex justify-between items-center">
              <span>Physical Security</span>
              <span
                className={`font-bold ${
                  profileData.progress?.physicalSecurity
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {profileData.progress?.physicalSecurity
                  ? "✓ Completed"
                  : "Incomplete"}
              </span>
            </li>
            {/* Phishing Awareness Progress Item */}
            <li className="flex justify-between items-center">
              <span>Phishing Awareness</span>
              <span
                className={`font-bold ${
                  profileData.progress?.phishingAwareness
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {profileData.progress?.phishingAwareness
                  ? "✓ Completed"
                  : "Incomplete"}
              </span>
            </li>
          </ul>
        </div>

        {/* Button to navigate back to the home page */}
        <button
          // Use the navigate function from React Router to change the route
          onClick={() => navigate("/home")}
          className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>

      {/* Card container for Badges section */}
      <div className="bg-white/5 border mt-3 border-white/10 backdrop-blur-md rounded-2xl pb-8 pt-3 shadow-lg max-w-md w-full">
        {/* Badges section title */}
        <h1 className="flex justify-center mb-4 font-extrabold text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-3xl font-bold text-center">
            Badges
          </span>
        </h1>
        {/* List of badges earned based on course completion */}
        <ul className="space-y-3">
          {/* Password Security Badge Item */}
          <li className="flex justify-between items-center px-4">
            <span className="text-center">Password Security</span>
            {/* Display different badge images based on completion */}
            <img
              src={
                profileData.progress?.passwordSecurity
                  ? "/password.png" // Completed badge image
                  : "/diamond.png" // Placeholder/incomplete badge image
              }
              alt="Password Security Badge"
              className="w-18 h-20" // Note: Tailwind usually uses w-X h-X format, e.g., w-20 h-20. "w-18" might not be standard unless custom defined.
            />
          </li>
          {/* Physical Security Badge Item */}
          <li className="flex justify-between items-center px-4">
            <span className="text-center">Physical Security</span>
            <img
              src={
                profileData.progress?.physicalSecurity
                  ? "/physical.png"
                  : "/diamond.png"
              }
              alt="Physical Security Badge"
              className="w-18 h-20"
            />
          </li>
          {/* Phishing Awareness Badge Item */}
          <li className="flex justify-between items-center px-4">
            <span className="text-center">Phishing Awareness</span>
            <img
              src={
                profileData.progress?.phishingAwareness
                  ? "/phishing.png"
                  : "/diamond.png"
              }
              alt="Phishing Awareness Badge"
              className="w-18 h-20"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default ProfilePage;