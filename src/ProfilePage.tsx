import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, []);

  const handleSettingsUpdate = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, {
        settings: { darkMode: true },
      });
      alert("Settings updated!");
    }
  };

  if (!profileData) return <p className="text-white p-4">Loading profile...</p>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-2">Welcome, {profileData.displayName}</h1>
      <p>Email: {profileData.email}</p>
      <pre className="bg-gray-800 p-2 rounded mt-4">
        Progress: {JSON.stringify(profileData.progress, null, 2)}
      </pre>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
        onClick={handleSettingsUpdate}
      >
        Update Settings
      </button>
    </div>
  );
};

export default ProfilePage;
