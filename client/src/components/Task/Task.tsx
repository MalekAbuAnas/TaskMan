import "./Task.css";

export default function Task() {
  return (
    <div className="task-container container">
      <div className="diamond"></div>
      <div className="task">
        <div className="task-data">
          <h1>Do the washing up</h1>
          <div className="task-btns">
            <button className="Button-task mx-3">Done</button>
            <button className="Button-outline-task mx-3">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
