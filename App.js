import React, { useState } from 'react';
import './App.css';
import TodoApp from './TodoApp';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function App() {
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

        {value === 'one' && <div>Welcome</div>}
        {value === 'two' && (
          <div title="Show Todoes">
            <TodoApp />
          </div>
        )}
      </AppBar>
    </div>
  );
}

export default App;
