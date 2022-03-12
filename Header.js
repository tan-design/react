import React from 'react';
import HeaderButton from './HeaderButton';
import ThemeContext from './ThemeContext';

function Header() {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div>
      <HeaderButton />
    </div>
  );
}

export default Header;
