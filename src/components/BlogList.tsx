import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from 'components';
import { Container } from 'layouts';

import 'styles/components/BlogList.scss'

interface BlogListProps {
  cover: any,
  path: string,
  excerpt?: string,
  date: string,
  title: string,
  tags?: string[],
}

const BlogList = ({
  path,
  cover,
  title,
  date,
  excerpt,
  tags,
}: BlogListProps) => (
  <Container>
    <div className='blog-list'>
      <div className='blog-list__image'>
        <Link to={path} title={title}>
          <Img fluid={cover} />
        </Link>
      </div>
      <div className='blog-list__information'>
        <div className='blog-list__information__date'>{date}</div>
        <Link to={path}>
          <h1>{title}</h1>
        </Link>
        <TagsBlock list={tags} />
        {excerpt}
      </div>
    </div>
  </Container>
);

export default BlogList;
