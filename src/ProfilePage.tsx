import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) return;

    const docRef = doc(db, "users", auth.currentUser.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setProfileData(docSnap.data());
      }
    });

    return () => unsubscribe();
  }, []);

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0e0e1f] to-black text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Welcome,{" "}
          <span className="text-rose-400">{profileData.displayName}</span>
        </h1>
        <p className="text-center text-white/80 mb-8">
          Email: {profileData.email}
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-white/20 pb-2 mb-4 text-white">
            Course Progress
          </h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>Password Security</span>
              <span
                className={`font-bold ${
                  profileData.progress?.passwordSecurity
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {profileData.progress?.passwordSecurity
                  ? "✓ Completed"
                  : "Incomplete"}
              </span>
            </li>
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

        <button
          onClick={() => navigate("/home")}
          className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
      <div className="bg-white/5 border mt-3 border-white/10 backdrop-blur-md rounded-2xl pb-8 pt-3 shadow-lg max-w-md w-full">
        <h1 className="flex justify-center mb-2 font-extrabold text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Cybersecurity
          </span>
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Badges
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ProfilePage;
