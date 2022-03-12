import React, { useState, useRef } from 'react';
import './App.css';
import TodoApp from './TodoApp';

import { AgGridReact } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({ date: '', description: '', status: '' });
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState('one');

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '', status: '' });
  };
  const handleChange = (event, value) => {
    setValue(value);
  };
  /*const columns = [
    {
      headerName: ' ',
      field: 'description ',
    },
    {
      headerName: ' ',
      field: 'date',
    },
  ];
  */

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="one" label="Home" />
          <Tab value="two" label="My Todoes" />
        </Tabs>

        {value === 'one' && <div>Welcome</div>}
        {value === 'two' && (
          <div title="Shoe Todoes">
            <TodoApp />
          </div>
        )}
      </AppBar>

      <div>
        <TextField
          label="descripition"
          type="text"
          value={todo.description}
          name="description"
          onChange={inputChanged}
        />

        <TextField
          style={{ margin: 5 }}
          label="date"
          value={todo.date}
          name="date"
          onChange={inputChanged}
        />

        <Button
          style={{ margin: 5 }}
          size="small"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add
        </Button>

        <div
          className="ag-theme-material"
          style={{ width: '45%', height: '700px', margin: 'auto' }}
        >
          <AgGridReact
            ref={gridRef}
            onGridReady={(params) => (gridRef.current = params.api)}
            //columnDefs={columns}
            rowData={todos}
            animateRows="true"
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default App;
