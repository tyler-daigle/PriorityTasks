import { Link } from "react-router-dom";
import { Task } from "../data/types";

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {

  const totalWorkedTime: number = task.workedList.reduce((total, curr) => {
    return total + curr.amountOfTime;
  }, 0);

  return (
    <li className="border m-1">
      <h2>{task.taskName}</h2>
      <span>Total amount of time worked: {totalWorkedTime}.</span>
      <Link to={`/tracktask/${task.taskId}`}>Work on task</Link>
    </li>
  );
}
