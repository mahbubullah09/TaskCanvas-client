import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const Task = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    fetch("https://task-canvas-server.vercel.app/tasks")
      .then((response) => response.json())

      .then((data) => setTask(data));
  }, []);
  console.log(tasks);

  return (
    <div className="flex gap-6 justify-around mx-10 ">
      <div className="bg-slate-800 text-white w-1/3 min-h-20 p-2 ">
        <h2>To do</h2>
        <div className="">
          {tasks?.map((tasks, idx) => (
            <TaskCard key={idx} tasks={tasks} />
          ))}
        </div>
      </div>
      <div className="bg-slate-800 text-white w-1/3 ">
        <h2>To do</h2>
      </div>
      <div className="bg-slate-800 text-white w-1/3 ">
        <h2>To do</h2>
      </div>
    </div>
  );
};

export default Task;
