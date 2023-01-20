import { Link } from "react-router-dom";
import { Task } from "../data/types";
import TimeDisplay from "./ui/TimeDisplay";

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {
  const totalWorkedTime: number = task.workedList.reduce((total, curr) => {
    return total + curr.amountOfTime;
  }, 0);

  return (
    <li className="border rounded-lg m-1 p-6 flex flex-col shadow-md gap-2">
      <h2 className="text-2xl">{task.taskName}</h2>
      <TimeDisplay seconds={totalWorkedTime} />
      <Link
        className="inline-block max-w-max rounded-lg border py-1 px-6 bg-blue-400 text-white active:bg-blue-600"
        to={`/tracktask/${task.taskId}`}
      >
        Work on task
      </Link>
    </li>
  );
}
