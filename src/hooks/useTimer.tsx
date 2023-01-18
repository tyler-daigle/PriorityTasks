import { useEffect, useState } from "react";

export function useTimer() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    let lastUpdate = new Date();

    const timerId = setInterval(() => {
      const now = new Date();
      let diff = now.getSeconds() - lastUpdate.getSeconds();
      if (diff < 0) {
        diff = 1;
      }
      if (diff >= 1) {
        setElapsedSeconds((s) => s + diff);
      }
    }, 500);
    return () => clearInterval(timerId);
  }, [elapsedSeconds]);

  return elapsedSeconds;
}
