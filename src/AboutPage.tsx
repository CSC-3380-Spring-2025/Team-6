"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, Shield, Users, User } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrollPosition > 50
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center h-20 px-4">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
            {isMenuOpen && (
              <ul className="absolute left-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resource-library"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user-blogs"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="cursor-pointer" onClick={scrollToTop}>
            <div className="w-auto h-10 relative">
              <img
                src="CyberLogo.png"
                alt="Cyber Logo"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <User className="h-6 w-6 text-white" />
            </button>
            {isProfileOpen && (
              <ul className="absolute right-0 mt-3 w-56 p-2 shadow-xl bg-black/90 backdrop-blur-md rounded-xl z-30 border border-white/10">
                <li>
                  <a
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/settings")}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    onClick={async () => {
                      try {
                        await signOut(auth);
                        navigate("/");
                      } catch (error) {
                        console.error("Logout failed:", error);
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Background wrapper that spans the entire page */}
      <div className="fixed inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/*Grid/Dot Patterning*/}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>

          {/* Gradient Animation, Color Transitions*/}
          <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="z-10 mt-36 relative flex flex-col">
        <section className="hero py-20">
          <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl text-center mx-auto">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold">About CyberDojo</h1>
              <p className="py-6 text-lg">
                CyberDojo is a platform designed to enhance your cybersecurity
                knowledge and skills through interactive learning experiences.
                Our mission is to empower individuals and organizations with the
                tools and knowledge needed to navigate the ever-evolving
                landscape of cybersecurity threats.
              </p>
              <button className="btn btn-primary" onClick={() => navigate("/")}>Our Courses</button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4x1 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <div className="divider max-w-xs mx-auto"></div>
              <p className="text-xl">
              To transform mandatory corporate cybersecurity training into an interactive adventure—combining the playful rewards of Duolingo with the practical labs of TryHackMe—so that every user gains confidence and competence in basic online-safety practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="card-body items-center text-center">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="card-title">Protections</h3>
                  <p>
                    The wide array of threats that can attack modern day systems are all covered on our site.
                  </p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="card-body items-center text-center">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="card-title">Community</h3>
                  <p>
                    Working together and developing knowledge is an important pillar of our website.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
