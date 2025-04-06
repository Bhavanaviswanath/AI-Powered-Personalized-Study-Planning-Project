import React, { useState } from "react";
import Timer from "../components/Timer";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [userSubjects, setUserSubjects] = useState([
    { subject: "Math", time: "2 hrs" },
    { subject: "Java", time: "1.5 hrs" }
  ]);
  const [newSubject, setNewSubject] = useState("");
  const [timeAllocated, setTimeAllocated] = useState("");
  const [streak, setStreak] = useState(5);
  const [completedTasks, setCompletedTasks] = useState(7);
  const [pendingTasks, setPendingTasks] = useState(3);

  const examReminders = [
    { title: "Math Exam", date: "March 25, 2025" },
    { title: "AI Assignment", date: "March 28, 2025" }
  ];

  const addSubject = () => {
    if (newSubject && timeAllocated) {
      setUserSubjects([...userSubjects, { subject: newSubject, time: timeAllocated }]);
      setNewSubject("");
      setTimeAllocated("");
    }
  };

  const chartData = {
    options: { chart: { id: "study-performance" }, xaxis: { categories: ["Week 1", "Week 2", "Week 3", "Week 4"] }},
    series: [{ name: "Study Hours", data: [10, 12, 15, 18] }]
  };

  return (
    <div className="dashboard-container">
      <h2>📚 Study Dashboard</h2>

      <h3>📌 Today's Study Plan</h3>
      <ul>
        {userSubjects.map((item, index) => (
          <li key={index}>{item.subject} - {item.time}</li>
        ))}
      </ul>

      <div className="subject-input">
        <input 
          type="text" 
          placeholder="Enter Subject" 
          value={newSubject} 
          onChange={(e) => setNewSubject(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Time (e.g., 1.5 hrs)" 
          value={timeAllocated} 
          onChange={(e) => setTimeAllocated(e.target.value)} 
        />
        <button onClick={addSubject}>➕ Add Subject</button>
      </div>

      <Timer />

      <h3>🔥 Streaks: {streak} Days</h3>

      <div className="chart-container">
        <Chart options={chartData.options} series={chartData.series} type="bar" width="100%" />
      </div>

      <h3>📝 Upcoming Deadlines</h3>
      <ul>
        {examReminders.map((exam, index) => (
          <li key={index}>{exam.title} - <strong>{exam.date}</strong></li>
        ))}
      </ul>

      <h3>📊 Progress Summary</h3>
      <p>✅ Completed Tasks: {completedTasks}</p>
      <p>❌ Pending Tasks: {pendingTasks}</p>
    </div>
  );
};

export default Dashboard;