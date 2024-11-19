import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Increment by 10 milliseconds
      }, 10); // Update every 10 milliseconds
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current); // Stop the timer if it's running
    setTime(0); // Reset time to 0
    setIsRunning(false); // Ensure the timer is not running
  };

  // Format time into minutes, seconds, and milliseconds
  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10); // Get the last two digits of milliseconds

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className='card'>
      <h1>Timer</h1>
      <h1>{formatTime(time)}</h1>
      <div className='button-holder'>
      <button onClick={startTimer} className='button'>Start</button>
      <button onClick={stopTimer} className='button'>Stop</button>
      <button onClick={resetTimer} className='button'>Reset</button>
      </div>
    </div>
  );
};

export default Timer;