import classes from './ListSection.module.css'

function TodoItem({ task }: { task: { text: string; checked: boolean } }) {
    return (
        <li>
            <input type="checkbox" className={classes.todoCheckbox} /> {task.text}
        </li>
    );
}

export default TodoItem