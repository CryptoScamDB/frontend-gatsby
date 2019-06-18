import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PaginatedTable from '../components/pagination/PaginatedTable';

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

const Verified: React.StatelessComponent<Props> = ({ data }: Props) => {
  // Sort out the table data
  const arrTableData: any[] = [];
  data.allCsdbFeaturedDomain.edges.forEach((domain: any) => {
    const objRecord = {
      name: '',
      url: '',
      description: ''
    };

    objRecord.name = domain.node.name;
    objRecord.url = domain.node.url;
    objRecord.description = domain.node.description;

    arrTableData.push(objRecord);
  });

  return (
    <Layout imageBg={false} id="verified-view">
      <SEO title="Verified Domains" keywords={[`ethereum`, `verified`, `mycrypto`]} />
      <Container>
        <Heading1 text="Verified Domains" />

        <br />

        <PaginatedTable
          totalRecords={data.allCsdbFeaturedDomain.edges.length}
          recordsPerPage={25}
          tableData={arrTableData}
          tableHeaders={['Name', 'URL', 'Description']}
        />
      </Container>
    </Layout>
  );
};

export default Verified;

export const pageQuery = graphql`
  query GetVerifiedDomains {
    allCsdbFeaturedDomain {
      totalCount
      edges {
        node {
          name
          url
          description
        }
      }
    }
  }
`;
