import { useParams, useNavigate } from "react-router-dom";
import { useStorage } from "../hooks/useStorage";
import Timer from "../components/Timer";
import { Task } from "../data/types";

// TaskTimerPage is the main page that shows the timer and allows the user to
// start a break of finish the task.

export default function TaskTimerPage() {
  const { taskId } = useParams<string>();
  const { taskList, isLoading, updateTask } = useStorage();
  const navigate = useNavigate();

  const currentTask = taskList.find((task) => task.taskId === taskId);

  if (!currentTask) {
    return <div>Task Not Found!</div>;
  }

  const totalSecondsWorked = currentTask.workedList.reduce(
    (total, taskWorked) => total + taskWorked.amountOfTime,
    0
  );

  if (isLoading || !currentTask) {
    return <div>Loading...</div>;
  }

  const finishedTask = (seconds: number) => {
    console.log(`Tasked finished with ${seconds} seconds`);
    updateTask(taskId!, seconds);
    navigate("/");
    // TODO: add the amount worked to the workedList
  };

  return (
    <div className="bg-gray-200 p-4 my-4 flex flex-col shadow-md rounded-md">
      <h1 className="text-4xl text-center">{currentTask.taskName}</h1>
      <Timer startingSeconds={totalSecondsWorked} doneHandler={finishedTask} />
    </div>
  );
}
