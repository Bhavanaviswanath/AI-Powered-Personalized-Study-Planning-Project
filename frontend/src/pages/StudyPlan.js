import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const StudyPlan = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("studyPlan")) || [];
    setSubjects(storedData);
  }, []);

  const getStudyTips = (marks) => {
    if (marks >= 80) {
      return [
        "✅ Make short notes for quick revision.",
        "🔑 Focus on key concepts and definitions.",
        "📚 Try explaining topics to someone else to reinforce learning.",
        "⏳ Maintain consistency and keep testing yourself."
      ];
    } else if (marks >= 50 && marks < 80) {
      return [
        "📖 Identify weak areas and revise them first.",
        "📝 Take detailed notes for better retention.",
        "🎯 Focus on important topics that carry more weight.",
        "⏰ Create a structured timetable and stick to it."
      ];
    } else {
      return [
        "🔥 Don't get discouraged! Stay motivated.",
        "🧠 Start with the basics and build a strong foundation.",
        "🎯 Revise daily and test yourself frequently.",
        "🙋‍♂️ Seek help from teachers or online resources.",
        "⏳ Stay consistent and practice more problem-solving."
      ];
    }
  };

  return (
    <div className="studyplan-container">
      <Navbar />
      <h2 className="studyplan-title">📚 Personalized Study Plan</h2>
      <ul className="studyplan-list">
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <li key={index} className="studyplan-item">
              <h3>📘 {subject.subject} - {subject.obtainedMarks} Marks</h3>
              <ul className="tips-list">
                {getStudyTips(subject.obtainedMarks).map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No study data available. Please update your marks in the Dashboard.</p>
        )}
      </ul>
    </div>
  );
};

export default StudyPlan;
