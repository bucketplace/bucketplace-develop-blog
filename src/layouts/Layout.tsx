import React, { Fragment } from 'react';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';

import 'styles/layouts/Layout.scss';

const Layout = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => (
  <Fragment>
    <SEO />
    <NavBar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
