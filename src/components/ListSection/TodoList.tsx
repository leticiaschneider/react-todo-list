import TodoItem from "./TodoItem";
import classes from './ListSection.module.css'

function TodoList({ tasks }: { tasks: { text: string; checked: boolean }[] }) {
    return (
        <ul className={classes.todoList}>
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </ul>
    );
}

export default TodoList;