import React from 'react';
import classNames from 'classnames';

import 'styles/layouts/Container.scss';

interface ContainerProps {
  children?: React.ReactElement | React.ReactElement[],
  className?: string,
  center?: boolean,
}

const Container = ({
  children,
  center,
  className
}: ContainerProps) => (
  <section
    className={classNames(
      'container',
      center && 'container--center',
      className
    )}
  >
    {children}
  </section>
);

export default Container;
