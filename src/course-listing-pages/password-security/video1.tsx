import React from "react";
import { useNavigate } from "react-router-dom";

const VideoOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/xUp5S0nBnfc?si=KY0udN5Fz2wBWZ9x"
        ></iframe>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Password Security Video</h2>
        <p>
          Learn the general tips to make a strong password and how to save your accounts.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-error p-3"
          onClick={() => navigate("/courselisting1")}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoOne;
