import { useEffect, useState } from "react";
import { TimeKeeper } from "../utils/TimeKeeper";
import LargeButton from "./ui/LargeButton";

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
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(startingSeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const id = Timers.createTimer((numSeconds) => {
      setElapsedSeconds(numSeconds);
    }, startingSeconds);
    setTimerId(id);

    Timers.pauseTimer(id); //start timer paused
    setIsPaused(true);

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
      doneHandler(elapsedSeconds - startingSeconds);
      Timers.pauseTimer(timerId);
    }
  };

  return (
    <div>
      <div className="text-7xl font-mono text-center my-8">
        {secondsToString(elapsedSeconds)}
      </div>

      <div className="flex justify-evenly">
        <LargeButton type="button" onClick={pause}>
          {isPaused ? "Resume" : "Pause"}
        </LargeButton>
        <LargeButton type="button" onClick={taskFinished}>
          Done
        </LargeButton>
      </div>
    </div>
  );
}
