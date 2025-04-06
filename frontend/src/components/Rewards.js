import React, { useState, useEffect } from "react";
import axios from "axios";

function Rewards() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/rewards/rewards")
      .then(response => {
        setRewards(response.data.rewards || []);
      })
      .catch(error => console.error("Error fetching rewards:", error));
  }, []);

  return (
    <div>
      <h2>Rewards</h2>
      {rewards.length > 0 ? (
        <ul>
          {rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>
      ) : (
        <p>No rewards available yet.</p>
      )}
    </div>
  );
}

export default Rewards;