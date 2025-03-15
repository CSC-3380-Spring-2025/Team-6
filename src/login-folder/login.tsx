import React, { useState } from "react";
import "./login.css";

//Using React's useState, keeping track of the input fields
const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //When the form is submitted we need to ensure everything is as expected
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      console.log("Login Successful:", username);
    } else {
      setError("Please fill in all fields");
    }
  };

  //The form is rendered with the input fields and a submit button
  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
