import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const SubHeading = styled.h2`
  padding: 0 3.5em;
`;
const MissionBlock = styled.p`
  padding: 0 5em;
`;

const MISSION_PAGE: React.StatelessComponent = () => (
  <Layout id="mission-view">
    <SEO title="Misson Statement" keywords={[`ethereum`, `mission statement`, `mycrypto`]} />

    <h1 id="heading">Mission Statement</h1>

    <MissionBlock>
      CryptoScamDB LLC, powered by{' '}
      <a href="https://mycrypto.com" target="_blank" rel="noreferrer">
        MyCrypto, Inc.
      </a>
      , is dedicated to creating a safer cryptospace by educating the public on best security
      practices, uncovering malicious actors, and exposing scams, as well as providing scam
      detection services that can be integrated into existing products.
    </MissionBlock>

    <SubHeading>Open Source</SubHeading>
    <MissionBlock>
      We strive to gather and analyze data that can be shared with various projects to prevent and
      shut down scams and their operators, as well as to protect users in the cryptocurrency
      ecosystem. The CSDB team believes in the value of freely spreading information about scams,
      phishing, or other fraudulent activity we’ve identified, and has made our code and databases
      readily available to the general public.
    </MissionBlock>

    <SubHeading>Monetization</SubHeading>
    <MissionBlock>
      CSDB was not designed to make us rich. In fact, we hope that the project can run primarily on
      donations and benefit from community participation in the form of bounties. Stopping
      fraudsters/phishers and safeguarding the public should never come second to turning profits,
      even if CSDB, LLC is eventually absorbed into another enterprise. Revenue acquired through
      donations, API usage, or otherwise will mainly be used to maintain and further develop CSDB.
    </MissionBlock>

    <SubHeading>Privacy & Transparency</SubHeading>
    <MissionBlock>
      CSDB aims to be clear, fair, and transparent with regards to user privacy, user reporting, and
      blacklisting choices. You can read MyCrypto’s{' '}
      <a href="https://about.mycrypto.com/privacy/" target="_blank" rel="noreferrer">
        full privacy policy here
      </a>
      , but relevant information specific to CSDB is detailed below.
    </MissionBlock>
    <MissionBlock>
      CSDB aims to collect little or no personally identifiable information. CSDB will never share
      nor sell visitor information with third parties without the explicit consent of the visitor or
      as is required by law. We utilize a minimal, self-hosted analytics platform to help us improve
      our product, including which features people use and how many views pages have, but we do not
      collect any personally-identifiable information from visitors of our products.
    </MissionBlock>
  </Layout>
);

export default MISSION_PAGE;
