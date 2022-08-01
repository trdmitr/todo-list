import React, { useState } from 'react';
import './App.css';
import Mybutton from './UI/buttons/Mybutton';
import TaskItem from './UI/components/TaskItem';
import MyInput from "./UI/inputs/MyInput";

function App() {
  const [tasks, setTasks] = useState(
    [
      { id: 1, check: false, body: "1 задача препервая" },
      { id: 2, check: false, body: "2 задача незадача" },
      { id: 3, check: false, body: "3 задача задач" }
    ]);

    const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))

  const [body, setBody] = useState('');
  const [check, setCheck] = useState(true)
  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id:Date.now(),
      check: false,
      body
    }
    // console.log(newTask, 'task :', ...tasks)
    setTasks([...tasks, newTask])
    setBody('')
    setCheck(true)
  }
  return (
    <div className="App">
      {/* <header>
        <h1>Список задач</h1>
      </header> */}
      {/* INPUT FIELD TO ENTER TASK AND DROPDOWN FILTER */}
      <form>
        <MyInput value={body}
        onChange = {e => setBody(e.target.value)}
         type="text" placeholder="Введите задачу" className="todo_input" />
        <Mybutton
        onClick={addTask}
        className="todo_button" type="submit">
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
      <TaskItem tasks={tasks} title="Список задач"/>
    </div>
  );
}

export default App;
