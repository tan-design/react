import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({ date: '', description: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo(''); //tyhjentää todo-staten jolloin tekstikenttä tyhjenee
  };

  function deleteTodo(index) {
    const newTodoes = App.todoes.filter((todo, i) => i !== index);
    App.setTodoes(newTodoes);
  }

  return (
    <div className="App">
      <h1>Simple Todolist</h1>
      <h2>Add todo</h2>
      <div>
        Description:
        <input
          type="text"
          value={todo.description}
          name="description"
          onChange={inputChanged}
        />
        Date:
        <input
          type="date"
          value={todo.date}
          name="date"
          onChange={inputChanged}
        />
        <button onClick={addTodo}>Add</button>
        <table>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th>Date</th>
                <td>{todo.date}</td>
                <th>Description</th>
                <td> {todo.description}</td>
                <td>
                  <button onClick={deleteTodo}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
