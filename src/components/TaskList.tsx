import { Task } from "../data/types";
import TaskItem from "./TaskItem";

interface Props {
  taskList: Task[];
}

export default function TaskList({ taskList }: Props) {
  return (
    <ul>
      {taskList.map((task) => (
        <TaskItem key={task.taskId} task={task} />
      ))}
    </ul>
  );
}
