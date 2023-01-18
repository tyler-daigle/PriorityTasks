import { useParams } from "react-router-dom";
import { useStorage } from "../hooks/useStorage";
import Timer from "../components/Timer";
// TrackTask is the main page that shows the timer and allows the user to
// start a break of finish the task.

export default function TrackTask() {
  const { taskId } = useParams();
  const { taskList, isLoading } = useStorage();

  const currentTask = taskList.find((task) => task.taskId === taskId);

  if (isLoading || !currentTask) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Track Your Task</h1>
      <h2>{currentTask.taskName}</h2>
      <p>{taskId}</p>
      <Timer />
    </div>
  );
}
