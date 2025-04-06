import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { username: "Guest", email: "guest@example.com" };
  const [password, setPassword] = useState("");

  const handleChangePassword = () => {
    alert("Password changed successfully! (Dummy functionality)");
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-container">
        <img 
          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${user.username}&radius=50`} 
          alt="AI Avatar" 
          className="profile-pic-large" 
        />
        
        <div className="profile-info">
          <h2 className="profile-username">{user.username}</h2>
          <p className="profile-email"><strong>Email:</strong> {user.email}</p>
        </div>

        <input 
          type="password" 
          placeholder="New Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="password-input"
        />

        <button className="change-password-btn" onClick={handleChangePassword}>Change Password</button>
        <button className="logout-btn" onClick={() => { localStorage.removeItem("user"); window.location.href = "/"; }}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
