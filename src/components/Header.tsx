import React from 'react';
import Img from 'gatsby-image';

import 'styles/components/Header.scss';

interface HeaderProps {
  children?: React.ReactElement | string,
  title?: string | Object,
  date?: string | boolean,
  cover?: any,
}

const Header = ({
  children,
  title,
  date,
  cover,
}: HeaderProps) => (
  <header className='header'>
    <Img fluid={cover || {} || [] || ''} />
    <div className='header__content'>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && (
        <div className='header__sub-title'>
          {children}
        </div>
      )}
    </div>
  </header>
);

export default Header;
