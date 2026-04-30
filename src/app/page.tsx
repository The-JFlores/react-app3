
"use client"; // Enables client-side interactivity

import { useState } from "react";

// Type definition for a task
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

// Main page component
export default function Home() {
  // State to store tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);


  // State for input
  const [input, setInput] = useState("");

  const addTask = () => {
  if (!input) return;

  const newTask: Task = {
    id: Date.now(),
    text: input,
    completed: false,
  };

  setTasks([...tasks, newTask]);
  setInput("");
};

  return (
    <div>
      <h1>Task Manager</h1>

<input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Enter a task"
/>

<button onClick={addTask}>Add</button>
      {/* Render task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}