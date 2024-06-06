import React, { useState, useEffect } from "react";

const Timer = ({ isGameOver, onTimeUpdate, resetTimer }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (!isGameOver) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [isGameOver]);

  useEffect(() => {
    onTimeUpdate(time);
  }, [time, onTimeUpdate]);

  useEffect(() => {
    if (resetTimer) {
      setTime(0);
    }
  }, [resetTimer]);

  return <div>Time: {time}</div>;
};

export default Timer;
