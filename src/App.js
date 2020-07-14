import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import Task from './components/Task';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      {list.map(( task, i ) => (
        <Task task ={task} setList = {setList} index ={i} list = {list} />
      ))}

      <ToDoList list = {list} setList={setList} />
    </div>
  );
}

export default App;
