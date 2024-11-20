import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [time, setTime] = useState(300); // 300 seconds = 5 mins
  const [isActive, setIsActive] = useState(false);
  const [inputTime, setInputTime] = useState(5); // default input time in minutes

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(inputTime * 60); // set time based on user input
  };

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className='card'>
      <h1>Stopwatch</h1>
      <div>
        <h1>
          {hours > 0 ? `${hours}:` : ''} {/* Only show hours if greater than 0 */}
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
      <div>
        <input
          type="number"
          // value={inputTime}
          onChange={handleInputChange}
          placeholder="Enter time in minutes"
          className='Input-field'
        />
      </div>
      <div>
        <button onClick={startTimer} className='button'>Start</button>
        <button onClick={resetTimer} className='button'>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;