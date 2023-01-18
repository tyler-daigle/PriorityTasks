import { v4 as uuidv4 } from "uuid";

type TimerCallback = (currSeconds: number) => void;

interface Timer {
  started: number;
  paused: boolean;
  pausedAt: number;
  callback: TimerCallback;
}

export class TimeKeeper {
  private _globalTimerId: number;
  private _globalSeconds: number = 0;
  private _timers: Map<string, Timer>;

  constructor() {
    const GLOBAL_TICK_INTERVAL = Math.floor(1000 / 60);
    let lastCalled = Date.now();
    let elapsed = 0;
    this._timers = new Map();

    this._globalTimerId = setInterval(() => {
      const now = Date.now();
      elapsed += now - lastCalled;
      if (elapsed >= 1000) {
        elapsed = 0;
        this._globalSeconds += 1;
        this.executeCallbacks();
      }
      lastCalled = now;
    }, GLOBAL_TICK_INTERVAL);
  }

  private executeCallbacks() {
    // call the callbacks if they exist and the timer is running
    this._timers.forEach((timer) => {
      if (!timer.paused && timer.callback) {
        timer.callback(this._globalSeconds - timer.started);
      }
    });
  }

  createTimer(callback: TimerCallback, startingSeconds?: number): string {
    const id = uuidv4();
    const timer: Timer = {
      started: startingSeconds
        ? this._globalSeconds - startingSeconds
        : this._globalSeconds,
      paused: false,
      pausedAt: 0,
      callback,
    };
    console.log("Tick");
    this._timers.set(id, timer);
    return id;
  }

  removeTimer(id: string): number {
    this._timers.delete(id);
    console.log(`Deleting timer ${id}`);
    return this._globalSeconds;
  }

  pauseTimer(id: string) {
    const timer = this._timers.get(id);
    if (timer) {
      timer.paused = true;
      timer.pausedAt = this._globalSeconds;
    }
  }

  resumeTimer(id: string) {
    const timer = this._timers.get(id);
    if (timer) {
      timer.paused = false;
      timer.started = timer.started + (this._globalSeconds - timer.pausedAt);
    }
  }

  getElapsedSeconds(id: string) {
    const timer = this._timers.get(id);
    if (timer) {
      const seconds = timer.started - this._globalSeconds;
      return seconds;
    } else {
      throw new Error(`Timer ${id} doesn't exist!`);
    }
  }

  isTimerRunning(id: string) {
    const timer = this._timers.get(id);
    return timer && !timer.paused;
  }

  destroy() {
    clearInterval(this._globalTimerId);
    console.log("Timer Destroyed");
  }
}
