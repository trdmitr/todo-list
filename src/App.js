import React, { useState } from 'react';
import './App.css';
import Mybutton from './UI/buttons/Mybutton';
import MyInput from "./UI/inputs/MyInput";

function App() {
  const [tasks, setTasks] = useState(
    [
      { id: 1, check: false, body: "wgthtjfkfkdnnn 1" },
      { id: 2, check: false, body: "lores ip summm 2" },
      { id: 3, check: false, body: "zhhhhcjjjj d 3" }
    ]);

    const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))

  const [value, setValue] = useState('');
  const addTask = (e) => {
    e.preventDefault();
    console.log(value)
  }
  return (
    <div className="App">
      <header>
        <h1>Список задач</h1>
      </header>
      {/* INPUT FIELD TO ENTER TASK AND DROPDOWN FILTER */}
      <form>
        <MyInput type="text" placeholder="Введите задачу" className="todo_input" />
        <Mybutton className="todo_button" type="submit">
          <i className="fas fa-plus-square" />
        </Mybutton>
        <div className="select">
          <select name="todos" className="filter_todo">
            <option value="all">Все</option>
            <option value="completed">Выполненные</option>
            <option value="uncompleted">Невыполненные</option>
          </select>
        </div>
      </form>

      <div className="todo_container">
        <ul className="todo_list">
          <div className="todo">
            <li className="todo_item">1 задача</li><button className="complete_btn"><i className="fas fa-check" /></button><button className="delete_btn"><i className="fas fa-trash" /></button></div>
          <div className="todo">
            <li className="todo_item">2 задача</li><button className="complete_btn"><i className="fas fa-check" /></button><button className="delete_btn"><i className="fas fa-trash" /></button></div>
          <div className="todo">
            <li className="todo_item">3 задача</li><button className="complete_btn"><i className="fas fa-check" /></button><button className="delete_btn"><i className="fas fa-trash" /></button></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
