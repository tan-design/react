import React, { useState, useRef } from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({ date: '', description: '' });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  const deleteTodo = (row) => {
    setTodos(
      todos.filter(
        (todo, index) =>
          index !== gridRef.current.getSelectedNodes()[0].childIndex
      )
    );
  };

  const columns = [
    {
      headerName: 'Description',
      field: 'descrioption',
      sortable: 'true',
      filter: true,
    },
    { headerName: 'Date', field: 'date', sortable: 'true', filter: true },
    {
      headerName: 'Status',
      field: 'status',
      sortable: 'true',
      filter: true,
      cellStyle: (parmas) =>
        parmas.value === 'High' ? { color: 'red' } : { color: 'black' },
    },
  ];

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
        <input
          type="status"
          value={todo.status}
          name="status"
          onChange={inputChanged}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteTodo}>Delete</button>
        <div
          className="ag-theme-material"
          style={{ width: '40%', height: '700px', margin: 'auto' }}
        >
          <AgGridReact
            ref={gridRef}
            onGridReady={(params) => (gridRef.current = params.api)}
            rowSelection="single"
            columnDefs={columns}
            rowData={todos}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default App;
