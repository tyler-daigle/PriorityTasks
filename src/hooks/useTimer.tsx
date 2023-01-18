import { useEffect, useState } from "react";

export function useTimer() {
  const [elapsedSeconds, setElapsedSeconds] = useState(342);

  useEffect(() => {
    let lastUpdate = new Date();

    const timerId = setInterval(() => {
      const now = new Date();
      let diff = now.getSeconds() - lastUpdate.getSeconds();

      // when the seconds roll back to 0, we will get a negative difference which we don't want.
      // It will be 0 - 59, not 60 - 59.
      if (diff < 0) {
        diff = 1; //
      }

      if (diff >= 1) {
        setElapsedSeconds((s) => s + diff);
      }
    }, 500);
    return () => {
      clearInterval(timerId);
    };
  }, [elapsedSeconds]);

  return elapsedSeconds;
}
