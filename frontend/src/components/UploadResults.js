import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function UploadResults() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8000/upload-results", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error uploading file.");
      console.error("Upload error:", error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="p-5 bg-blue-900 text-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Upload Result Card</h2>
      <input type="file" onChange={handleFileChange} className="block w-full p-2 border rounded bg-gray-800 text-white" />
      <button 
        onClick={handleUpload} 
        className="mt-3 p-2 bg-green-500 hover:bg-green-600 text-white rounded"
      >
        Upload
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </motion.div>
  );
}

export default UploadResults;