import TodoList from "./TodoList";
import AddTask from "./AddTask";
import classes from "./ListSection.module.css";

interface ListSectionProps {
  title: string;
  tasks: { text: string; checked: boolean }[];
  onAddTask: (taskText: string) => void;
}

function ListSection({ title, tasks, onAddTask }: ListSectionProps) {
  return (
    <div className={classes.todoContainer}>
      <h2>{title}</h2>
      <TodoList tasks={tasks} />
      <AddTask onAdd={onAddTask} />
    </div>
  );
}

export default ListSection;