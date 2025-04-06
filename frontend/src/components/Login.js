import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Ensure this file exists

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ username, email: `${username}@example.com` })
      );
      navigate("/home");
    } else {
      alert("Please enter username and password!");
    }
  };

  return (
    <div className="login-container">
      {/* Image at the top */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/677/514/non_2x/man-with-laptop-studying-or-working-concept.jpg"
        alt="Study Concept"
        className="login-image"
      />

      <h2>Welcome Back</h2>
      <p className="sub-text">Plan your study sessions effectively</p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;