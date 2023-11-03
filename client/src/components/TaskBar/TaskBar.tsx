import axios from "axios";
import "./TaskBar.css";
import { useState } from "react";
import { API } from "../../App";

export default function TaskBar() {
  const [task, setTask] = useState("");

  const addTask = () => {
    axios
      .post(`${API}/addtask`, { task })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setTask("");
  };

  return (
    <div className="taskbar-input-container">
      <div className="diamond" onClick={addTask}></div>
      <input
        type="text"
        className="taskbar Input"
        placeholder="e.g. Do the washing up"
        onChange={(e) => setTask(e.target.value)}
      />
    </div>
  );
}
