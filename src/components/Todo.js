import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faCheck} from '@fortawesome/free-solid-svg-icons';

const Todo = ({todos, todo, setTodos}) => {

    const deleteTodoHandler = (e) => {
        e.preventDefault();

        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeTodoHandler = (e) => {
        e.preventDefault();

        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el;
        }));
    }

    return (
        <div className={`tasklist__item ${todo.completed === true ? 'completed' : ''}`}>
            <div className="tasklist__item-left">
                <button className="checkbox" onClick={completeTodoHandler}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <span>{todo.text}</span>
            </div>
            <div className="tasklist__item-right">
                <button className="delete-task" onClick={deleteTodoHandler}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    );
}

export default Todo;