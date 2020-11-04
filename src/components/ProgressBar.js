import React from 'react';

const ProgressBar = ({totalTodos, completedTodos}) => {

    let percentage = completedTodos / totalTodos * 100;

    return (
        <div>
            <div className={`progress-bar ${percentage === 100 ? 'finished' : ''}`}>
                <div className="progress-bar__fill" style={{width: ( isNaN(percentage) ? 0 : percentage ) + '%'}}></div>
            </div>
            <span className={`progress-bar__text ${totalTodos ? '' : 'hidden'}`}>{completedTodos}/{totalTodos}</span>
        </div>
    );
}

export default ProgressBar;