import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Report from '../components/report/home';

interface Props {
  data: any;
}

const ReportPage: React.StatelessComponent<Props> = ({ data }: Props) => (
  <Layout id="report-view">
    <SEO title="Report a scam" keywords={[`ethereum`, `report`, `mycrypto`]} />

    <h2 id="heading">Report</h2>

    <Report />
  </Layout>
);

export default ReportPage;
