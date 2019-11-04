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
  section?: string,
  author?: string,
  authorProfileImage?: any,
};

const PostList = ({
  cover,
  path,
  date,
  title,
  excerpt,
  section,
  author,
  authorProfileImage,
}: PostListProps) => (
  <article className='post-list'>
    <Link
      to={path}
      className='post-list__link'
    >
      <div className='post-list__link__info'>
        <div className='post-list__link__info__section'>
          { section }
        </div>
        <h2 className='post-list__link__info__title'>
          { title }
        </h2>
        <div className='post-list__link__info__excerpt'>
          {excerpt}
        </div>
        <div className='post-list__link__info__explain'>
          <Img
            className='post-list__link__info__explain__author-profile'
            fixed={authorProfileImage}
          />
          <span className='post-list__link__info__explain__author'>
            { author }
          </span>&nbsp;▪︎&nbsp;{date}
        </div>
      </div>
      <div className='post-list__image'>
        <Img
          className='post-list__image__content'
          fluid={cover}
        />
      </div>
    </Link>
  </article>
);

export default PostList;
