import React from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const Rewards = () => {
  return (
    <div className="rewards-container">
      <Navbar />
      <h2 className="rewards-title">Rewards & Penalties</h2>

      <h3 className="rewards-heading">Rewards 🎁</h3>
      <ul className="rewards-list">
        <li>🏆 50 XP for studying 3 hrs daily</li>
        <li>🏅 "Consistent Learner" Badge</li>
        <li>🎯 Bonus 20 XP for scoring above 80% in a subject</li>
        <li>🚀 Unlock new study themes after completing 5 study sessions</li>
        <li>🎨 Earn custom avatars for consistent performance</li>
        <li>📚 Free study tips for maintaining a streak</li>
      </ul>

      <h3 className="resources-heading">Best Tips for Interviews 🎥</h3>
      <ul className="video-list">
        <li>
          <a href="https://www.youtube.com/watch?v=2L0vMIEos5Y" target="_blank" rel="noopener noreferrer">
            🎬 HOW TO FEEL POWERFUL IN INTERVIEWS (5 MIN TIP)
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=fyUJrQk4zmg" target="_blank" rel="noopener noreferrer">
            🎬 LAST-MINUTE INTERVIEW PREP! (TOP 7 QUICK ANSWERS)
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=My2Aa5OhFbY" target="_blank" rel="noopener noreferrer">
            🎬 Best Answers to the 5 Most Asked Interview Questions
          </a>
        </li>
      </ul>

      <h3 className="penalties-heading">Penalties ⚠️</h3>
      <ul className="penalties-list">
        <li>🚫 Lose 10 XP for missing study streak</li>
        <li>⏳ Locked fun features for 1 hour due to inactivity</li>
        <li>❌ Reduced XP if tasks are skipped</li>
        <li>🔒 No access to new rewards for inconsistent study habits</li>
      </ul>
    </div>
  );
};

export default Rewards;
