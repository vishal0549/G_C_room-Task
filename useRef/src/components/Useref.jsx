import React, { useState, useEffect, useRef } from 'react';

const Useref = () => { 

  const [ timer, setTimer ] = useState(0);

  let timerId = useRef(null);

  let h2Ref = useRef(null);

  let startButton = useRef(null);
  let stopButton = useRef(null);

   useEffect(() => {

    if(timer === 0) {
      h2Ref.current.innerText = `Value is ${ timer }`;
      h2Ref.current.style.color = 'black';
    } else {
      h2Ref.current.innerText = `Timer started and Value is ${ timer }`
      h2Ref.current.style.color = 'green';
    }
    
  })

  // useEffect(() => {

  //   var h2Ref = document.getElementById('timerIdRef');

  //   if(timer === 0) {
  //     h2Ref.innerText = `Timer value is ${ timer }`
  //   } else {
  //     h2Ref.innerText = `Timer started and Value is ${ timer }`
  //   }
    
  // })

  const startTimer = () => {    

    startButton.current.disabled = true;
    stopButton.current.disabled = false;

    timerId.current = setInterval(() => {

      // setTimer(timer + 1); // not working      

      setTimer((prevTimer) => prevTimer+1 );
    }, 1000);
  }

  const stopTimer = () => {

    startButton.current.disabled = false;
    stopButton.current.disabled = true;
    clearInterval(timerId.current);
    h2Ref.current.style.color = 'red';
  }

  return (
    <div>
        <h2 id="timerIdRef" ref={ h2Ref }>Timer is { timer }</h2>
        <button onClick={ startTimer } ref={ startButton }>Start</button> &nbsp;&nbsp;&nbsp;
        <button onClick={ stopTimer } ref={ stopButton }>Stop</button>
    </div>
  )
}

export default Useref