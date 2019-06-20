import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

import { Heading1 } from '../components/html/Headings';

const Container = styled.div`
  margin: 0 5%;
  width: 90%;

  @media (max-width: 968px) {
    width: 100%;
    margin: 0;
  }
`;

const NotFound: React.StatelessComponent = () => (
  <Layout imageBg={false}>
    <SEO title="404: Not found" />
    <Container>
      <Heading1 text="NOT FOUND" />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFound;
