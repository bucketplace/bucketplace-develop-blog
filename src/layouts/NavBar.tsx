import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';

import Logo from './logo.svg';

import DarkModeContext from 'utils/theme';

import 'styles/layouts/NavBar.scss';

const NavBar = () => {
  const { getDarkThemeClassName } = useContext(DarkModeContext);

  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <div className='headroom__wrap'>
        <Link
          className={getDarkThemeClassName('headroom__link')}
          to='/'
        >
          <Logo
            className='headroom__link__logo'
            alt='Ohouse Logo'
          />
        </Link>
        <nav className='headroom__navigation'>
          <a
            href='http://bucketplace.co.kr/brand-story'
            className={getDarkThemeClassName('headroom__navigation__link')}
            target="self"
          >
            회사소개
          </a>
          <Link
            to='/'
            className={getDarkThemeClassName('headroom__navigation__link')}
            activeClassName='headroom__navigation__link--active'
          >
            채용
          </Link>
          <Link
            to='/'
            className={getDarkThemeClassName('headroom__navigation__link')}
            activeClassName='headroom__navigation__link--active'
          >
            사람들
          </Link>
          <Link
            to='/'
            className={getDarkThemeClassName('headroom__navigation__link')}
            activeClassName='headroom__navigation__link--active'
          >
            블로그
          </Link>
        </nav>
      </div>
    </Headroom>
  );
};

export default NavBar;
