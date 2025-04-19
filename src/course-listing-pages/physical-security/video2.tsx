import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTwo: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/YtT8q2mUM9c?si=16H9Yr9gMtr6Cbfm"
        ></iframe>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Physical Security Video</h2>
        <p>
          Learn how Physical Security improves Cybersecurity
        </p>
        <div className="card-actions justify-end">
        <button className="btn btn-outline btn-error p-3"
          onClick={() => navigate("/courselisting2")}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
