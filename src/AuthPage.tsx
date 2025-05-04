import React, { useState, useEffect } from "react";
// Import Firebase authentication instance
import { auth } from "./firebase";
// Import navigation hook from React Router
import { useNavigate } from "react-router-dom";
// Import Firestore functions for writing data (setDoc) and referencing documents (doc)
import { doc, setDoc } from "firebase/firestore";
// Import Firestore database instance
import { db } from "./firebase";
// Import specific Firebase Authentication functions needed for various auth methods
import {
  createUserWithEmailAndPassword, // For signing up with email/password
  signInWithEmailAndPassword,   // For logging in with email/password
  signOut,                      // For logging out
  onAuthStateChanged,           // Listener for authentication state changes
  GoogleAuthProvider,           // Provider for Google Sign-In
  signInWithPopup,              // Method for Sign-In via popup (used for Google)
  sendPasswordResetEmail,       // For sending password reset emails
} from "firebase/auth";

/**
 * AuthPage Component
 *
 * Handles user authentication including Sign Up, Login (Email/Password & Google),
 * Password Reset, and listens for authentication state changes.
 * Creates a user profile document in Firestore upon new user registration.
 */
const AuthPage: React.FC = () => {
  // State for storing user input: email
  const [email, setEmail] = useState("");
  // State for storing user input: password
  const [password, setPassword] = useState("");
  // State to toggle between Login (true) and Sign Up (false) modes
  const [isLogin, setIsLogin] = useState(true);
  // State to store the currently authenticated Firebase user object (or null)
  const [user, setUser] = useState<any>(null); // Consider using 'User | null' type from 'firebase/auth'
  // State to provide feedback message after password reset attempt
  const [resetSent, setResetSent] = useState("");
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Effect hook to set up an observer for Firebase authentication state changes
  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the user state whenever the auth state changes (login/logout)
      setUser(currentUser);
      // NOTE: You might want to redirect here if a user is detected,
      // e.g., if (currentUser) navigate('/home'); unless you specifically want
      // logged-in users to be able to see the AuthPage.
    });
    // Cleanup function: Unsubscribe the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  /**
   * Handles form submission for both Login and Sign Up.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser form submission
    setResetSent(""); // Clear any previous password reset messages
    try {
      if (isLogin) {
        // --- Login Mode ---
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
      } else {
        // --- Sign Up Mode ---
        // Create the user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        console.log("User created successfully:", newUser.uid);

        // Create a corresponding user document in Firestore 'users' collection
        await setDoc(doc(db, "users", newUser.uid), {
          email: newUser.email || "", // Store user's email
          // Create a default display name from the email prefix, or use "User" as fallback
          displayName: newUser.email?.split("@")[0] || "User",
          // Initialize course progress structure for the new user
          progress: {
            passwordSecurity: false,
            physicalSecurity: false,
            phishingAwareness: false,
          },
        });
        console.log("Firestore document created for new user:", newUser.uid);
      }
      // Navigate to the home page upon successful login or sign up
      navigate("/home");
    } catch (error: any) { // Catch specific errors if needed
      console.error("Error during authentication:", error);
      // TODO: Provide user-friendly error feedback (e.g., update state with error message)
      // Example: setAuthError(error.message);
    }
  };

  /**
   * Handles Sign-In attempt using Google OAuth Popup.
   */
  const handleGoogleSignIn = async () => {
    setResetSent(""); // Clear any previous password reset messages
    const provider = new GoogleAuthProvider(); // Create a Google Auth provider instance
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful:", result.user.uid);
      // NOTE: Consider checking if this Google user is new and creating a Firestore doc
      // similar to the email/password sign-up process if needed.
      // Example: Check if doc(db, "users", result.user.uid) exists, if not, create it.

      // Navigate to the main application page after successful Google Sign-In
      navigate("/home"); // Changed from "/" to "/home" to match email/password flow
    } catch (error: any) {
      console.error("Error during Google Sign-In:", error);
      // Handle specific errors like 'auth/popup-closed-by-user'
      // TODO: Provide user-friendly error feedback
    }
  };

  /**
   * Handles user logout.
   * NOTE: This function is defined but not currently attached to any UI element in this component.
   */
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      // Optional: Navigate to login or landing page after logout
      // navigate('/login');
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  /**
   * Handles sending a password reset email to the entered email address.
   */
  const handleResetPassword = async () => {
    // Check if email field is empty
    if (!email) {
      setResetSent("Please enter your email above to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      // Provide success feedback to the user
      setResetSent("Password reset email sent! Check your inbox (and spam folder).");
    } catch (error: any) {
      console.error("Error sending reset email:", error);
      // Provide failure feedback to the user
      setResetSent(`Failed to send reset email: ${error.message}. Please try again.`);
    }
  };

  // --- Component Rendering ---
  return (
    // Main container with background and centering
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements (gradient, pattern, animated blobs) - same as LandingPage */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Authentication Form Container */}
      <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 w-full max-w-md text-center">
        {/* Dynamic Title based on isLogin state */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required // HTML5 form validation
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required // HTML5 form validation
          />
          {/* Submit button text changes based on isLogin state */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-md font-bold hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Password Reset Section - Only shown in Login mode */}
        {isLogin && (
          <>
            <button
              onClick={handleResetPassword} // Calls the password reset handler
              className="w-full mt-3 text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Forgot your password?
            </button>
            {/* Display feedback message after reset attempt */}
            {resetSent && <p className="mt-2 text-sm text-green-400">{resetSent}</p>}
          </>
        )}

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn} // Calls the Google Sign-In handler
          className="w-full p-3 mt-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md font-bold hover:opacity-90 transition"
        >
          Continue with Google
        </button>

        {/* Toggle Button between Login and Sign Up modes */}
        <button
          onClick={() => {
            setIsLogin(!isLogin); // Toggles the isLogin state
            setResetSent(""); // Clear reset message when toggling
          }}
          className="w-full mt-4 text-sm text-white/80 hover:text-white transition"
        >
          {/* Text dynamically changes based on isLogin state */}
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </button>

        {/* Optional: Display Auth Error Messages Here */}
        {/* {authError && <p className="mt-2 text-sm text-red-500">{authError}</p>} */}

      </div>
    </div>
  );
};

export default AuthPage;