import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Header, PostList } from 'components';
import { Layout } from 'layouts';

import BannerCharacter from './banner-character.svg';

import 'styles/pages/index.scss';

interface IndexProps {
  data: {
    file: {
      childImageSharp: any;
    };
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          excerpt: string;
          frontmatter: {
            cover: any;
            authorProfileImage?: any;
            path: string;
            title: string;
            date: string;
            tags?: string[];
            description?: string,
            section?: string,
            author?: string,
            published: boolean,
          };
        };
      }[];
    };
  };
}

const Index = ({ data }: IndexProps) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title='오늘의집 기술 블로그' />
      <Header
        className='main__header'
        innerClassName='main__header__content'
        contentClassName='main__header__content__wrap'
      >
        <>
          <div className='main__header__content__wrap__title'>
            누구나 예쁜 집에 살 수 있게 만드는
            <br />
            여기는 오늘의집입니다.
            <a
              className='main__header__content__wrap__btn'
              href='http://bucketplace.co.kr/recruit'
              target="self"
            >
              채용중인 포지션
            </a>
          </div>
          <BannerCharacter className='main__header__content__character'/>
        </>
      </Header>
      <div className='post-wrapper'>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const {
            cover,
            path,
            title,
            date,
            description,
            section,
            author,
            authorProfileImage,
            published,
          } = frontmatter;
          if (!published) return null;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
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
              authorProfileImage={authorProfileImage.childImageSharp.fixed}
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
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            tags
            date(formatString: "YYYY년 MM월 DD일")
            description
            published
            section
            author
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            authorProfileImage {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
