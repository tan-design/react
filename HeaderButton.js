import React, { ThemeContext } from 'react';
import { buttonThemes } from './App';

function HeaderButton() {
  return (
    <div>
      <button onClick={() => ThemeContext({ buttonThemes })}>Press me</button>
    </div>
  );
}

export default HeaderButton;
