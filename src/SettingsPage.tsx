import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const SettingsPage: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

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
          }
        }
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, {
        settings: {
          theme,
          language,
        },
      });
      alert("Settings updated!");
    }
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Theme Selection */}
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

      {/* Language Selection */}
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

      <button
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={handleSave}
      >
        Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;
