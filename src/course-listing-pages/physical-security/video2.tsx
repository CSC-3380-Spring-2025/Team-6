// Import necessary modules from React and react-router-dom
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the VideoTwo functional component using React.FC (Functional Component) type
const VideoTwo: React.FC = () => {
  // Initialize the navigate function using the useNavigate hook from react-router-dom
  // This allows programmatic navigation within the application
  const navigate = useNavigate();

  // Return the JSX structure for the component
  return (
    // Main container div applying a theme, background, minimum height, width, and shadow
    <div data-theme="cybertheme" className="card bg-black min-h-screen w-full shadow-xl">
      {/* Container specifically for the video iframe, with background, rounded corners, and centering */}
      <div className="bg-gray-700 rounded-lg justify-center mx-auto max-w-4xl">
        {/* Figure element to wrap the iframe, providing margins */}
        <figure className="m-10">
          {/* Iframe to embed the video content */}
          {/* Sets responsive width and height using Tailwind classes */}
          <iframe className="w-[720px] h-[450px] lg:w-[800px] lg:h-[500px] flex-none"
            // Source URL for the embedded video
            src="https://www.youtube.com/embed/YtT8q2mUM9c?si=16H9Yr9gMtr6Cbfm" // Note: This URL might be a placeholder or require specific handling
          ></iframe>
        </figure>
      </div>
      {/* Container for the card body content (title, description, button) */}
      {/* Sets max width, margins (responsive), rounded corners, centers items, text alignment, and background */}
      <div className="max-w-4xl mt-10 mx-auto lg:m-auto rounded-lg items-center justify-center card-body text-center flex-none bg-base-100">
        {/* Card title centered */}
        <h2 className="card-title justify-center">Physical Security Video</h2>
        {/* Paragraph describing the video content */}
        <p>
          Learn how Physical Security improves Cybersecurity
        </p>
        {/* Button styled with Tailwind CSS */}
        <button className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg mt-4 mx-auto"
          // onClick handler to navigate to the '/courselisting2' route when the button is clicked
          onClick={() => navigate("/courselisting2")}>
          Finish
        </button>
      </div>
    </div>
  );
};

// Export the VideoTwo component to make it available for use in other parts of the application
export default VideoTwo;