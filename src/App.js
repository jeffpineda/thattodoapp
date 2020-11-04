import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import Form from './components/Form';
import ProgressBar from './components/ProgressBar';
import Message from './components/Message';
import Today from './components/Today';

function App() {

  const completionMessages = [
    'Woot woot! You\'re finished!',
    'Great job! You\'re done!',
    '*Hi five* You did it!',
    'Another job well done!'
  ];

  // State
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const [inputText, setInputText] = useState('');
  const [toggleForm, setToggleForm] = useState(false);
  const [finished, setFinished] = useState(false);
  const [completeMessage, setCompleteMessage] = useState('');

  // vars
  const totalTodos = todos.length > 0 ? todos.length : 0;
  const remainingTodos = todos.length > 0 ? todos.filter(el => el.completed === false).length : 0;
  const completedTodos = todos.length > 0 ? todos.filter(el => el.completed === true).length : 0;

  useEffect(() => {
    setCompleteMessage(randomizer(completionMessages));
    getLocalTodos();
  }, []);

  useEffect(() => {
    if (totalTodos > 0 && remainingTodos === 0) {
      setFinished(true);
    } else {
      setFinished(false);
    }
    saveLocalTodos();
  }, [todos]);

  useEffect(() => {
    filterHandler();
  }, [todos, showCompleted]);

  useEffect(() => {
    document.querySelector('.addtask-input').focus();
  }, [toggleForm]);


  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        setTodos(storedTodos);
      }
  }

  const randomizer = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };


  const resetListHandler = () => {
    setTodos([]); // clear todo list
    setCompleteMessage(randomizer(completionMessages));
  };


  const showHideClickHandler = () => {
    setShowCompleted(!showCompleted);
  }

  const filterHandler = () => {
    if ( showCompleted === false ) {
      setFilteredTodos(todos.filter(el => el.completed === false));
    } else if (showCompleted === true) {
      setFilteredTodos(todos);
    }
  }

  // let array = [true, true, false]
  // console.log(array.filter(el => el === false).length);

  let showHideElement;

  if ( todos.length ) {
    showHideElement = 
          <div className="toggle-section">
            <button
              className="btnToggleCompletedTasks"
              onClick={showHideClickHandler}>
              {showCompleted === true ? 'Hide' : 'Show'} Completed
            </button>
          </div>
  }

  return (
    <div className="App">
      <div className="main-section">
        <div className="container">

          <div className="dashboard">

            <Today />
            <Message 
              totalTodos={totalTodos} 
              remainingTodos={remainingTodos}
              completeMessage={completeMessage}
              setFinished={setFinished}
            />
            <ProgressBar 
              totalTodos={totalTodos} 
              completedTodos={completedTodos}
            />
            <Form 
              setTodos={setTodos}
              todos={todos} 
              setInputText={setInputText} 
              inputText={inputText} 
              toggleForm={toggleForm} 
              setToggleForm={setToggleForm}
              finished={finished}
              resetListHandler={resetListHandler}
            />

          </div>

          {showHideElement}

          <TodoList 
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />


        </div>
      </div>
    </div>
  );
}

export default App;
