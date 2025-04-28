import React from "react";
import { useNavigate } from "react-router-dom";

const VideoOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-base-100 min-h-screen w-full shadow-xl">
      <figure className="mt-10">
        <iframe
          width="800vh"
          height="500vh"
          src="https://www.youtube.com/embed/xUp5S0nBnfc?si=KY0udN5Fz2wBWZ9x"
        ></iframe>
      </figure>
      <div className="card-body text-center flex-none">
        <h2 className="card-title justify-center">Password Security Video</h2>
        <p>
          Learn the general tips to make a strong password and how to save your accounts.
        </p>
        <button className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg mt-4 mx-auto"
        onClick={() => navigate("/courselisting1")}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default VideoOne;
