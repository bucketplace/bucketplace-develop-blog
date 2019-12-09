import React, { useContext } from 'react';

import DarkModeContext from 'utils/theme';

import 'styles/layouts/Footer.scss';

const Footer = () => {
  const { getDarkThemeClassName } = useContext(DarkModeContext);
  return (
    <footer
      className={
        getDarkThemeClassName('wrap')
      }
    >
      <div className='wrap__content'>
        <a href="http://bucketplace.co.kr/">Copyright (c) Bucketplace, Inc.</a>
      </div>
    </footer>
  )
};
export default Footer;
