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
    <Link
      to={path}
      className='post-list__link'
    >
      <div className='post-list__link__info'>
        <h2 className='post-list__link__info__title'>
          {title}
        </h2>
        <div>{date}</div>
        <div>{excerpt}</div>
      </div>
      <div className='post-list__image'>
        <Img fixed={cover} />
      </div>
    </Link>
  </article>
);

export default PostList;
