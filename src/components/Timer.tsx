import { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";

export default function Timer() {
  const seconds = useTimer();
  return (
    <div>
      <span>{seconds}</span>
    </div>
  );
}
