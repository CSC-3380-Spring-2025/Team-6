// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgo_-c8C9ggEPm5U_fFjOgDxw9zY5n5jE",
  authDomain: "cyberdojo-c78ce.firebaseapp.com",
  projectId: "cyberdojo-c78ce",
  storageBucket: "cyberdojo-c78ce.firebasestorage.app",
  messagingSenderId: "234443882707",
  appId: "1:234443882707:web:031ee55ad618f171405426",
  measurementId: "G-4Z4Z4XCHHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
