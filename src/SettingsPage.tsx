import React, { useEffect, useState } from "react";
// Import Firebase auth and Firestore database instances
import { auth, db } from "./firebase";
// Import Firestore functions for document operations (getDoc for reading, setDoc for writing)
import { doc, getDoc, setDoc } from "firebase/firestore";
// Import navigation hook from React Router
import { useNavigate } from "react-router-dom";

/**
 * SettingsPage Component
 *
 * Allows logged-in users to view and update their application settings,
 * such as display name, theme, language, and notification preferences.
 * Settings are fetched from and saved to the user's document in Firestore.
 */
const SettingsPage: React.FC = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // --- State Variables for Settings ---
  // Holds the selected theme preference (e.g., 'light', 'dark')
  const [theme, setTheme] = useState("light");
  // Holds the selected language preference (e.g., 'en', 'es')
  const [language, setLanguage] = useState("en");
  // Holds the user's preferred display name
  const [displayName, setDisplayName] = useState("");
  // Holds the email notification preference (boolean)
  const [emailNotif, setEmailNotif] = useState(true);
  // Holds the dark mode preference (boolean) - Note: might overlap with 'theme' state?
  const [darkMode, setDarkMode] = useState(false); // Consider if 'theme' state makes this redundant
  // Holds the two-factor authentication preference (boolean) - Note: UI toggle only, actual 2FA setup would be more complex
  const [twoFactor, setTwoFactor] = useState(false);

  // --- State Variables for Component Logic ---
  // Indicates if settings are currently being fetched from Firestore
  const [loading, setLoading] = useState(true);
  // Stores feedback messages for the user (e.g., success/error on save)
  const [savedMessage, setSavedMessage] = useState("");

  // Effect hook to fetch user settings when the component mounts
  useEffect(() => {
    /**
     * Fetches settings from the current user's Firestore document.
     */
    const fetchSettings = async () => {
      // Ensure a user is logged in before proceeding
      if (!auth.currentUser) {
        console.warn("SettingsPage: No user logged in.");
        setLoading(false); // Stop loading indicator
        return; // Exit if no user
      }

      try {
        // Create a reference to the user's document in the 'users' collection
        const docRef = doc(db, "users", auth.currentUser.uid);
        // Attempt to fetch the document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // If the document exists, get its data
          const data = docSnap.data();
          // Check if there's a 'settings' field within the document data
          if (data.settings) {
            // Update component state with fetched settings, using defaults if a setting is missing
            setTheme(data.settings.theme || "light");
            setLanguage(data.settings.language || "en");
            setDisplayName(data.settings.displayName || data.displayName || ""); // Fallback to root displayName if settings.displayName doesn't exist
            setEmailNotif(data.settings.emailNotif ?? true); // Use nullish coalescing for boolean defaults
            setDarkMode(data.settings.darkMode ?? false);
            setTwoFactor(data.settings.twoFactor ?? false);
          } else {
            // If 'settings' field doesn't exist, maybe populate displayName from root if available
            setDisplayName(data.displayName || "");
            // Keep other settings as default
          }
        } else {
          // Handle case where the user document might not exist (though unlikely if they are logged in)
          console.warn("SettingsPage: User document not found for uid:", auth.currentUser.uid);
        }
      } catch (error) {
        console.error("SettingsPage: Error fetching settings:", error);
        // Optionally set an error message for the user
      } finally {
        // Ensure loading indicator is turned off regardless of success or failure
        setLoading(false);
      }
    };

    fetchSettings(); // Execute the fetch function

  }, []); // Empty dependency array ensures this runs only once on mount

  /**
   * Saves the current settings state back to the user's Firestore document.
   */
  const handleSave = async () => {
    // Basic validation: Ensure display name is not empty
    if (!displayName.trim()) {
      setSavedMessage("Display name cannot be empty.");
      // Clear the message after a delay
      setTimeout(() => setSavedMessage(""), 3000);
      return; // Stop the save process
    }

    // Ensure a user is logged in
    if (auth.currentUser) {
      try {
        // Create a reference to the user's document
        const docRef = doc(db, "users", auth.currentUser.uid);
        // Prepare the settings object to be saved
        const settingsData = {
          theme,
          language,
          displayName,
          emailNotif,
          darkMode,
          twoFactor,
        };

        // Update the document using setDoc with merge: true
        // This ensures only the 'settings' field (and potentially root displayName if we modify) is updated,
        // preserving other fields like 'email' or 'progress'.
        await setDoc(
          docRef,
          {
            settings: settingsData,
            displayName: displayName, // Also update the root displayName if desired
          },
          { merge: true } // Crucial option to merge data, not overwrite the whole doc
        );

        // Provide success feedback
        setSavedMessage("Settings successfully updated!");
        // Clear the success message after 3 seconds
        setTimeout(() => setSavedMessage(""), 3000);

      } catch (error) {
        console.error("SettingsPage: Error saving settings:", error);
        setSavedMessage("Failed to save settings. Please try again.");
        // Clear the error message after 3 seconds
        setTimeout(() => setSavedMessage(""), 3000);
      }
    } else {
      console.warn("SettingsPage: No user logged in, cannot save settings.");
      setSavedMessage("You must be logged in to save settings.");
      // Clear the message after a delay
      setTimeout(() => setSavedMessage(""), 3000);
    }
  };

  // --- Conditional Rendering based on Loading/Auth State ---

  // Display loading indicator while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading settings...
      </div>
    );
  }

  // Display message if user is not logged in after loading check
  if (!auth.currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl px-4 text-center">
        You must be logged in to view or modify settings.
      </div>
    );
  }

  // --- Main Settings Form Rendering ---
  return (
    // Page container with background gradient
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 flex justify-center items-start">
      {/* Settings Card */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Settings</h1>

        {/* --- Form Fields --- */}

        {/* Display Name Input */}
        <div className="mb-6">
          <label htmlFor="displayName" className="block mb-2 font-semibold">Display Name</label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required // Add HTML5 validation if desired
          />
        </div>

        {/* Theme Selection */}
        <div className="mb-6">
          <label htmlFor="theme" className="block mb-2 font-semibold">Theme</label>
          <select
            id="theme"
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none" // Added appearance-none for custom styling
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            {/* Add more themes if needed */}
          </select>
          {/* Consider adding a custom dropdown arrow if using appearance-none */}
        </div>

        {/* Language Selection */}
        <div className="mb-6">
          <label htmlFor="language" className="block mb-2 font-semibold">Language</label>
          <select
            id="language"
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more languages if needed */}
          </select>
        </div>

        {/* Email Notifications Toggle */}
        <div className="mb-6 flex items-center justify-between p-3 bg-white/10 border border-white/20 rounded-md">
          <label htmlFor="emailNotif" className="font-semibold cursor-pointer">Email Notifications</label>
          <input
            id="emailNotif"
            type="checkbox"
            checked={emailNotif}
            onChange={(e) => setEmailNotif(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-500 rounded cursor-pointer focus:ring-blue-400" // Added rounded and focus style
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="mb-6 flex items-center justify-between p-3 bg-white/10 border border-white/20 rounded-md">
          <label htmlFor="darkMode" className="font-semibold cursor-pointer">Enable Dark Mode</label>
          {/* Note: This might be redundant if 'theme' covers dark mode. */}
          {/* If kept, ensure its logic aligns with the theme setting. */}
          <input
            id="darkMode"
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            className="form-checkbox h-5 w-5 text-purple-500 rounded cursor-pointer focus:ring-purple-400"
          />
        </div>

        {/* Two-Factor Authentication Toggle */}
        <div className="mb-6 flex items-center justify-between p-3 bg-white/10 border border-white/20 rounded-md">
          <label htmlFor="twoFactor" className="font-semibold cursor-pointer">Two-Factor Authentication</label>
          {/* Note: This is likely just a UI preference toggle. Actual 2FA implementation needs backend logic. */}
          <input
            id="twoFactor"
            type="checkbox"
            checked={twoFactor}
            onChange={(e) => setTwoFactor(e.target.checked)}
            className="form-checkbox h-5 w-5 text-green-500 rounded cursor-pointer focus:ring-green-400"
          />
        </div>

        {/* --- Action Buttons --- */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8"> {/* Increased top margin */}
          {/* Save Settings Button */}
          <button
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition duration-300"
            onClick={handleSave} // Calls the save function
          >
            Save Settings
          </button>

          {/* Exit Button */}
          <button
            className="flex-1 py-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => navigate("/home")} // Navigates back to home page
          >
            Exit to Home
          </button>
        </div>

        {/* Feedback Message Area - Conditionally displayed */}
        {savedMessage && (
          <p className={`mt-4 text-sm text-center ${savedMessage.includes("Failed") || savedMessage.includes("cannot be empty") ? 'text-red-400' : 'text-green-400'}`}>
            {savedMessage}
          </p>
        )}
      </div> {/* End Settings Card */}
    </div> // End Page Container
  );
};

export default SettingsPage;