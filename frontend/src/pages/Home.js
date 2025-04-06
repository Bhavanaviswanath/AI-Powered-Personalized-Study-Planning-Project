import React from "react";
import Navbar from "../components/Navbar";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
      <h1 className="welcome-text">Welcome to AI Study Planner</h1>
        <img 
          src="https://startastudio.com/wp-content/uploads/2021/08/Can-I-study-animation-without-going-to-university-skills-03-1024x840.png" 
          alt="Home Banner" 
          className="home-banner"
        />
        <p className="motivation">
          "Success is the sum of small efforts, repeated day in and day out." – Robert Collier
        </p>
        <p>Navigate using the menu above.</p>
      </div>
    </div>
  );
};

export default Home;
