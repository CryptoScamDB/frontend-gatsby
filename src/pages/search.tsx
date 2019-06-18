import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';
import SearchFunction from '../components/cryptoscamdb/search';

const Container = styled.div`
  margin: 0 5%;
  width: 90%;

  @media (max-width: 968px) {
    width: 100%;
    margin: 0;
  }
`;

interface ScamStatusProps {
  status: string;
}

interface IProps {
  data: any;
}

const Search: React.StatelessComponent<IProps> = ({ data }: IProps) => {
  return (
    <Layout imageBg={false} id="domain-view">
      <SEO title="Search CryptoScamDB" keywords={[`cryptoscamdb`, `mycrypto`]} />
      <Container>
        <SearchFunction data={data} />
      </Container>
    </Layout>
  );
};

export default Search;

export const pageQuery = graphql`
  query($slug: String) {
    allCsdbScamDomains(filter: { csdbId: { eq: $slug } }) {
      edges {
        node {
          id
          name
          url
          category
          subcategory
          description
          reporter
          severity
          path
          coin
          hostname
          ip
          nameservers
          status
          statusCode
          updated
          type
          lookups {
            URLScan {
              total
              results {
                page {
                  ip
                }
                _id
              }
            }
          }
          abusereport
          csdbId
          addresses
        }
      }
    }
  }
`;
