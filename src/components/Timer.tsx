import { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";

const padTime = (time: number): string =>
  time < 10 ? `0${time}` : time.toString();

export default function Timer() {
  const [pausedSeconds, setPausedSeconds] = useState(10);
  let { elapsedSeconds, pause, resume } = useTimer(pausedSeconds);
  const hours = Math.floor(elapsedSeconds / (60 * 60));

  elapsedSeconds = elapsedSeconds % (60 * 60);
  const minutes = Math.floor(elapsedSeconds / 60);

  elapsedSeconds = elapsedSeconds % 60;
  const seconds = elapsedSeconds;

  const pauseTimer = () => {
    pause();
    setPausedSeconds(elapsedSeconds);
  };

  const resumeTimer = () => resume();

  return (
    <div>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
      <h1>Here is the time:</h1>
      <span>{padTime(hours)}</span>:<span>{padTime(minutes)}</span>:
      <span>{padTime(seconds)}</span>
    </div>
  );
}
