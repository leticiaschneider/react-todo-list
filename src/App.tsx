import "./App.css";
import ListSection from "./components/ListSection/ListSection";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState<string>("Index");
  const [allTasks] = useState<{ category: string; text: string; checked: boolean }[]>([
    { category: "Personal", text: "Buy groceries", checked: false },
    { category: "Work", text: "Complete project", checked: true },
    { category: "Index", text: "Workout", checked: false },
    { category: "Personal", text: "Read a book", checked: false },
  ]);
  
  const [tasks, setTasks] = useState<{ text: string; checked: boolean }[]>([]);

  const updateTitle = (newTitle: string) => {
    setTitle(newTitle);
    const filteredTasks = allTasks.filter(item => item.category === newTitle);
    setTasks(filteredTasks);
  };

  return (
    <div className="container">
      <Sidebar onUpdateTitle={updateTitle} />
      <ListSection title={title} tasks={tasks} />
    </div>
  );
}

export default App