import TodoList from "./TodoList";
import classes from "./ListSection.module.css";

interface ListSectionProps {
  title: string;
  tasks: string[];
}

function ListSection({ title, tasks }: ListSectionProps) {
  return (
    <div className={classes.todoContainer}>
      <h2>{title}</h2>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default ListSection