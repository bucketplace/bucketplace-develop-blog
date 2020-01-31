import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = () => (
  <Layout>
    <Helmet title={'404'} />
    <Header title='404' />
    <Container center>
      <h1>앗! 뭔가가 잘못됬어요!</h1>
      <h3>이 페이지는 존재하지 않는 페이지입니다.</h3>
      <h3>
        <Link to='/'>홈으로 돌아가기</Link>
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

