import { useEffect, useState } from "react";
import { Priority, Task } from "../data/types";
import { v4 as uuidv4 } from "uuid";

const testData: Task[] = [
  {
    taskName: "Test Task 1",
    taskId: uuidv4(),
    startDate: new Date(),
    workedList: [
      { date: new Date(), amountOfTime: 500 },
      { date: new Date(), amountOfTime: 351 },
      { date: new Date(), amountOfTime: 543 },
    ],
    priority: Priority.LEVEL_3,
  },
  {
    taskName: "Test Task 2",
    taskId: uuidv4(),
    startDate: new Date(),
    workedList: [{ date: new Date(), amountOfTime: 500 }],
    priority: Priority.LEVEL_2,
  },
  {
    taskName: "Test Task 3",
    taskId: uuidv4(),
    startDate: new Date(),
    workedList: [{ date: new Date(), amountOfTime: 500 }],
    priority: Priority.LEVEL_1,
  },
  {
    taskName: "Test Task 4",
    taskId: uuidv4(),
    startDate: new Date(),
    workedList: [{ date: new Date(), amountOfTime: 500 }],
    priority: Priority.LEVEL_3,
  },
  {
    taskName: "Test Task 5",
    taskId: uuidv4(),
    startDate: new Date(),
    workedList: [{ date: new Date(), amountOfTime: 500 }],
    priority: Priority.LEVEL_4,
  },
];

export function useStorage() {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    // load the task list from the local storage
    setTaskList(testData.map((data) => data));
  }, []);

  const updateTask = (task: Task): Task => {
    console.log("Updating:", task);
    return task;
  };

  const deleteTask = (task: Task) => {
    console.log("Deleting task:", task);
  };

  return { updateTask, deleteTask, taskList, isLoading };
}
