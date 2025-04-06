import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/auth/user-profile")
      .then(response => {
        setUser(response.data);
      })
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-5 bg-blue-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Profile</h2>
      {user ? (
        <div className="mt-4">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Total Points:</strong> {user.points}</p>
        </div>
      ) : (
        <p className="text-center">Loading profile...</p>
      )}
    </motion.div>
  );
}

export default Profile;