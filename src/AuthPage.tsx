import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [resetSent, setResetSent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        await setDoc(doc(db, "users", newUser.uid), {
          email: newUser.email || "",
          displayName: newUser.email?.split("@")[0] || "User",
          progress: {
            passwordSecurity: false,
            physicalSecurity: false,
            phishingAwareness: false,
          },
        });
      }
      navigate("/home");
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      navigate("/");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setResetSent("Please enter your email above to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending reset email:", error);
      setResetSent("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient + Pattern background */}
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

      <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-md font-bold hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {isLogin && (
          <>
            <button
              onClick={handleResetPassword}
              className="w-full mt-3 text-blue-400 hover:text-blue-300 transition"
            >
              Forgot your password?
            </button>
            {resetSent && <p className="mt-2 text-sm text-green-400">{resetSent}</p>}
          </>
        )}

        <button
          onClick={handleGoogleSignIn}
          className="w-full p-3 mt-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md font-bold hover:opacity-90 transition"
        >
          Continue with Google
        </button>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="w-full mt-4 text-white/80 hover:text-white transition"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;