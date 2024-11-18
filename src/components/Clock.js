import React, {useState, useEffect} from 'react'

function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Clock-Tile'>
        <div className="card">
            <h4>Current Time</h4> <br />
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
      
    </div>

  )
}

export default Clock