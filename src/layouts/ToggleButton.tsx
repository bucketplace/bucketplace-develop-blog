import React, { useContext } from 'react';

import DarkModeContext from 'utils/theme';

import 'styles/layouts/ToggleButton.scss';

const ToggleButton = () => {
  const {
    theme,
    toggleTheme,
    getDarkThemeClassName,
  } = useContext(DarkModeContext);

  return (
    <div
      className={getDarkThemeClassName('toggle-button')}
      onClick={() => toggleTheme()}
    >
      {theme ? (
        <img
          className="emoji"
          src="//twemoji.maxcdn.com/2/svg/1f315.svg"
          alt="🌕"
        />
      ) : (
        <img
          className='emoji'
          src="//twemoji.maxcdn.com/2/svg/2600.svg"
          alt="☀️"
        />
      )}
    </div>
  )
}

export default ToggleButton;
