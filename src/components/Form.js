import React from 'react';
import uniqid from 'uniqid';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Form = ({setInputText, inputText, setTodos, todos, setToggleForm, toggleForm, finished, resetListHandler}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: uniqid()}
        ]);
        setToggleForm(false);
        setInputText('');
    }

    const addTaskHandler = () => {
        setToggleForm(true);
    };
    
    return (
        <div className="addtask-section">

            <div className={`${finished ? 'hide' : ''}`}>
                <div className={`text-center ${toggleForm ? 'hide' : ''}`}>
                    <button className="btn-blue" onClick={addTaskHandler}>
                        <FontAwesomeIcon icon={faPlus} />&nbsp;
                        Add a task
                    </button>
                </div>
                <form className={`addtask-form ${toggleForm ? '' : 'hide'}`}>
                    <input type="text" className="addtask-input" onChange={inputTextHandler} value={inputText} />
                    <button type="submit" className="btn-blue btn-small btn-addtask" onClick={submitTodoHandler}><FontAwesomeIcon icon={faPlus} /></button>
                </form>
            </div>

            <div className={`text-center ${finished ? '' : 'hide'}`}>
                <button className="btn-teal" onClick={resetListHandler}>
                    Start a new list
                </button>
            </div>

        </div>
    );
}

export default Form;