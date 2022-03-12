import React, { useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Todolist from './Todolist';
import './App.css';

function TabApp() {
  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="one" label="Home" />
          <Tab value="two" label="My Todoes" />
        </Tabs>
      </AppBar>
      {value === 'one' && <div>Welcome</div>}
      {value === 'two' && <div>{Todolist}</div>}
    </div>
  );
}
export default TabApp;
