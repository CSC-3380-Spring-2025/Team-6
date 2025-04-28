import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTwo: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-base-100 min-h-screen w-full shadow-xl">
      <figure className="mt-10">
        <iframe
          width="800vh"
          height="500vh"
          src="https://www.youtube.com/embed/YtT8q2mUM9c?si=16H9Yr9gMtr6Cbfm"
        ></iframe>
      </figure>
      <div className="card-body text-center flex-none">
        <h2 className="card-title justify-center">Physical Security Video</h2>
        <p>
          Learn how Physical Security improves Cybersecurity
        </p>
        <button className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg mt-4 mx-auto"
        onClick={() => navigate("/courselisting2")}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default VideoTwo;
