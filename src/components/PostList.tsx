import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import 'styles/components/PostList.scss';


interface PostListProps {
  cover: any,
  path: string,
  date?: string,
  title: string,
  excerpt: string,
};

const PostList = ({
  cover,
  path,
  date,
  title,
  excerpt
}: PostListProps) => (
  <article className='post-list'>
    <div className='post-list__image'>
      <Img fluid={cover} />
    </div>
    <Link
      to={path}
      className='post-list__link'
    >
      <div className='post-list__link__info'>
        <span>{date}</span>
        <h2 className='post-list__link__info__title'>
          {title}
        </h2>
        <span>{excerpt}</span>
      </div>
    </Link>
  </article>
);

export default PostList;
