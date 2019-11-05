import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header, PostList } from 'components';
import config from '../../config/site';
import 'styles/templates/tag.scss';


interface TagProps {
  pageContext: {
    posts: {
      node: {
        id: string;
        excerpt: string;
        frontmatter: {
          path: string;
          title: string;
          date: string;
          tags?: string[];
          description?: string,
          section?: string,
          author?: string,
        };
      },
    }[],
    tagName: string,
  }
}

const Tag = ({ pageContext }: TagProps) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);

  return (
    <Layout>
      <Helmet title={`#${tagName} | ${config.title}`} />
      <Header title={`#${upperTag}`} />
      <Container>
        <div className='information'>
          {posts.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const {
              path,
              title,
              date,
              description,
              section,
              author,
            } = frontmatter;
            return (
              <PostList
                key={id}
                path={path}
                title={title}
                date={date}
                excerpt={(
                  description != null &&
                  description != '' ?
                    description : excerpt
                )}
                section={section}
                author={author}
                isTagItem
              />
            )})}
        </div>
      </Container>
    </Layout>
  );
};

export default Tag;
