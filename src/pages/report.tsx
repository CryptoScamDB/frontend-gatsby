import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Report from '../components/report/home';

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

interface Props {
  data: any;
}

const ReportPage: React.StatelessComponent<Props> = ({ data }: Props) => (
  <Layout imageBg={false} id="report-view">
    <SEO title="Report a scam" keywords={[`ethereum`, `report`, `mycrypto`]} />
    <Container>
      <Heading1 text="Report" />

      <Report />
    </Container>
  </Layout>
);

export default ReportPage;
