import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import 'styles/templates/post.scss';

const PostSuggestion = ( {
  children,
} : {children: React.ReactElement}) => {
  return (
    <div className='post-suggestion'>
      { children }
    </div>
  )
}

interface PostProps {
  pageContext: {
    prev: {
      frontmatter: {
        path: string,
        title: string,
      },
    },
    next: {
      frontmatter: {
        path: string,
        title: string,
      },
    },
  },
  data: {
    markdownRemark: {
      html: any,
      frontmatter:{
        date: string | boolean,
        title: string | object | boolean,
        tags: string[],
        path: string,
        description: string,
        cover: any,
      },
      excerpt: string,
    },
  }
}

const Post = ({
  data,
  pageContext,
}: PostProps): React.ReactElement => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, tags, path, description} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
        <TagsBlock list={tags || []} />
      </Container>
      <div className='suggestion-bar'>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </div>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
