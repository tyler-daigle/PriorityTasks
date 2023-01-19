import { useEffect, useState } from "react";
import { TimeKeeper } from "../utils/TimeKeeper";

const Timers = new TimeKeeper();

const padTime = (time: number): string =>
  time < 10 ? `0${time}` : time.toString();

const secondsToString = (seconds: number): string => {
  let remaining = seconds;
  const hours = Math.floor(seconds / (60 * 60));

  remaining = remaining % (60 * 60);
  const minutes = Math.floor(remaining / 60);

  seconds = remaining % 60;
  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
};

interface Props {
  startingSeconds: number;
  doneHandler: (seconds: number) => void;
}

export default function Timer({ startingSeconds = 0, doneHandler }: Props) {
  const [timerId, setTimerId] = useState<string | null>();
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const id = Timers.createTimer((numSeconds) => {
      setElapsedSeconds(numSeconds);
    }, startingSeconds);
    setTimerId(id);

    return () => {
      Timers.removeTimer(id);
      setTimerId(null);
    };
  }, []);

  const pause = () => {
    if (timerId) {
      if (Timers.isTimerRunning(timerId)) {
        Timers.pauseTimer(timerId);
        setIsPaused(true);
      } else {
        Timers.resumeTimer(timerId);
        setIsPaused(false);
      }
    }
  };

  const taskFinished = () => {
    if (timerId) {
      doneHandler(elapsedSeconds);
      Timers.pauseTimer(timerId);
    }
  };

  return (
    <div>
      <button type="button" onClick={pause}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button type="button" onClick={taskFinished}>
        Done
      </button>
      <div>{secondsToString(elapsedSeconds)}</div>
    </div>
  );
}
