import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [displayName, setDisplayName] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.settings) {
          setTheme(data.settings.theme || "light");
          setLanguage(data.settings.language || "en");
          setDisplayName(data.settings.displayName || "");
          setEmailNotif(data.settings.emailNotif ?? true);
          setDarkMode(data.settings.darkMode ?? false);
          setTwoFactor(data.settings.twoFactor ?? false);
        }
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    if (!displayName.trim()) {
      setSavedMessage("Display name is required.");
      return;
    }

    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(
        docRef,
        {
          settings: {
            theme,
            language,
            displayName,
            emailNotif,
            darkMode,
            twoFactor,
          },
        },
        { merge: true }
      );
      setSavedMessage("Settings successfully updated!");
      setTimeout(() => setSavedMessage(""), 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading settings...
      </div>
    );
  }

  if (!auth.currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        You must be logged in to view this page.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 flex justify-center items-start">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>

        {/* Display Name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Theme */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Theme</label>
          <select
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Language */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Language</label>
          <select
            className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Email Notifications */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-semibold">Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={(e) => setEmailNotif(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
        </div>

        {/* Dark Mode */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-semibold">Enable Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            className="form-checkbox h-5 w-5 text-purple-500"
          />
        </div>

        {/* Two-Factor Authentication */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-semibold">Two-Factor Authentication</span>
          <input
            type="checkbox"
            checked={twoFactor}
            onChange={(e) => setTwoFactor(e.target.checked)}
            className="form-checkbox h-5 w-5 text-green-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition"
            onClick={handleSave}
          >
            Save Settings
          </button>

          <button
            className="flex-1 py-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition"
            onClick={() => navigate("/home")}
          >
            Exit to Home
          </button>
        </div>

        {savedMessage && <p className="mt-4 text-sm text-green-400 text-center">{savedMessage}</p>}
      </div>
    </div>
  );
};

export default SettingsPage;