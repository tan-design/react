import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({ date: '', description: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.value]: event.target.value });
  };
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo(''); //tyhjentää todo-staten jolloin tekstikenttä tyhjenee
  };

  return (
    <div className="App">
      <input value={todo} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
