import React, { useEffect, useState } from "react";
// Import Firebase auth and Firestore database instances
import { auth, db } from "./firebase";
// Import Firestore functions for document operations
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
  const navigate = useNavigate();

  // --- State Variables for Settings ---
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [displayName, setDisplayName] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  // --- State Variables for Component Logic ---
  const [loading, setLoading] = useState(true);
  const [savedMessage, setSavedMessage] = useState("");

  // Fetch settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      if (!auth.currentUser) {
        console.warn("SettingsPage: No user logged in.");
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.settings) {
            setTheme(data.settings.theme || "light");
            setLanguage(data.settings.language || "en");
            setDisplayName(data.settings.displayName || data.displayName || "");
            setEmailNotif(data.settings.emailNotif ?? true);
            setDarkMode(data.settings.darkMode ?? false);
            setTwoFactor(data.settings.twoFactor ?? false);
          } else {
            setDisplayName(data.displayName || "");
          }
        } else {
          console.warn(
            "SettingsPage: User document not found for uid:",
            auth.currentUser.uid
          );
        }
      } catch (error) {
        console.error("SettingsPage: Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  // Save settings handler
  const handleSave = async () => {
    if (!displayName.trim()) {
      setSavedMessage("Display name cannot be empty.");
      setTimeout(() => setSavedMessage(""), 3000);
      return;
    }

    if (auth.currentUser) {
      try {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const settingsData = {
          theme,
          language,
          displayName,
          emailNotif,
          darkMode,
          twoFactor,
        };

        await setDoc(
          docRef,
          { settings: settingsData, displayName },
          { merge: true }
        );

        setSavedMessage("Settings successfully updated!");
        setTimeout(() => setSavedMessage(""), 3000);
      } catch (error) {
        console.error("SettingsPage: Error saving settings:", error);
        setSavedMessage("Failed to save settings. Please try again.");
        setTimeout(() => setSavedMessage(""), 3000);
      }
    } else {
      console.warn("SettingsPage: No user logged in, cannot save settings.");
      setSavedMessage("You must be logged in to save settings.");
      setTimeout(() => setSavedMessage(""), 3000);
    }
  };

  // Loading and auth checks
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading settings...
      </div>
    );
  }

  if (!auth.currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl px-4 text-center">
        You must be logged in to view or modify settings.
      </div>
    );
  }

  // Main form
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 flex justify-center items-start">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Settings
        </h1>

        {/* Display Name */}
        <div className="mb-6">
          <label htmlFor="displayName" className="block mb-2 font-semibold">
            Display Name
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Theme */}
        <div className="mb-6">
          <label htmlFor="theme" className="block mb-2 font-semibold">
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Language */}
        <div className="mb-6">
          <label htmlFor="language" className="block mb-2 font-semibold">
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Email Notifications */}
        <div className="mb-6 flex items-center justify-between p-3 bg-white/10 border border-white/20 rounded-md">
          <label htmlFor="emailNotif" className="font-semibold cursor-pointer">
            Email Notifications
          </label>
          <input
            id="emailNotif"
            type="checkbox"
            checked={emailNotif}
            onChange={(e) => setEmailNotif(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-500 rounded cursor-pointer focus:ring-blue-400"
          />
        </div>

        {/* Dark Mode */}
        <div className="mb-6 flex items-center justify-between p-3 bg-white/10 border border-white/20 rounded-md">
          <label htmlFor="darkMode" className="font-semibold cursor-pointer">
            Enable Dark Mode
          </label>
          <input
            id="darkMode"
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            className="form-checkbox h-5 w-5 text-purple-500 rounded cursor-pointer focus:ring-purple-400"
          />
        </div>

        {/* Two-Factor Auth */}
        <div className="mb-6 flex items-center justify-between p-3 bg-white/10 border border-white/20 rounded-md">
          <label htmlFor="twoFactor" className="font-semibold cursor-pointer">
            Two-Factor Authentication
          </label>
          <input
            id="twoFactor"
            type="checkbox"
            checked={twoFactor}
            onChange={(e) => setTwoFactor(e.target.checked)}
            className="form-checkbox h-5 w-5 text-green-500 rounded cursor-pointer focus:ring-green-400"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={handleSave}
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition duration-300"
          >
            Save Settings
          </button>
          <button
            onClick={() => navigate("/home")}
            className="flex-1 py-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition duration-300"
          >
            Exit to Home
          </button>
        </div>

        {/* Feedback */}
        {savedMessage && (
          <p
            className={`mt-4 text-sm text-center ${
              savedMessage.includes("Failed") ||
              savedMessage.includes("cannot be empty")
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {savedMessage}
          </p>
        )}
      </div> {/* End Settings Card */}
    </div> 
  );
};

export default SettingsPage;
