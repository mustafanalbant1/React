import { useDispatch, useSelector } from "react-redux";
import { changeActiveFilter, clearCompleted, selectedTodos } from "../redux/todos/todosSlice";
import { useEffect } from "react";

function ContentFooter() {
    const dispatch = useDispatch();
    const items = useSelector(selectedTodos);
    const itemsLeft = items.filter((item) => !item.completed).length;
    const activeFilter = useSelector(state => state.todos.activeFilter);


    useEffect(() => {
        localStorage.setItem('activeFilter', activeFilter)
    }, [activeFilter])
    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{itemsLeft}</strong>
                    item{itemsLeft > 1 && 's'} left
                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" className={activeFilter === 'all' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter('all'))}>All</a>
                    </li>
                    <li>
                        <a href="#/" className={activeFilter === 'active' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter('active'))}>Active</a>
                    </li>
                    <li>
                        <a href="#/" className={activeFilter === 'completed' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter('completed'))}>Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                    Clear completed
                </button>
            </footer>
        </div>
    );
}

export default ContentFooter;