import React from "react";

const VideoTwo: React.FC = () => {
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
        <h2 className="card-title">LEBRON JAMES VIDEO</h2>
        <p>
          This is where we can information about the video, or if possible add
          the transcript!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-error p-3">Back</button>
          <button className="btn btn-outline btn-error p-3">Next</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
