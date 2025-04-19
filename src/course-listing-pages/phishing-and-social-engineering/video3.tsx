import React from "react";
import { useNavigate } from "react-router-dom";

const VideoThree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/v7VTJhkJUUY?si=-KhGz9suIBaZUEHG"
        ></iframe>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Social Engineering Video</h2>
        <p>
          Learn how people can be socially engineered into giving away important information.
        </p>
        <div className="card-actions justify-end">
        <button className="btn btn-outline btn-error p-3"
          onClick={() => navigate("/courselisting3")}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoThree;
