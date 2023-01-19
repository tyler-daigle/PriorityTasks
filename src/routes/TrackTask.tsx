import { useParams } from "react-router-dom";
import { useStorage } from "../hooks/useStorage";
import Timer from "../components/Timer";
// TrackTask is the main page that shows the timer and allows the user to
// start a break of finish the task.

export default function TrackTask() {
  const { taskId } = useParams();
  const { taskList, isLoading } = useStorage();

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
    // TODO: add the amount worked to the workedList
  };

  return (
    <div>
      <h1>Track Your Task</h1>
      <h2>{currentTask.taskName}</h2>
      <p>{taskId}</p>
      <Timer startingSeconds={totalSecondsWorked} doneHandler={finishedTask} />
    </div>
  );
}
