import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FacebookShare from '../components/icons/socials/FacebookShare';
import TwitterShare from '../components/icons/socials/TwitterShare';
import LinkedinShare from '../components/icons/socials/LinkedInShare';

interface Props {
  data: any;
  pageContext: any;
}

const Address: React.StatelessComponent<Props> = ({ data, pageContext }: Props) => {
  const { allCsdbScamDomains: scam } = data;
  const s = scam.edges;

  const ips = [];
  const distinctIps = new Set(s.map(record => record.node.ip));
  distinctIps.forEach((a: any, b: any, c: any) => ips.push(b));

  return (
    <Layout id="domain-view">
      <SEO title={s.name} keywords={[`cryptoscamdb`, `mycrypto`]} />
      <section id="domain-view--details-container">
        <div id="domain-view--details-container-left">
          <div>
            <div>
              <span className="heading">Address:</span>
              <span>{pageContext.slug}</span>
            </div>

            <br />
            <br />

            <span className="heading">Associated Domains:</span>
            <ul>
              {s.map((record: any) => (
                <li key={record.node.name}>
                  <Link to={'/domain/' + record.node.csdbId} role="link">
                    {record.node.name}
                  </Link>
                </li>
              ))}
            </ul>

            <br />
            <br />

            <span className="heading">Associated IPs:</span>
            <ul>
              {ips.map((ip: string) => (
                <li key={ip}>{ip}</li>
              ))}
            </ul>

            <br />
            <br />

            <div>
              <span className="heading--sub">Warn your friends</span>
              <ul id="social">
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
              </ul>
            </div>
          </div>
        </div>
      </section>
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
