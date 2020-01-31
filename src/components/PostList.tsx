import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import DarkModeContext from 'utils/theme';

import 'styles/components/PostList.scss';


interface PostListProps {
  cover?: any,
  path: string,
  date?: string,
  title: string,
  excerpt: string,
  section?: string,
  author?: string,
  authorProfileImage?: any,
  isTagItem?: boolean,
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
  isTagItem,
}: PostListProps) => {
  const { getDarkThemeClassName } = useContext(DarkModeContext);
  return (
    <article
      className={
        getDarkThemeClassName('post-list')
      }
    >
      <Link
        to={path}
        className='post-list__link'
      >
        <div className={classNames(
          'post-list__link__info',
          {
            'post-list__link__info--tags': isTagItem,
          }
        )}>
          <div className='post-list__link__info__section'>
            { section }
          </div>
          <h2 className='post-list__link__info__title'>
            { title }
          </h2>
          <div className='post-list__link__info__excerpt'>
            { excerpt }
          </div>
          <div
            className={getDarkThemeClassName(
              'post-list__link__info__explain'
            )}
          >
            {authorProfileImage && (
              <Img
                className='post-list__link__info__explain__author-profile'
                fixed={authorProfileImage}
              />
            )}
            <span className='post-list__link__info__explain__author'>
              { author }
            </span>&nbsp;▪︎&nbsp;
            <span className='post-list__link__info__explain__author__date'>
              {date}
            </span>
          </div>
        </div>
        {cover && (
          <div className='post-list__image'>
            <Img
              className='post-list__image__content'
              fluid={cover}
            />
          </div>
        )}
      </Link>
    </article>
  );
}

export default PostList;
