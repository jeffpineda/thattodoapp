import React from 'react';

const Message = ({totalTodos, remainingTodos, completeMessage}) => {

    let message;
    let taskWord = remainingTodos > 1 ? 'tasks' : 'task';
    
    if (totalTodos === 0 && remainingTodos === 0) {
        message = 'Start your to-do list!'
    } else if (totalTodos > 0 && remainingTodos !== 0) {
        message = 'You have ' + remainingTodos + ' ' + taskWord + ' left';
    } else if (remainingTodos === 0 && totalTodos > 0) {
        message = completeMessage;
    }

    return (
        <span className="main-msg-text">{message}</span>
    );
}

export default Message;