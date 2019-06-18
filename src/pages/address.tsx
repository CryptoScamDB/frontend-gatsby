import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FacebookShare from '../components/icons/socials/FacebookShare';
import TwitterShare from '../components/icons/socials/TwitterShare';
import LinkedinShare from '../components/icons/socials/LinkedInShare';

import styled from 'styled-components';
import { Heading1, Heading2, Heading3 } from '../components/html/Headings';

const Container = styled.div`
  margin: 0 5%;
  width: 90%;

  @media (max-width: 968px) {
    width: 100%;
    margin: 0;
  }
`;
const ListGroup = styled.ul`
  padding-top: 0.5em;
  list-style-type: none;

  > li {
    display: ${(props: ListGroupProps) => (props.inline ? 'inline' : 'block')};
    padding-right: ${(props: ListGroupProps) => (props.inline ? '1em' : '0em')};
  }
`;

interface ListGroupProps {
  inline?: boolean;
}

interface Props {
  data: any;
  pageContext: any;
}

const Address: React.StatelessComponent<Props> = ({ data, pageContext }: Props) => {
  const { allCsdbScamDomains: scam } = data;
  const s = scam.edges;

  const distinctIps = s.map(record => record.node.ip);

  return (
    <Layout imageBg={false} id="domain-view">
      <SEO title={s.name} keywords={[`cryptoscamdb`, `mycrypto`]} />
      <Container>
        <div id="domain-view--details-container-left">
          <div>
            <div>
              <Heading1 text="Address:" />
              <span>{pageContext.slug}</span>
            </div>

            <br />
            <br />

            <Heading2 text="Associated Domains:" />
            <ListGroup inline={false}>
              {s.map((record: any) => (
                <li key={record.node.name}>
                  <Link to={'/domain/' + record.node.csdbId} role="link">
                    {record.node.name}
                  </Link>
                </li>
              ))}
            </ListGroup>

            <br />
            <br />

            <Heading2 text="Associated IPs:" />
            <ListGroup inline={false}>
              {distinctIps.map((ip: string) => (
                <li key={ip}>{ip}</li>
              ))}
            </ListGroup>

            <br />
            <br />

            <div>
              <Heading3 text="Warn your friends" />
              <ListGroup inline={true}>
                <li>
                  <TwitterShare
                    text={
                      `⚠️ Watchout for this address (${pageContext.slug}), flagged as malicious` +
                      `\r\n#cryptoscamdb`
                    }
                    url={'https://cryptoscamdb.org/address/' + pageContext.slug}
                  />
                </li>
                <li>
                  <FacebookShare
                    text={
                      `⚠️ Watchout for this address (${pageContext.slug}), flagged as malicious` +
                      `\r\n#cryptoscamdb`
                    }
                    url={'https://cryptoscamdb.org/address/' + pageContext.slug}
                  />
                </li>
                <li>
                  <LinkedinShare url={'https://cryptoscamdb.org/address/' + pageContext.slug} />
                </li>
              </ListGroup>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Address;

export const pageQuery = graphql`
  query($slug: String) {
    allCsdbScamDomains(filter: { addresses: { eq: $slug } }) {
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
