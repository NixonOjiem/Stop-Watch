import React, {useState, useEffect} from 'react'

function StopWatch() {

  const [time, setTime] = useState(300) //300 seconds = 5 mins
  const [isActive, setIsActive] = useState(false);

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
  }

  const resetTimer = () => {
    setIsActive(false);
    setTime(300);
  };

  return (
    <div className='card'>
      <div className='Stopwatch-holder'>
        <h1>Stopwatch: <span>{Math.floor(time/60)}:</span></h1>
        <h1><span>{time % 60 < 10 ? `0${time % 60}`: time % 60}</span></h1>
      </div>
      
      <div className='button-holder'>
        <button onClick={startTimer}className='button'>Start</button>
        <button onClick={resetTimer} className='button'>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch