import "./Timer.css";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [isFocus, setIsFocus] = useState(false);

  const toggle = () => {
    setIsFocus(!isFocus);
  };
  const reset = () => {
    setIsFocus(false);
    setSeconds(1500);
  };

  useEffect(() => {
    let interval = null;
    if (isFocus) {
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
  }, [isFocus, seconds]);

  return (
    <>
      <div className="timer-container">
        <div className="clock">
          {("0" + Math.floor(seconds / 60)).slice(-2)}:
          {("0" + (seconds % 60)).slice(-2)}
        </div>
      </div>
      <div className="button-container">
        <button className="start-button" onClick={toggle}>
          {isFocus ? "Pause" : "Start"}
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
