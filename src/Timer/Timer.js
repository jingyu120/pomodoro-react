import "./Timer.css";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          toggle();
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer-container">
      <div className="clock">
        {("0" + Math.floor(seconds / 60)).slice(-2)}:
        {("0" + (seconds % 60)).slice(-2)}
      </div>
      <button onClick={toggle}>Start</button>
    </div>
  );
}
