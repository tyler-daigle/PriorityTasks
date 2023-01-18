import { useEffect, useState } from "react";

// Timer works but the user of the hook is responsible for passing in the
// startingSeconds which are used to resume the timer after it has been
// paused. Maybe this could be moved into some global kind of state but
// that might be unecessary.

export function useTimer(startingSeconds = 0) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [startingTime, setStartingTime] = useState(Date.now());
  const [isPaused, setIsPaused] = useState(false);

  const pause = () => setIsPaused(true);
  const resume = () => {
    setIsPaused(false);
    setStartingTime(Date.now());
  };

  useEffect(() => {
    if (!isPaused) {
      const timerId = setInterval(() => {
        const now = Date.now();
        const diff = Math.floor((now - startingTime) / 1000) + startingSeconds;
        setElapsedSeconds(diff);
      }, 500);
      return () => clearInterval(timerId);
    }
  }, [elapsedSeconds, startingSeconds, isPaused]);

  return { elapsedSeconds, pause, resume };
}
