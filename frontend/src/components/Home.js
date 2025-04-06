import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [studyPlan, setStudyPlan] = useState([]);

  // Load user details from local storage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      navigate("/"); // Redirect to login if not logged in
    }
  }, [navigate]);

  // Dummy AI-generated study plan
  useEffect(() => {
    const subjects = ["Math", "Physics", "AI & ML", "Data Structures", "DBMS"];
    const allocatedTime = [90, 60, 120, 75, 45]; // Time in minutes

    const generatedPlan = subjects.map((subject, index) => ({
      subject,
      time: allocatedTime[index],
    }));

    setStudyPlan(generatedPlan);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Study Planner Dashboard</h2>
        <ul>
          <li onClick={() => navigate("/home")}>Dashboard</li>
          <li onClick={() => navigate("/leaderboard")}>Leaderboard</li>
          <li onClick={() => navigate("/rewards")}>Rewards</li>
          <li onClick={() => navigate("/studyplan")}>Study Plan</li>
          <li onClick={() => navigate("/profile")}>Profile</li>
        </ul>
      </nav>

      {/* Welcome Message */}
      <div className="welcome-section">
        <h3>Welcome, {user.username || "Guest"} 🎓</h3>
        <p>Let's make today productive!</p>
      </div>

      {/* Today's Study Plan */}
      <div className="study-plan">
        <h3>📌 Today's Study Plan</h3>
        <ul>
          {studyPlan.map((item, index) => (
            <li key={index}>
              <strong>{item.subject}</strong> - {item.time} mins
            </li>
          ))}
        </ul>
      </div>

      {/* Progress Summary (Graph Section) */}
      <div className="progress-summary">
        <h3>📊 Progress Summary</h3>
        <p>Study Hours vs Performance (Graph Coming Soon)</p>
      </div>

      {/* Upcoming Deadlines */}
      <div className="deadlines">
        <h3>⏳ Upcoming Deadlines</h3>
        <p>Math Exam - 3 days left</p>
        <p>AI Project Submission - 7 days left</p>
      </div>

      {/* Rewards & Penalties Overview */}
      <div className="rewards-penalties">
        <h3>🎁 Rewards & ⚠️ Penalties</h3>
        <p>Earned: ⭐ Gold Study Streak</p>
        <p>Penalty: 🚨 Missed 1 deadline</p>
      </div>

      {/* Logout Button */}
      <button className="logout-btn" onClick={() => {
        localStorage.removeItem("loggedInUser");
        navigate("/");
      }}>Logout</button>
    </div>
  );
};

export default Home;