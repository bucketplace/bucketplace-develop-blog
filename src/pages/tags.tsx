import React from 'react';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

interface TagsProps {
  pageContext: {
    tags: string[]
  }
}
const Tags = ({ pageContext }: TagsProps) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <Header title="Tags Page">Gatsby Tutorial Starter</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;
