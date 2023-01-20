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

  // TODO: Add the tasks to the local storage so that the tasks will
  // persist when changing to a different page. Right now the useeffect
  // gets reloaded on a page load and the data is not saved.

  useEffect(() => {
    console.log("Running useStorage() useEffect()");
    // load the task list from the local storage
    setTaskList(testData.map((data) => data));
  }, []);

  const updateTask = (
    taskId: string,
    secondsWorked: number
  ): Task | undefined => {
    const updatedTasks = [...taskList];
    const task: Task | undefined = updatedTasks.find(
      (t) => taskId === t.taskId
    );

    if (task) {
      task.workedList.push({ date: new Date(), amountOfTime: secondsWorked });
      setTaskList(updatedTasks);
    }

    console.log("Updating:", taskId);
    return task;
  };

  const deleteTask = (task: Task) => {
    console.log("Deleting task:", task);
  };

  const addTask = (taskName: string) => {
    const t: Task = {
      taskId: uuidv4(),
      taskName,
      startDate: new Date(),
      workedList: [],
      priority: Priority.LEVEL_2,
    };
    const list = [...taskList];
    list.unshift(t);
    setTaskList(list);
  };

  return { addTask, updateTask, deleteTask, taskList, isLoading };
}
