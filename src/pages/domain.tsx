import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FacebookShare from '../components/icons/socials/FacebookShare';
import TwitterShare from '../components/icons/socials/TwitterShare';
import LinkedinShare from '../components/icons/socials/LinkedInShare';
import ScreenshotArea from '../components/domain/ScreenshotArea';

import styled from 'styled-components';
import { Heading1, Heading2, Heading3 } from '../components/html/Headings';

const Container = styled.div`
  margin: 0 5%;
  width: 90%;
  display: flex;

  @media (max-width: 968px) {
    width: 100%;
    margin: 0;
    display: block;
  }
`;
const ContainerLeft = styled.div`
  flex-direction: column;
  flex: 1;

  @media (max-width: 968px) {
    flex-direction: row;
  }

  > div {
    overflow-wrap: break-word;
    max-width: 70%;
  }
`;
const ContainerRight = styled.div`
  flex-direction: column;
  flex: 1;

  @media (max-width: 968px) {
    flex-direction: row;
    margin-top: 5em;
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
const ScamStatus = styled.span`
  color: ${(props: ScamStatusProps) =>
    ['active'].indexOf(props.status.toLowerCase()) ? '#5194A2' : '#FF303E'};
`;

interface ScamStatusProps {
  status: string;
}

interface ListGroupProps {
  inline?: boolean;
}

interface Props {
  data: any;
}

const Domain: React.StatelessComponent<Props> = ({ data }: Props) => {
  // @todo - Can I do this any tidier?
  const { allCsdbScamDomains: scam } = data;
  const s = scam.edges[0].node;

  return (
    <Layout imageBg={false} id="domain-view">
      <SEO title={s.name} keywords={[`cryptoscamdb`, `mycrypto`]} />
      <Container>
        <ContainerLeft>
          <div>
            <Heading1 text="Domain:" />
            <ListGroup>
              <li>{s.name}</li>
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="URL:" />
            <ListGroup>
              <li>{s.url}</li>
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="Category:" />
            <ListGroup>
              <li>
                {s.category} - {s.subcategory}
              </li>
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="Description:" />
            <ListGroup>
              <li>{s.description}</li>
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="Status:" />
            <ListGroup>
              <li>
                {s.status.toLowerCase() === 'active' ? (
                  <ScamStatus status="active">Active</ScamStatus>
                ) : (
                  <ScamStatus status="inactive">
                    {s.status === '' ? 'Unknown' : s.status}
                  </ScamStatus>
                )}
              </li>
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="IP:" />
            <span>
              {s.lookups &&
              s.lookups.URLScan &&
              s.lookups.URLScan.results.length > 0 &&
              s.lookups.URLScan.results[0].page.ip
                ? s.lookups.URLScan.results
                    .map((urlscan: any) => urlscan.page.ip)
                    .filter((ip: any, index: number, arr: any) => arr.indexOf(ip) === index)
                    .sort()
                    .join(', ')
                : `No IP (domain not resolving?)`}
            </span>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="Nameservers:" />
            <ListGroup>
              {s.nameservers
                ? s.nameservers.map((ns: string, i: number) => <li key={i}>{ns}</li>)
                : `No Nameservers found (domain not resolving at lookup time)`}
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading2 text="Related Addresses:" />
            <ListGroup>
              {s.addresses
                ? s.addresses.map((ns: string, i: number) => (
                    <li key={i}>
                      <Link to={'/address/' + ns} role="link">
                        {ns}
                      </Link>
                    </li>
                  ))
                : `No Addresses`}
            </ListGroup>
          </div>

          <br />
          <br />

          <div>
            <Heading3 text="Warn your friends" />
            <ListGroup inline={true}>
              <li>
                <TwitterShare
                  text={
                    '⚠️ Watchout for this ' +
                    (s.category ? `#${s.category.toLowerCase()} ` : ``) +
                    'scam ' +
                    (s.subcategory ? `(${s.subcategory.toLowerCase()}) ` : ``) +
                    '- ' +
                    s.url.replace('.', '[.]') +
                    '\r\n#cryptoscamdb'
                  }
                  url={'https://cryptoscamdb.org/scam/' + s.id} /* TODO: fix id */
                />
              </li>
              <li>
                <FacebookShare
                  text={
                    '⚠️ Watchout for this ' +
                    (s.category ? `#${s.category.toLowerCase()} ` : ``) +
                    'scam ' +
                    (s.subcategory ? `(${s.subcategory.toLowerCase()}) ` : ``) +
                    '- ' +
                    s.url.replace('.', '[.]') +
                    '\r\n#cryptoscamdb'
                  }
                  url={'https://cryptoscamdb.org/scam/' + s.id} /* TODO: fix id */
                />
              </li>
              <li>
                <LinkedinShare url={'https://cryptoscamdb.org/scam/' + s.id} /* TODO: fix id */ />
              </li>
            </ListGroup>
          </div>
        </ContainerLeft>

        <ContainerRight>
          <div id="domain-view--details-container-right--screenshot-area">
            {s.lookups && s.lookups.URLScan && s.lookups.URLScan.results ? (
              <ScreenshotArea
                images={s.lookups.URLScan.results
                  .map((r: any) => r._id)
                  .filter(Boolean)
                  .map((r: string) => `https://urlscan.io/screenshots/${r}.png`)}
              />
            ) : (
              // No screenshots available
              <ScreenshotArea images={[]} />
            )}
          </div>
        </ContainerRight>
      </Container>
    </Layout>
  );
};

export default Domain;

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
          hostname
          ip
          nameservers
          status
          statusCode
          updated
          type
          lookups
          abusereport
          csdbId
          addresses
          grouped_addresses {
            ETH
            BTC
            BCH
            XRP
            TRX
            NEO
            XMR
            LTC
          }
        }
      }
    }
  }
`;
