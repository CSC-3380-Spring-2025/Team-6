import React from "react";
import { useNavigate } from "react-router-dom";

const VideoThree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div data-theme="cybertheme" className="card bg-black min-h-screen w-full shadow-xl">
      <div className="bg-gray-700 rounded-lg justify-center mx-auto max-w-4xl">      
        <figure className="m-10">
          <iframe className="w-[720px] h-[450px] lg:w-[800px] lg:h-[500px] flex-none"
            src="https://www.youtube.com/embed/v7VTJhkJUUY?si=-KhGz9suIBaZUEHG"
          ></iframe>
        </figure>
      </div>
      <div className="max-w-4xl mt-10 mx-auto lg:m-auto rounded-lg items-center justify-center card-body text-center flex-none bg-base-100">
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
