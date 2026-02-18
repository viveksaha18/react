import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  function renderTask() {
    setTasks([...tasks, task])
    setTask("")
  } 
  return (
    <>
      <div className="h-screen  flex flex-col items-center  p-10 gap-5 border-2 border-red-500">
        <div className="h-100 w-80 border-2 border-black-500 rounded items-center flex flex-col gap-5 p-5">
          <h1 className='text-2xl font-bold'>Todo Application....</h1>
          <input type="text" placeholder="Enter Your Task"  
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          />
          <button 
          onClick={renderTask}
          className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
          {/* /**Render List */ }
          <ul className="flex flex-col gap-2">
          {tasks.map((t, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded">
              {t}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;
