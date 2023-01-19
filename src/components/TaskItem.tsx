import { Link } from "react-router-dom";
import { Task } from "../data/types";

interface Props {
  task: Task;
}

export default function TaskItem({ task }: Props) {
  return (
    <li>
      <h2>{task.taskName}</h2>
      <Link to={`/tracktask/${task.taskId}`}>Work on task</Link>
    </li>
  );
}
