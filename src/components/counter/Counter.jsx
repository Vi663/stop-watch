import { interval, fromEvent } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import { useState, useEffect } from 'react'
import { setTimeFormat } from "../../utils/timeFormat";

export function Counter({ totalSeconds }) {
  const [counter, setCounter] = useState({})
  useEffect(() => {
    setCounter(setTimeFormat(totalSeconds))
  }, [counter, totalSeconds])
  const { hh, mm, ss } = counter;
  // const { hours, mins, secs } = counter;
  // const buttonStart = document.getElementById('start-btn')
  // const buttonStop = document.getElementById('stop-btn')

  // const observer = {
  //   next: () => {
  //     setTotalseconds((prevState) => (prevState++));
  //     setCounter(() => ({ hours: Math.floor(totalseconds / 3600), mins: Math.floor((totalseconds - hours * 3600) / 60), secs: totalseconds - (hours * 3600 + mins * 60) }));
  //   },
  // error: err => console.error('Observer got an error: ' + err),
  // complete: () => {console.log('done')},
  // };

  // let myObservable = interval(1000);

  // const startCounter = () => {
  //   buttonStart.disabled = true
  //   myObservable.subscribe(observer)
  // }
  // const stopCounter = () => {
  //   myObservable.unsubscribe()
  //   buttonStart.disabled = false
  // }
  // fromEvent(document, 'click')
  // .pipe(
  //   throttleTime(300),
  //   map(event => console.log(event.target))
  // )
  // buttonStop.addEventListener('click', stopCounter())
  
  return (
    <div className="container d-flex justify-content-center">
      {/* {(mm >= 60) ? 
      : ''} */}
      <span className="mx-3 my-5 px-2 fs-2 bg-success bg-gradient">HH: {hh} </span>
      <span className="mx-3 my-5 px-2 fs-2 bg-success bg-gradient">MM: {mm} </span>
      <span className="mx-3 my-5 px-2 fs-2 bg-success bg-gradient">SS: {ss} </span>
      <hr />
    </div>
  )
}