import { useEffect, useState } from "react";
import { useStorage } from "../hooks/useStorage";
import TaskList from "../components/TaskList";

export default function Home() {
  const { updateTask, deleteTask, taskList } = useStorage();
  useEffect(() => {}, [taskList]);

  return (
    <div>
      <h1>Your Tasks</h1>
      <button type="button">Add Task</button>
      <p>You have {taskList.length} tasks.</p>
      <TaskList taskList={taskList} />
    </div>
  );
}
