import { Task } from "../data/types";
import TaskItem from "./TaskItem";

interface Props {
  taskList: Task[];
}

export default function TaskList({ taskList }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {taskList.map((task) => (
        <TaskItem key={task.taskId} task={task} />
      ))}
    </ul>
  );
}
