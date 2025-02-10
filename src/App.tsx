import "./App.css";
import ListSection from "./components/ListSection/ListSection";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

interface Task {
  category: string;
  text: string;
  checked: boolean;
}

function App() {
  const [title, setTitle] = useState<string>("Index");
  const [allTasks, setAllTasks] = useState<Task[]>([
    { category: "Personal", text: "Buy groceries", checked: false },
    { category: "Work", text: "Complete project", checked: true },
    { category: "Index", text: "Workout", checked: false },
    { category: "Personal", text: "Read a book", checked: false },
  ]);

  const [tasks, setTasks] = useState<Task[]>(allTasks.filter(task => task.category === title));

  const updateTitle = (newTitle: string) => {
    setTitle(newTitle);
    setTasks(allTasks.filter(task => task.category === newTitle));
  };

  const addTask = (taskText: string, checked: boolean) => {
    const newTask: Task = { category: title, text: taskText, checked };
    const updatedTasks = [...allTasks, newTask];

    setAllTasks(updatedTasks);
    setTasks(updatedTasks.filter(task => task.category === title));
  };


  return (
    <div className="container">
      <Sidebar onUpdateTitle={updateTitle} />
      <ListSection title={title} tasks={tasks} onAddTask={addTask} />
    </div>
  );
}

export default App;