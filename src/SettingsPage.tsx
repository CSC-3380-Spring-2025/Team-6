import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const SettingsPage: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [displayName, setDisplayName] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [loading, setLoading] = useState(true);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.settings) {
            setTheme(data.settings.theme || "light");
            setLanguage(data.settings.language || "en");
            setDisplayName(data.settings.displayName || "");
            setEmailNotif(data.settings.emailNotif ?? true);
          }
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
      await updateDoc(docRef, {
        settings: {
          theme,
          language,
          displayName,
          emailNotif,
        },
      });
      setSavedMessage("Settings successfully updated!");
      setTimeout(() => setSavedMessage(""), 3000);
    }
  };

  if (loading) {
    return <p className="text-white p-6">Loading settings...</p>;
  }

  return (
    <div className="text-white p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Display Name */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full max-w-xs border border-gray-300 rounded p-2 text-black"
        />
      </div>

      {/* Theme */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Theme</label>
        <select
          className="w-full max-w-xs border border-gray-300 rounded p-2 text-black"
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
          className="w-full max-w-xs border border-gray-300 rounded p-2 text-black"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      {/* Notification Toggle */}
      <div className="mb-6">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={(e) => setEmailNotif(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="font-semibold">Receive Email Notifications</span>
        </label>
      </div>

      <button
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={handleSave}
      >
        Save Settings
      </button>

      {savedMessage && (
        <p className="mt-4 text-sm text-green-400">{savedMessage}</p>
      )}
    </div>
  );
};

export default SettingsPage;
