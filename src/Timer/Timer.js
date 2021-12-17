import "./Timer.css";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(1500);
  const [breakMessage, setBreakMessage] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setIsActive(false);
    setSeconds(1500);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          let sec = breakMessage ? 1500 : 300;
          setSeconds(sec);
          setBreakMessage(!breakMessage);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, breakMessage]);

  return (
    <>
      <div className="timer-container">
        <div className="clock">
          {("0" + Math.floor(seconds / 60)).slice(-2)}:
          {("0" + (seconds % 60)).slice(-2)}
        </div>
        {breakMessage ? <div className="break-message">Break Time</div> : null}
      </div>
      <div className="button-container">
        <button className="start-button btnn" onClick={toggle}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="reset-button btnn" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
