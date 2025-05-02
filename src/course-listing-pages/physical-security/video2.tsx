import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTwo: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-black min-h-screen w-full shadow-xl">
      <div className="bg-gray-700 rounded-lg justify-center mx-auto max-w-4xl">      
        <figure className="m-10">
          <iframe className="w-[720px] h-[450px] lg:w-[800px] lg:h-[500px] flex-none"
            src="https://www.youtube.com/embed/YtT8q2mUM9c?si=16H9Yr9gMtr6Cbfm"
          ></iframe>
        </figure>
      </div>
      <div className="max-w-4xl mt-10 mx-auto lg:m-auto rounded-lg items-center justify-center card-body text-center flex-none bg-base-100">
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
