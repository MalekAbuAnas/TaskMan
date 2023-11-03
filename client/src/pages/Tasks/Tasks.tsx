import "./Tasks.css";
import { Navbar, Task, TaskBar } from "../../components/index";
import { useLocation } from "react-router-dom";

export default function Tasks() {
  const location = useLocation();

  return (
    <div className="tasks">
      <Navbar></Navbar>
      <div className="tasks-text">
        <h1>Welcome {location.state.username}</h1>
        <h3>What are you planning for today?</h3>
        <div className="line mb-5"></div>
      </div>
      <Task></Task>
      <TaskBar></TaskBar>
    </div>
  );
}
