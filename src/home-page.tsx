import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-black p-4">
      {/* Navbar */}
      <div className="navbar shadow-sm h-13 top-0 fixed z-20 bg-neutral bg-opacity-80">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="navbar-center"
          role="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="CyberLogo.png"
            className="w-100 h-auto cursor-pointer"
            alt="Cyber Logo"
          />
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
  tabIndex={0}
  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
>
  <li>
    <a onClick={() => navigate("/profile")}>Profile</a>
  </li>
  <li>
  <a onClick={() => navigate("/settings")}>Settings</a>
  </li>
  <li>
    <a>Logout</a>
  </li>
</ul>

          </div>
        </div>
      </div>

      {/* Section Buttons/Scrollable */}
      <div className="flex flex-col min-h-screen w-full bg-gray-100 p-0 m-0 z-0">
        {/* Section 1 */}
        <section
          className="h-screen w-full p-0 m-0 flex flex-col justify-center items-center bg-cover bg-center text-white"
          style={{ backgroundImage: `url('/greenbackground.jpeg')` }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Password Security
          </h1>
          <p className="max-w-md text-center mb-6">
            Understand the physical aspects of cybersecurity, from locks to
            human presence. Dive into real-world examples and security design.
          </p>
          <button
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => navigate("/courselisting1")}
          >
            Enter
          </button>
        </section>

        {/* Section 2 */}
        <section
          className="h-screen w-full p-0 m-0 flex flex-col justify-center items-center bg-cover bg-center text-white"
          style={{ backgroundImage: `url('/dots.jpg')` }}
        >
          <h1 className="text-4xl font-bold mb-4">Physical Security</h1>
          <p className="max-w-md text-center mb-6">
            Learn how phishing works, how to detect it, and how to protect
            yourself and others from social engineering attacks.
          </p>
          <button
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => navigate("/courselisting2")}
          >
            Enter
          </button>
        </section>

        {/* Section 3 */}
        <section
          className="h-screen w-full p-0 m-0 flex flex-col justify-center items-center bg-cover bg-center  text-white"
          style={{ backgroundImage: `url('/htmlbackgroundd.jpeg')` }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Phishing and Social Engineering
          </h1>
          <p className="max-w-md text-center mb-6">
            Explore how attackers manipulate people and learn best practices for
            staying alert in various scenarios.
          </p>
          <button
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition transform hover:scale-105"
            onClick={() => navigate("/courselisting3")}
          >
            Enter
          </button>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 bottom-0 left-0 w-full z-20">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://x.com/KingJames?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>

          <a href="https://www.youtube.com/watch?v=DEnLn7EljYk" className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>

          <a href="https://www.facebook.com/LeBron/" className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;
