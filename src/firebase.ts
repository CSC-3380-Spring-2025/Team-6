import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2u-o-qz-_JE_pUUU-spCNzDnpwIkiLEQ",
    authDomain: "cyberdojo1.firebaseapp.com",
    projectId: "cyberdojo1",
    storageBucket: "cyberdojo1.firebasestorage.app",
    messagingSenderId: "58450649524",
    appId: "1:58450649524:web:6c8681c0514aae7aed52e1",
    measurementId: "G-2MF7ZM6MXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };