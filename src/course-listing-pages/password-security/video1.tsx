import React from "react";
import { useNavigate } from "react-router-dom";

const VideoOne: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-black min-h-screen w-full shadow-xl">
      <div className="bg-gray-700 rounded-lg justify-center mx-auto max-w-4xl">      
        <figure className="m-10">
          <iframe className="w-[720px] h-[450px] lg:w-[800px] lg:h-[500px] flex-none"
            src="https://www.youtube.com/embed/xUp5S0nBnfc?si=KY0udN5Fz2wBWZ9x"
          ></iframe>
        </figure>
      </div>
      <div className="max-w-4xl mt-10 mx-auto lg:m-auto rounded-lg items-center justify-center card-body text-center flex-none bg-base-100">
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