import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';

import Logo from './logo.svg';

import 'styles/layouts/NavBar.scss';

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Link
      className='headroom__link'
      to="/"
    >
      <Logo
        className='headroom__link__logo'
        alt="Ohouse Logo"
      />
    </Link>
    <nav className='headroom__navigation'>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  </Headroom>
);

export default NavBar;
