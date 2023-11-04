import React, { useState, useEffect } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./api";
import "../Style/CRUD_Operations.css"


function AppCRUD() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    // Fetch tasks from the API when the component mounts
    getTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const handleAddTask = () => {
    if (task) {
      addTask(task)
        .then((response) => {
          setTasks([...tasks, response.data]);
          setTask("");
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
    }
  };

  const handleUpdateTask = (id, updatedTask) => {
    updateTask(id, updatedTask)
      .then(() => {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  const handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => handleUpdateTask(task.id, { completed: !task.completed })}>
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppCRUD;
