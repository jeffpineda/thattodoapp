import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="tasklist">
            {filteredTodos.map(el => {
                return(
                    <Todo todos={todos} todo={el} setTodos={setTodos} key={el.id} />
                );
            })}
        </div>
    );
}

export default TodoList;