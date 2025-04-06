import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const Counseling = () => {
  const [category, setCategory] = useState("");
  const [motivation, setMotivation] = useState([]);

  const motivationData = {
    "study": [
      "📚 Keep pushing forward! Every bit of effort counts.",
      "🎯 Stay focused on your goal, success is near!",
      "⏳ Hard work pays off. Stay consistent!",
      "🚀 You have the potential to achieve great things!"
    ],
    "homesick": [
      "🏡 Home is where love resides, but growth happens outside your comfort zone!",
      "📞 Call your family and share your feelings, they will always support you!",
      "🌍 Every journey begins with a step, and you are on a beautiful journey of growth.",
      "💪 Stay strong! This is a phase that will pass. Focus on learning and making new memories."
    ],
    "friends": [
      "🤔 Surround yourself with people who uplift and inspire you.",
      "⛔ Bad company is like a poison—stay away and focus on your growth!",
      "🎯 Real friends will support your dreams, fake ones will drag you down.",
      "🚀 Be your own biggest supporter. Your future is in your hands!"
    ],
    "mental": [
      "💆‍♂️ Take breaks, relax, and prioritize your mental health!",
      "🌿 Meditation and mindfulness can improve focus and well-being.",
      "💙 Seek help when needed—there is strength in asking for support.",
      "💪 You are stronger than you think. Keep going, and don’t let stress control you!"
    ]
  };

  const handleMotivation = () => {
    if (category) {
      setMotivation(motivationData[category]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="counseling-container">
        <h2 className="counseling-title">💡 Counseling & Motivation</h2>
        <p>Select a category and get the motivation you need!</p>

        {/* Dropdown Selection */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="dropdown">
          <option value="">Select Motivation Type</option>
          <option value="study">📚 Study Motivation</option>
          <option value="homesick">🏡 Feeling Homesick</option>
          <option value="friends">🤔 Bad Friends</option>
          <option value="mental">🧠 Mental Health</option>
        </select>

        {/* Button to Get Motivation */}
        <button onClick={handleMotivation} className="motivation-btn">Get Motivation</button>

        {/* Display Motivational Messages */}
        {motivation.length > 0 && (
          <div className="motivation-list">
            <h3>✨ Your Motivation ✨</h3>
            <ul>
              {motivation.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Counseling;
