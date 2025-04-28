import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create-blogs.css";

const CreateBlogs: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle = { title, content };
    const savedArticles = localStorage.getItem("userArticles");
    const articles = savedArticles ? JSON.parse(savedArticles) : [];
    articles.push(newArticle);
    localStorage.setItem("userArticles", JSON.stringify(articles));
    setTitle("");
    setContent("");
    navigate("/user-blogs");
  };

  return (
    <div className="relative flex flex-col h-screen">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid/Dot Patterning */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>

          {/* Gradient Animation, Color Transitions */}
          <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white/90 shadow-md rounded-lg p-6">
          <button
            className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
            onClick={() => navigate("/user-blogs")}
          >
            ← Back to My Articles
          </button>
          <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title..."
              required
              className="p-2 text-lg border rounded-lg border-gray-300"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your article here..."
              required
              rows={10}
              className="p-2 text-lg border rounded-lg border-gray-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
            >
              Submit Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;
