import React from 'react';

import 'styles/layouts/Content.scss';

const Content = ({ input }: { input: any }) => (
  <div
    className='content-wrap'
    dangerouslySetInnerHTML={{ __html: input }}
  />
);

export default Content;
