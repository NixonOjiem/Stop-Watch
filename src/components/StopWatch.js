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

  return (
    <div className='card'>
      <h1>Stopwatch</h1>
      <div>
        <h1>{Math.floor(time / 60)}:
        {time % 60 < 10 ? `0${time % 60}` : time % 60}</h1>
      </div>
      <div>
        <input
          type="number"
          value={inputTime}
          onChange={handleInputChange}
          placeholder="Enter time in minutes"
        />
      </div>
      <div>
        <button onClick={startTimer}className='button'>Start</button>
        <button onClick={resetTimer}className='button'>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;