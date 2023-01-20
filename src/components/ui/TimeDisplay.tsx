interface Props {
  seconds: number;
}

const padTime = (time: number): string =>
  time < 10 ? `0${time}` : time.toString();

const secondsToString = (seconds: number): string => {
  let remaining = seconds;
  const hours = Math.floor(seconds / (60 * 60));

  remaining = remaining % (60 * 60);
  const minutes = Math.floor(remaining / 60);

  seconds = remaining % 60;
  return `${padTime(hours)}h ${padTime(minutes)}m ${padTime(seconds)}s`;
};

export default function TimeDisplay({ seconds }: Props) {
  return <span className="text-xl">{secondsToString(seconds)}</span>;
}
