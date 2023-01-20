import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStorage } from "../hooks/useStorage";
import TaskList from "../components/TaskList";

import Button from "../components/ui/Button";

export default function Home() {
  const { addTask, updateTask, deleteTask, taskList } = useStorage();
  const [newTaskName, setNewTaskName] = useState("");

  const addNewTaskHandler = () => {
    console.log("Adding task: ", newTaskName);
    setNewTaskName("");
    addTask(newTaskName);
  };

  useEffect(() => {}, [taskList]);

  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-4xl font-bold">Your Tasks</h1>
        <div className="flex gap-2">
          <input
            className="border rounded-lg p-1"
            type="text"
            placeholder="Enter a new task name."
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <Button onClick={addNewTaskHandler}>Add Task</Button>
        </div>
      </div>

      <TaskList taskList={taskList} />
    </div>
  );
}
