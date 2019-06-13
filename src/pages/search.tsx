import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import SearchFunction from '../components/cryptoscamdb/search';

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
      <SearchFunction data={data} />
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
