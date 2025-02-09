import TodoList from "./TodoList";
import classes from "./ListSection.module.css";

interface ListSectionProps {
  title: string;
  tasks: { text: string; checked: boolean }[];
}

function ListSection({ title, tasks }: ListSectionProps) {
  return (
    <div className={classes.todoContainer}>
      <h2>{title}</h2>
      {
        tasks?.length > 0 ? <TodoList tasks={tasks} /> : "No tasks for now"
      }
    </div>
  );
}

export default ListSection