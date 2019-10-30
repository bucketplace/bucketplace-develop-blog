import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';

import logo from './header-logo.png';

import 'styles/layouts/NavBar.scss';

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Link
      className='headroom__link'
      to="/"
    >
      <img
        src={logo}
        className='headroom__link__logo'
        alt="Gatsby Logo"
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
