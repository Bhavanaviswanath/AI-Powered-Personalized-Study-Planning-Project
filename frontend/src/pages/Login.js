import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && email && password) {
      localStorage.setItem("user", JSON.stringify({ username, email }));
      navigate("/home"); // Navigate to Home Page
    } else {
      alert("Please enter all fields!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/677/514/non_2x/man-with-laptop-studying-or-working-concept.jpg"
          alt="Profile"
          className="login-image"
        />
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;