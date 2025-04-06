import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import StudyPlan from "./pages/StudyPlan";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import Counseling from "./pages/Counseling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studyplan" element={<StudyPlan />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/counseling" element={<Counseling />} />
      </Routes>
    </Router>
  );
}

export default App;








