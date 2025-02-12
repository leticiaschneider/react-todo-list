import { useState } from "react";
import classes from "./AddTask.module.css";

interface AddTaskProps {
  onAdd: (taskText: string, checked: boolean) => void;
}

function AddTask({ onAdd }: AddTaskProps) {
  const [taskText, setTaskText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    onAdd(taskText, checked);
    setTaskText("");
    setChecked(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className={classes.addTaskContainer}>
      <div
        className={`${classes.checkCircle} ${checked ? classes.checked : ""}`}
        onClick={() => setChecked(!checked)}
      />
      <input
        type="text"
        placeholder="New reminder..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default AddTask;