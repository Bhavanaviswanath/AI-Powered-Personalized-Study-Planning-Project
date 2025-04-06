import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./styles.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [obtainedMarks, setObtainedMarks] = useState("");

  const addSubject = () => {
    if (subject && totalMarks && obtainedMarks) {
      setSubjects([...subjects, { subject, totalMarks, obtainedMarks }]);
      setSubject("");
      setTotalMarks("");
      setObtainedMarks("");
    }
  };

  const generateStudyPlan = () => {
    localStorage.setItem("studyPlan", JSON.stringify(subjects));
    navigate("/studyplan");
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <h3>Today's Study Plan</h3>

        <div className="input-container">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="large-input"
          />
          <input
            type="number"
            placeholder="Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="large-input"
          />
          <input
            type="number"
            placeholder="Marks Obtained"
            value={obtainedMarks}
            onChange={(e) => setObtainedMarks(e.target.value)}
            className="large-input"
          />
          <button onClick={addSubject} className="large-button">Add Subject</button>
        </div>

        <ul className="subject-list">
          {subjects.map((item, index) => (
            <li key={index} className="subject-item">
              {item.subject} - {item.obtainedMarks}/{item.totalMarks} Marks
            </li>
          ))}
        </ul>

        <button className="large-button generate-plan-btn" onClick={generateStudyPlan}>
          Generate Study Plan
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
