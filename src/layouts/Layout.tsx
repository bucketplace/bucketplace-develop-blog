import React, { useContext } from 'react';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer, ToggleButton } from 'layouts';
import DarkModeContext, { DarkModeProvider } from 'utils/theme';

import 'styles/layouts/Layout.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DarkModeProvider>
      <Content>
        { children }
      </Content>
    </DarkModeProvider>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  const { getDarkThemeClassName } = useContext(DarkModeContext);

  return (
    <div className={getDarkThemeClassName('layout')}>
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
