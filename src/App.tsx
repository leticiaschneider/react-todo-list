import "./App.css";
import ListSection from "./components/ListSection/ListSection";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState<string>("Index");
  const [tasks, setTasks] = useState<string[]>([
    "Buy groceries",
    "Complete project",
    "Workout",
    "Read a book",
  ]);

  const updateTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <div className="container">
      <Sidebar updateTitle={updateTitle} />
      <ListSection title={title} tasks={tasks} />
    </div>
  );
}

export default App