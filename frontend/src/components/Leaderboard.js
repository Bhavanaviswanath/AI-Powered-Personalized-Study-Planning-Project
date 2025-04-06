import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = () => {
      axios.get("http://localhost:8000/rewards/leaderboard")
        .then(response => {
          setUsers(response.data.leaderboard);
        })
        .catch(error => console.error("Error fetching leaderboard:", error));
    };

    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Leaderboard</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">Rank</th>
            <th className="p-2">Username</th>
            <th className="p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user, index) => (
            <motion.tr key={index} 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-700">
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2 text-center">{user.username}</td>
              <td className="p-2 text-center">{user.points}</td>
            </motion.tr>
          )) : (
            <tr>
              <td colSpan="3" className="text-center p-2">No leaderboard data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;