import React from 'react';
import { Link } from 'gatsby';

import 'styles/components/TagsBlock.scss';

interface TagsBlockProps {
  list?: string[],
}

const TagsBlock = ({ list }: TagsBlockProps) => (
  <div className='tags-container'>
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return (
          <Link key={tag} to={`/tags/${tag}`}>
            <span>{upperTag}</span>
          </Link>
        );
      })}
  </div>
);

export default TagsBlock;
