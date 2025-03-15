import React, { useEffect } from 'react';

const Homepage: React.FC = () => {
  useEffect(() => {
    // Add event listeners to buttons using React's useEffect hook (instead of direct DOM manipulation)
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    const handleClick1 = () => {
      console.log("Section 1 button clicked");
    };
    const handleClick2 = () => {
      console.log("Section 2 button clicked");
    };
    const handleClick3 = () => {
      console.log("Section 3 button clicked");
    };

    // Attach event listeners to buttons
    btn1?.addEventListener("click", handleClick1);
    btn2?.addEventListener("click", handleClick2);
    btn3?.addEventListener("click", handleClick3);

    // Cleanup event listeners when the component unmounts
    return () => {
      btn1?.removeEventListener("click", handleClick1);
      btn2?.removeEventListener("click", handleClick2);
      btn3?.removeEventListener("click", handleClick3);
    };
  }, []); // Empty dependency array ensures this effect runs only once (when the component mounts)

  return (
    <div>
  {/* Images at the top of the page */}
    <div className="top-images">
      <img src="dabird.png" alt="Bird Logo" id="logo1" />
      <img src="CyberLogoText.png" alt="CyberDojo Logo" id="logo2" />
    </div>

  {/* Main Content */}
    <div className="content">
      <p>Welcome to CyberDojo!</p>

    {/* Button Container */}
      <div className="button-container">
        <button className="button" id="btn1">Section 1</button>
        <button className="button" id="btn2">Section 2</button>
        <button className="button" id="btn3">Section 3</button>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
