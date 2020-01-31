import React, { useContext } from 'react';
import { Link } from 'gatsby';

import DarkModeContext from 'utils/theme';

import 'styles/components/TagsBlock.scss';

interface TagsBlockProps {
  list?: string[],
}

const TagsBlock = ({ list }: TagsBlockProps) => {
  const { getDarkThemeClassName } = useContext(DarkModeContext);

  return (
    <div className={getDarkThemeClassName('tags-container')}>
      {list &&
        list.map(tag => {
          const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
          return (
            <Link key={tag} to={`/tags/${tag}`}>
              <span>{upperTag}</span>
            </Link>
          );
        })
      }
    </div>
  )
}

export default TagsBlock;
