import React, { useContext } from 'react';
import classNames from 'classnames';
import Img from 'gatsby-image';

import DarkModeContext from 'utils/theme';

import 'styles/components/Header.scss';

interface HeaderProps {
  className?: string,
  innerClassName?: string,
  contentClassName?: string,
  subTitleClassName?: string,
  children?: React.ReactElement | string,
  title?: string | Object,
  date?: string | boolean,
  cover?: any,
}

const Header = ({
  className,
  innerClassName,
  contentClassName,
  subTitleClassName,
  children,
  title,
  date,
  cover,
}: HeaderProps) => {
  const { getDarkThemeClassName } = useContext(DarkModeContext)

  return (
    <header
      className={classNames(
        getDarkThemeClassName('header'),
        className && className,
      )}
    >
      <Img fluid={cover || {} || [] || ''} />
      <div className={classNames(
        'header__content',
        innerClassName && innerClassName,
      )}>
        <div className={classNames(
          'header__content__wrap',
          contentClassName && contentClassName,
        )}>
          <h1>{title}</h1>
          <h3>{date}</h3>
  
          {children && (
            <div className={classNames(
              getDarkThemeClassName('header__sub-title'),
              subTitleClassName && subTitleClassName
            )}>
              {children}
            </div>
          )}
        </div>
      </div>
    </header>
  )
};

export default Header;
