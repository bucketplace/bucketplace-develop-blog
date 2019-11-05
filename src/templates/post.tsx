import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import 'styles/templates/post.scss';

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
        author: string,
        section: string,
        cover: any,
        disableCoverImage: boolean | null,
        authorProfileImage: any,
      },
      excerpt: string,
    },
  }
}

const Post = ({
  data,
}: PostProps): React.ReactElement => {
  const {
    html,
    frontmatter,
    excerpt
  } = data.markdownRemark
  const {
    date,
    title,
    tags,
    path,
    description,
    author,
    section,
    cover,
    disableCoverImage,
    authorProfileImage
  } = frontmatter;
  return (
    <Layout>
      <SEO
        title={title}
        description={(
          description != null ? (
            description
          ) : excerpt
        )}
        banner={cover.childImageSharp.fluid.src}
        pathname={path}
        article
      />
      <Header
        className='post__header'
        innerClassName='post__header__content'
        contentClassName='post__header__content__wrap'
      >
        <>
          <div className='post__header__content__wrap__title'>
            { title }
          </div>
          { description != null && description != '' && (
            <div className='post__header__content__wrap__description'>
              { description }
            </div>
          )}
          <div className='post__header__content__wrap__author'>
            <Img
              className='post__header__content__wrap__author__img'
              fixed={authorProfileImage.childImageSharp.fixed}
            />
            <span className='post__header__content__wrap__author__name'>
              { author }
            </span>
          </div>
          <div className='post__header__content__wrap__explain'>
            { section }&nbsp;▪︎&nbsp;{date}
          </div>
        </>
      </Header>
      <Container>
        <>
          {!disableCoverImage && (
            <Img fluid={cover.childImageSharp.fluid} />
          )}
          <Content input={html} />
          <TagsBlock list={tags || []} />
        </>
      </Container>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        path
        tags
        date(formatString: "YYYY년 MM월 DD일")
        description
        published
        section
        author
        disableCoverImage
        authorProfileImage {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
