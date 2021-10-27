import { interval, fromEvent, from, Observable } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import { useState, useEffect } from 'react'
import {Counter} from '../counter/Counter'
import { Buttons } from "../buttons/Buttons";

export function App() {
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [buttonArray, setButtonArray] = useState(['Start', 'Stop', 'Resume', 'Reset'])

  const btnStart = document.getElementById('Start')
  const btnStop = document.getElementById('Stop')
  const btnResume = document.getElementById('Resume')
  const btnReset = document.getElementById('Reset')
  
  useEffect(() => {

    const observer = {
      next: () => {
        setTotalSeconds((prevState) => prevState + 1);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => { console.log('done') },
    };

    // const subscription = () => {
    //   setInterval(() => { }, 1000).subscribe(observer)
    // }
    
    // const unsubscribe = () => {
    //   subscription.unsubscribe()
    // }

    const myObservable = interval(1000);
    const btnStartClick = fromEvent(btnStart, 'click')
    const btnStopClick = fromEvent(btnStop, 'click')
    const btnResumeClick = fromEvent(btnResume, 'click')
    const btnResetClick = fromEvent(btnReset, 'click')
    btnStartClick.subscribe(() => {
      btnStart.disabled = true
      btnStop.disabled = false
      btnResume.disabled = false
      console.log('btnStart pushed')
      myObservable.subscribe(observer)
    })
    btnStopClick.subscribe(() => {
      // setButtonArray((prevState) => [...prevState, 'Resume', 'Reset'])
      btnStart.disabled = false
      btnStop.disabled = true
      btnResume.disabled = false
      myObservable.subscribe(observer).unsubscribe()
      console.log('btnStop pushed')
    })
    btnResumeClick.subscribe(() => {
      btnStart.disabled = true
      btnStop.disabled = false
      btnResume.disabled = true
      myObservable.subscribe(observer)
      console.log('btnResume pushed')
    })
    btnResetClick.subscribe(() => {
      setTotalSeconds(0)
      btnStart.disabled = true
      btnStop.disabled = false
      btnResume.disabled = true
      myObservable.subscribe(observer).unsubscribe()
      console.log('btnReset pushed')
    })
    // const subscription = myObservable.subscribe(observer)
    return () => {
      
    }
  }, [btnReset, btnResume, btnStart, btnStop])

  return (
    <div className="container">
      <Counter totalSeconds={totalSeconds}/>
      <Buttons buttons={buttonArray} />
    </div>
  );
}

