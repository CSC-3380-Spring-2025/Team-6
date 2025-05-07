"use client";

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc as firestoreDoc,
} from "firebase/firestore";

interface Article {
  id: string;
  title: string;
  content: string;
  authorId?: string;
  createdAt: any;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch all published articles
  const fetchArticles = async () => {
    const q = query(
      collection(db, "articles"),
      where("published", "==", true),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    const list = snap.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Article, "id">),
    }));
    setArticles(list);
  };

  // Publish a new article
  const publishArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      await addDoc(collection(db, "articles"), {
        title: title.trim(),
        content: content.trim(),
        authorId: auth.currentUser?.uid || null,
        createdAt: serverTimestamp(),
        published: true,
      });
      setTitle("");
      setContent("");
      fetchArticles();
    } catch (err) {
      console.error("Publish failed:", err);
    }
  };

  // Delete an article (only if authored by current user)
  const deleteArticle = async (id: string) => {
    if (!auth.currentUser) return;
    try {
      await deleteDoc(firestoreDoc(db, "articles", id));
      // Optimistically update UI
      setArticles(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Effects: scroll listener & initial fetch
  useEffect(() => {
    fetchArticles();
    const onScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-black">
      {/* Navbar */}
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollPosition > 50
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center h-20 px-4">
          <button
            onClick={() => setIsMenuOpen(o => !o)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
          {isMenuOpen && (
            <ul className="absolute left-4 top-20 w-48 p-2 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          )}

          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src="CyberLogo.png" alt="Logo" className="h-10" />
          </div>

          <button
            onClick={() => setIsProfileOpen(o => !o)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <User className="h-6 w-6 text-white" />
          </button>
          {isProfileOpen && (
            <ul className="absolute right-4 top-20 w-48 p-2 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
              <li>
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/settings")}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Settings
                </button>
              </li>
              <li>
                <button
                  onClick={async () => {
                    await signOut(auth);
                    navigate("/");
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Gradient + Pattern Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 max-w-3xl">
        {/* Create Article Form */}
        <form
          onSubmit={publishArticle}
          className="mb-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Create New Article</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full mb-4 p-3 bg-white/10 border border-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={6}
            className="w-full mb-4 p-3 bg-white/10 border border-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl"
          >
            Publish
          </button>
        </form>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map(a => (
            <div
              key={a.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{a.title}</h3>
              <p className="text-white/80 mb-4 whitespace-pre-wrap">{a.content}</p>
              {/* Show Delete only for posts authored by me */}
              {auth.currentUser?.uid === a.authorId && (
                <button
                  onClick={() => deleteArticle(a.id)}
                  className="absolute top-4 right-4 text-sm px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-md transition"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          {articles.length === 0 && (
            <p className="text-center text-white/70">No articles published yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
