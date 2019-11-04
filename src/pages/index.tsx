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
            path: string;
            title: string;
            date: string;
            tags?: string[];
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
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fixed}
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
          excerpt
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fixed(width: 200, height: 200) {
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