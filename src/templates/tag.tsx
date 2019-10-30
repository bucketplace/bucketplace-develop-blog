import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import title from '../../config/site';
import 'styles/templates/tag.scss';


interface TagProps {
  pageContext: {
    posts: {
      frontmatter: {
        path: string,
        title: string,
      }
    }[],
    tagName: string,
  }
}

const Tag = ({ pageContext }: TagProps) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      <Helmet title={`${tagName} | ${title}`} />
      <Header title={upperTag}>
        <Link
          className='tag-link'
          to="/tags"
        >
            All Tags
        </Link>
      </Header>
      <Container>
        <div className='information'>
          {posts.map((post, index) => (
            <Link
              key={index}
              to={post.frontmatter.path}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Tag;
