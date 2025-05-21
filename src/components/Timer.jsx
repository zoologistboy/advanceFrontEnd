import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

useEffect(()=>{
    let intervalId;
    if (isRunning) {
        intervalId = setInterval(() => {
            setTime((time)=>(time + 1))
        }, 1000);
    }
    return()=>(clearInterval(intervalId))

},[isRunning])
// useEffect(()=>{
//     let intervalId;
//     if (isRunning){
//         intervalId = setInterval(() => {
//             setTime((time)=>(time + 1))
//         }, 1000);
//     }
//     return()=> clearInterval(intervalId)

//   }, [isRunning]);

function buttonStyleStart(){
    buttonS.disabled = false
    buttonS.style.backgroundColor = 'green';
    buttonS.style.color = 'white';

  }

 
  const handleStart = ()=>{
    setIsRunning(true);
    buttonS.disabled = true
    buttonS.style.backgroundColor = 'grey';
    buttonS.style.color = 'black';

  }

  const handleReset =()=>{
    setIsRunning(false);
    setTime(0)
    buttonStyleStart()
  }

  const handleStop =()=>{
    setIsRunning(false);
    buttonStyleStart()
  }


 
  return (
    
    <div >
      <div style={styles.container}>
      <p style={styles.timerDisplay}>time:{time}</p>
      <div style={styles.btnContainer}>
        <button 
        id='buttonS'
          style={{ ...styles.btn, ...styles.startBtn }} onClick={handleStart}
        >
          Start
        </button>
        <button 
          style={{ ...styles.btn, ...styles.stopBtn }} 
          onClick={handleStop}
        >
          Stop
        </button>
        <button 
          
          style={{ ...styles.btn, ...styles.resetBtn }} 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
    </div>
  );
};


// const styless ={
//   container:{
//     display:none,
//   }
// };


const styles = {
  container: {
    border: '2px solid #333',
    borderRadius: '8px',
    width: '250px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  timerDisplay: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: '700',
    fontFamily: 'monospace',
    color: '#333',
  },
  btnContainer: {
    display: 'flex',
    gap: '10px',
  },
  btn: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s',
  },
  startBtn: {
    backgroundColor: '#4CAF50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#45a049',
    },
    '&:disabled': {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
  },
  stopBtn: {
    backgroundColor: '#f44336',
    color: 'white',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
    '&:disabled': {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
  },
  resetBtn: {
    backgroundColor: '#2196F3',
    color: 'white',
    '&:hover': {
      backgroundColor: '#0b7dda',
    },
  },
};

export default Timer;