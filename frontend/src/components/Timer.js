import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h3>⏳ Focus Timer: {Math.floor(timeLeft / 60)}:{("0" + (timeLeft % 60)).slice(-2)}</h3>
      <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;