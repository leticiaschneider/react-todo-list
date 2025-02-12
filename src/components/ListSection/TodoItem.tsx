import { useState } from "react";
import classes from "./ListSection.module.css";

function TodoItem({ task }: { task: { text: string; checked: boolean } }) {
  const [checked, setChecked] = useState(task.checked);

  return (
    <li className={classes.todoItem}>
      <div
        className={`${classes.checkCircle} ${checked ? classes.checked : ""}`}
        onClick={() => setChecked(!checked)}
      />
      <span className={checked ? classes.completedText : ""}>{task.text}</span>
    </li>
  );
}

export default TodoItem;