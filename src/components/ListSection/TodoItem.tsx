import classes from './ListSection.module.css'

function TodoItem({ task }: { task: string }) {
    return (
        <li>
            <input type="checkbox" className={classes.todoCheckbox} /> {task}
        </li>
    );
}

export default TodoItem