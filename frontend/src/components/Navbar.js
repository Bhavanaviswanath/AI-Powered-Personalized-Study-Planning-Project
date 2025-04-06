import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/studyplan">Study Plan</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/rewards">Rewards</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/counseling">💡 Counseling</Link>
    </nav>
  );
};

export default Navbar;