
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

  return (
    <div>
      <h1>Task Manager</h1>

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