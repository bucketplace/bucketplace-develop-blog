import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Header, BlogList } from 'components';
import { Layout } from 'layouts';

interface BlogProps {
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
      }[],
    },
  },
};

const Blog = ({ data }: BlogProps) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <>
        <Helmet title={'Blog Page'} />
        <Header title="Blog Page">Gatsby Tutorial Starter</Header>
        { edges.map(({ node }) => (
          <BlogList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
        ))}
      </>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
