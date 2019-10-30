import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

import 'styles/pages/index.scss';

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string,
          excerpt: string,
          frontmatter: {
            cover: any,
            path: string,
            title: string,
            date: string,
            tags?: string[],
          },
        },
      }[]
    },
  },
}

const Index = ({ data }: IndexProps) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title='Home Page' />
      <Header title='Home Page'>Gatsby Tutorial Starter</Header>
      <div className='post-wrapper'>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
