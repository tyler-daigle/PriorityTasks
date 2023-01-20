import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error404 from "./routes/Error404";
import Home from "./routes/Home";
import TaskTimerPage from "./routes/TaskTimer";
import Layout from "./components/ui/Layout";
import AddTaskPage from "./routes/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/tracktask/:taskId",
    element: <TaskTimerPage />,
  },
  {
    path: "/addtask",
    element: <AddTaskPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
