import { useEffect, useState } from "react";
import { useStorage } from "../hooks/useStorage";
import TaskList from "../components/TaskList";

import Button from "../components/ui/Button";

export default function Home() {
  const { updateTask, deleteTask, taskList } = useStorage();
  useEffect(() => {}, [taskList]);

  return (
    <div>
      <div className="flex justify-between py-4">
        <h1 className="text-4xl font-bold">Your Tasks</h1>
        <Button onClick={() => console.log("click")}>Add Task</Button>
      </div>

      <TaskList taskList={taskList} />
    </div>
  );
}
