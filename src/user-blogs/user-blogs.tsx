import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Article {
  title: string;
  content: string;
}

const UserBlogs: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const savedArticles = localStorage.getItem("userArticles");
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  const deleteArticle = (index: number) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
    localStorage.setItem("userArticles", JSON.stringify(updatedArticles));
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
          {/* Back to Home Button */}
          <button
            className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
          <button
            className="mb-4 px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
            onClick={() => navigate("/create-blogs")}
          >
            + Create New Article
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Articles</h2>
          <ul className="space-y-4">
            {articles.map((article, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 border rounded hover:bg-gray-100 transition"
              >
                <div
                  onClick={() => setSelectedArticle(article)}
                  className="cursor-pointer flex-1"
                >
                  <strong className="text-lg">{article.title}</strong>
                </div>
                <button
                  className="ml-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-xl font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40 flex items-center justify-center gap-2"
                  onClick={() => deleteArticle(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {selectedArticle && (
            <div className="mt-6 p-6 bg-gray-50 border rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{selectedArticle.title}</h3>
              <p className="text-gray-700 mb-4">{selectedArticle.content}</p>
              <button
                className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
                onClick={() => setSelectedArticle(null)}
              >
                ← Back to List
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBlogs;
