import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { title: "This is a title", body: "This is the task" },
    { title: "This is another title", body: "This is another task" },
  ]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");

  function titleChange(e) {
    setTaskTitle(e.target.value);
  }
  function bodyChange(e) {
    setTaskBody(e.target.value);
  }
  function setTodo() {
    if (!taskTitle) {
      alert("Please enter a title for the task.");
      return;
    }
    if (taskTitle.trim() === "") {
      alert("Please enter a valid title for the task.");
      return;
    }
    setTodos((t) => [...t, { title: taskTitle, body: taskBody }]);
    setTaskTitle("");
    setTaskBody("");
  }

  function deleteTask(index) {
    setTodos((t) => t.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const updated = [...todos];
      [updated[index], updated[index - 1]] = [
        updated[index - 1],
        updated[index],
      ];
      setTodos(updated);
    }
  }
  function moveDown(index) {
    if (index < todos.length - 1) {
      const updated = [...todos];
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index],
      ];
      setTodos(updated);
    }
  }

  return (
    <div className="todo">
      <h1 className="todo-title">TODO APP</h1>
      <div className="todo-body">
        <div className="tasks">
          <h1>Tasks</h1>
          <div className="task-list">
            <ol>
              {todos.map((todo, index) => (
                <li key={index}>
                  <div className="entry-title">
                    <h1>{todo.title}</h1>
                    <div className="btns">
                      <button
                        className="delete-btn btn"
                        onClick={() => deleteTask(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn move-btn"
                        onClick={() => moveUp(index)}
                      >
                        Move up
                      </button>
                      <button
                        className="btn move-btn"
                        onClick={() => moveDown(index)}
                      >
                        Move Down
                      </button>
                    </div>
                  </div>
                  <div className="entry-body">
                    <p>{todo.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="input">
        <h1 className="todo-title">Add new tasks</h1>
        <div className="task-title">
          <label htmlFor="title">Task title: </label>
          <input
            type="text"
            name="title"
            value={taskTitle}
            onChange={titleChange}
          />
        </div>
        <div className="task-body">
          <label htmlFor="body">Task body:</label>
          <textarea
            className="textarea"
            name="body"
            value={taskBody}
            onChange={bodyChange}
          />
        </div>
        <button className="add-btn btn" onClick={setTodo}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default Todo;
