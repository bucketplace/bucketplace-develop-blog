import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';

import Logo from './logo.svg';

import 'styles/layouts/NavBar.scss';

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <div className='headroom__wrap'>
      <Link
        className='headroom__link'
        to='/'
      >
        <Logo
          className='headroom__link__logo'
          alt='Ohouse Logo'
        />
        기술 블로그
      </Link>
      <nav className='headroom__navigation'>
        <Link
          to='/about'
          className='headroom__navigation__link'
          activeClassName='headroom__navigation__link--active'
        >
          소개
        </Link>
        <Link
          to='/'
          className='headroom__navigation__link'
          activeClassName='headroom__navigation__link--active'
        >
          블로그
        </Link>
      </nav>
    </div>
  </Headroom>
);

export default NavBar;
