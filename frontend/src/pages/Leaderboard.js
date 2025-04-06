import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const Leaderboard = () => {
  const [userName, setUserName] = useState("User");
  const [sortedSubjects, setSortedSubjects] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("studyPlan")) || [];
    const storedUserName = localStorage.getItem("userName") || "User";
    setUserName(storedUserName);

    // Sort subjects based on obtained marks
    const sorted = storedData.sort((a, b) => b.obtainedMarks - a.obtainedMarks);
    setSortedSubjects(sorted);
  }, []);

  const getMotivationalQuote = (marks, subject) => {
    if (marks < 30) {
      return `🌟 Keep going in ${subject}! Small steps lead to big achievements!`;
    } else if (marks >= 30 && marks < 50) {
      return `💡 Stay determined in ${subject}! You're improving every day!`;
    } else if (marks >= 50 && marks < 80) {
      return `🚀 Great job in ${subject}! Keep up the hard work!`;
    } else {
      return `🏆 Outstanding work in ${subject}! You're on the path to excellence!`;
    }
  };

  return (
    <div className="leaderboard-container">
      <Navbar />
      <h2 className="leaderboard-title">Leaderboard</h2>
      <h3 className="user-name">🏆 {userName}'s Performance</h3>
      <ul className="leaderboard-list">
        {sortedSubjects.map((subject, index) => (
          <li key={index} className="leaderboard-item">
            📘 <strong>{subject.subject}</strong> - {subject.obtainedMarks} Marks
            <p className="motivational-quote">{getMotivationalQuote(subject.obtainedMarks, subject.subject)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
