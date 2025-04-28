import React from "react";
import { useNavigate } from "react-router-dom";

const VideoThree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-base-100 min-h-screen w-full shadow-xl">
      <div className="bg-gray-700 rounded-lg justify-center mx-auto max-w-4xl">      
        <figure className="m-10">
          <iframe
            width="800vh"
            height="500vh"
            src="https://www.youtube.com/embed/v7VTJhkJUUY?si=-KhGz9suIBaZUEHG"
          ></iframe>
        </figure>
      </div>
      <div className="card-body text-center flex-none">
        <h2 className="card-title justify-center">Social Engineering Video</h2>
        <p>
          Learn how people can be socially engineered into giving away important information.
        </p>
        <button className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg mt-4 mx-auto"
        onClick={() => navigate("/courselisting3")}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default VideoThree;
