import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function StudyPlan() {
  const [studyPlan, setStudyPlan] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/planner/get-study-plan")
      .then(response => {
        setStudyPlan(response.data.plan);
      })
      .catch(error => console.error("Error fetching study plan:", error));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="p-5 bg-gray-900 text-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Your Study Plan</h2>
      <ul className="list-disc list-inside">
        {studyPlan.length > 0 ? (
          studyPlan.map((task, index) => (
            <motion.li key={index} 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-2 border-b border-gray-700"
            >
              {task}
            </motion.li>
          ))
        ) : (
          <p className="text-center">No study plan available.</p>
        )}
      </ul>
    </motion.div>
  );
}

export default StudyPlan;