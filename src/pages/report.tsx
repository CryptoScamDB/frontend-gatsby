import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
  data: any;
}

const Report: React.StatelessComponent<Props> = ({ data }: Props) => (
  <Layout id="report-view">
    <SEO title="Report a scam" keywords={[`ethereum`,`report`,`mycrypto`]} />

    <h2 id="heading">Report</h2>

    <br />
        
  </Layout> 
);

export default Report;