import { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";

const padTime = (time: number): string =>
  time < 10 ? `0${time}` : time.toString();

export default function Timer() {
  let currentSeconds = useTimer();
  const hours = Math.floor(currentSeconds / (60 * 60));

  currentSeconds = currentSeconds % (60 * 60);
  const minutes = Math.floor(currentSeconds / 60);

  currentSeconds = currentSeconds % 60;
  const seconds = currentSeconds;

  return (
    <div>
      <h1>Here is the time:</h1>
      <span>{padTime(hours)}</span>:<span>{padTime(minutes)}</span>:
      <span>{padTime(seconds)}</span>
    </div>
  );
}
