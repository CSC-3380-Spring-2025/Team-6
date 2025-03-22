import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // Handle email/password form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Sign in with email/password
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully!");
      } else {
        // Sign up with email/password
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully!");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("Google Sign-In successful!", result.user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // If user is logged in, show welcome message and logout button
  if (user) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="welcome-message">Welcome, {user.email}!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  // If no user is logged in, show the login/signup form and Google Sign-In button
  return (
    <div className="main-div">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              required
            />
            <button type="submit" className="auth-button">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="google-sign-in-button"
          >
            Sign in with Google
          </button>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="auth-switch-button"
          >
            Switch to {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
