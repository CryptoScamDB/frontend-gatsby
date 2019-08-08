import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DonateEthereum from '../components/icons/donate/DonateEthereum';
import DonateBitcoin from '../components/icons/donate/DonateBitcoin';

import Blurb from '../components/blurb';
import { Heading1, Heading3 } from '../components/html/Headings';

const Container = styled.div`
  padding: 0 2em;
  margin-top: -5em;
  margin-left: 2em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlurbContainer = styled.div`
  margin-top: 5em;
  width: 40%;
  display: flex;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    display: block;
  }

  > p {
    width: 70%;
  }
`;
const ContainerOpenSource = styled.div`
  padding-right: 2em;
  flex: 0 0 50%;

  a {
    color: #fff;
    text-decoration: underline;
    text-decoration-style: dotted;
  }
`;
const ContainerDonate = styled.div`
  flex: 1;

  > ul {
    list-style-type: none;
    display: inline;

    > li {
      display: inline-block;
      padding: 1em;
    }
  }
`;
const IndexNav = styled.div`
  > a {
    display: inline;
    width: 100px;
    margin: 0 1em;

    @media (max-width: 768px) {
      display: block;
      margin: 1em 0;
      width: 80%;
    }
  }
`;

const Index: React.StatelessComponent = () => (
  <Layout imageBg={true} id="main-view">
    <SEO title="Home" keywords={[`ethereum`, `cryptoscamdb`, `mycrypto`]} />

    <Container>
      <Heading1 text="Stay Safe" />
      <Heading1 text="Let us help you." />

      <Blurb
        blurbs={[
          "CryptoScamDB's open-source dataset tracks malicious URLs and their associated addresses to make this entire ecosystem safer for you. It is designed to keep track of malicious URLs and their associated addresses that have the intent of deceiving people for financial gains.",
          'Each day, new reports are gathered, analyzed, and added to our quickly growing dataset containing more than 6,000 entries. Various companies and projects use these entries to shut down scams, prevent people from visiting phishing websites, track known malicious operators, and ultimately protect users across the cryptocurrency ecosystem.'
        ]}
      />

      <IndexNav>
        <Link
          to="/scams"
          style={{
            color: `#fff`,
            textDecoration: `none`,
            background: `#f5c561`,
            backgroundImage: `linear-gradient(to right, #f5c561, #fcab5b)`,
            padding: `15px 50px`,
            borderRadius: `0.3em`
          }}
        >
          See Scams
        </Link>

        <Link
          to="/report"
          style={{
            color: `#fff`,
            textDecoration: `none`,
            padding: `15px 50px`,
            border: `1px solid #fff`,
            borderRadius: `0.3em`
          }}
        >
          Report Scam
        </Link>
      </IndexNav>

      <BlurbContainer>
        <ContainerOpenSource>
          <Heading3 text="Open-Source" />
          <p>
            The full website is open-source and resources to use for your own application are{' '}
            <a href="https://github.com/cryptoscamdb" target="_blank" rel="noreferrer">
              available at GitHub
            </a>
            , including all data sets and documentation.
          </p>
        </ContainerOpenSource>
        <ContainerDonate>
          <Heading3 text="Donate" />
          <p>
            Processing each report takes time. Improving our systems take energy. Keeping the pesky
            servers online takes money. <br />
            Donating to our efforts reduces our personal costs and lets us know you value our work.
            Each donation, no matter how small, is noticed and deeply appreciated.
          </p>
          <ul>
            <li>
              <DonateEthereum />
            </li>
            <li>
              <DonateBitcoin />
            </li>
          </ul>
        </ContainerDonate>
      </BlurbContainer>
    </Container>
  </Layout>
);

export default Index;
