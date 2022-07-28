import React, { useState } from 'react';
import './App.css';
import Mybutton from './UI/buttons/Mybutton';
import MyInput from "./UI/inputs/MyInput";

function App() {
  const [tasks, setTasks]  = useState(
    [
      { id: 1, check: false, body: "wgthtjfkfkdnnn 1" },
      { id: 2, check: false, body: "lores ip summm 2" },
      { id: 3, check:false, body: "zhhhhcjjjj d 3" }
    ]);
  
  const [value, setValue] = useState('');
   const addTask = (e) => {
    // e.preventDefault();
    console.log(value)
   }
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Менеджер задач</h1>
      <form>
        <MyInput type="text" 
        placeholder="Введите задачу" 
        className="todo_input"
        onChange={event => setValue(event.target.value)}/>
        <Mybutton className="todo_button" 
        onClick={addTask()}
        type="submit"> 
            <i className="fas fa-plus-square"></i>
        </Mybutton>
        <div className="select">
            <select name="todos" className="filter_todo">
                <option value="all">Все</option>
                <option value="completed">Выполненные</option>
                <option value="uncompleted">Невыполненные</option>
            </select>
        </div>
    </form>
    </div>
  );
}

export default App;
