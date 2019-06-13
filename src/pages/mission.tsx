import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const SubHeading = styled.h2`
  padding: 0 3.5em;
`;
const MissionBlock = styled.p`
  padding: 0 5em;

  > ul {
    padding-left: 2em;
  }
`;

const MISSION_PAGE: React.StatelessComponent = () => (
  <Layout imageBg={false} id="mission-view">
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

    <br />

    <MissionBlock>
      <a href="https://etherscamdb.info" target="_blank" rel="noreferrer">
        EtherScamDB.info
      </a>{' '}
      and{' '}
      <a href="https://cryptoscamdb.org" target="_blank" rel="noreferrer">
        CryptoScamDB.org
      </a>{' '}
      were created to gather and analyze data that can be shared with various projects, law
      enforcement agencies, and related organizations to prevent and terminate phishing, theft, and
      scams, assist in identifying and potentially leading to the arrest of these scams’ operators,
      as well as generally protecting users in the cryptocurrency ecosystem.
    </MissionBlock>
    <MissionBlock>
      <a href="https://etherscamdb.info" target="_blank" rel="noreferrer">
        EtherScamDB.info
      </a>{' '}
      and{' '}
      <a href="https://cryptoscamdb.org" target="_blank" rel="noreferrer">
        CryptoScamDB.org
      </a>{' '}
      are unique from other MyCrypto products in that they offer a "report" functionality. This
      allows any person to make a report (collectively these are the "Raw Reports") regarding items
      such as suspicious website URLs, suspicious cryptocurrency addresses, and scams being
      propagated via social media, or to report that their own cryptocurrencies have been stolen.
    </MissionBlock>
    <MissionBlock>
      Depending on the circumstances, people using the "report" functionality may be prompted to
      provide:
      <ul>
        <li>Their cryptocurrency public address</li>
        <li>The cryptocurrency public address they sent funds to</li>
        <li>Website(s) visited</li>
        <li>Suspicious website URLs</li>
        <li>Suspicious cryptocurrency public addresses</li>
        <li>Additional information the user wishes to share</li>
      </ul>
    </MissionBlock>
    <MissionBlock>
      These Raw Reports are sent and stored in a MyCrypto communications channel, and some of the
      data is mirrored to a MongoDB server hosted by mLab. These reports are generally not
      immediately deleted but marked as processed. We aim to destroy any reports containing
      sensitive or personal information as soon as possible. However, there are instances when
      deletion may take longer than expected.
    </MissionBlock>
    <MissionBlock>
      These reports may be kept in digital form, as permitted by law, and kept in a manner that is
      reasonably necessary for the CryptoScamDB team to perform its business operations effectively.
      The information gathered via the Raw Reports is used to create and maintain various databases
      of aggregate information (the "Aggregate Data").
    </MissionBlock>
    <MissionBlock>
      The Raw Reports are normally not shared with, nor sold to any third party without the explicit
      written permission of the reporter. However, Raw Reports may be shared with a third party as
      is required under applicable laws or regulations, or as is deemed necessary by MyCrypto to
      best fulfill its goal of protecting the safety and security of Users across the cryptocurrency
      space.
    </MissionBlock>
    <MissionBlock>
      The Aggregate Data, analyses of suspicious website URLs, and analyses of suspicious
      cryptocurrency public addresses are published to a public database that is accessible by
      anyone via:
      <ul>
        <li>https://etherscamdb.info;</li>
        <li>https://cryptoscamdb.org;</li>
        <li>https://api.cryptoscamdb.org;</li>
        <li>https://github.com/cryptoscamdb;</li>
        <li>https://github.com/MrLuit/EtherScamDB;</li>
      </ul>
      or related forks of these repositories.
    </MissionBlock>
    <MissionBlock>
      These website URLs and public addresses are sourced in part from the Raw Reports. MyCrypto
      takes reasonable measures to confirm the accuracy and validity of the reports, but does not
      accept responsibility nor liability for the information in these databases. Any person or
      entity accessing these reports should treat them as public information, and should take
      additional measures to confirm the information contained in the databases.
    </MissionBlock>
    <MissionBlock>
      Users should be aware that providing information such as their public address, websites
      visited, or other details may be personally identifiable. While we aim to prevent and/or
      immediately destroy any irrelevant or sensitive personal information, it is at the User's sole
      discretion to provide this information. Note that MyCrypto is not liable for any information
      submitted by the User, and the User submits such information at her or his own risk.
    </MissionBlock>
    <MissionBlock>
      If at any time you wish to have your Raw Report destroyed, please send a request to
      contact@cryptoscamdb.org. The MyCrypto team will endeavor to destroyed in a timely manner.
    </MissionBlock>
  </Layout>
);

export default MISSION_PAGE;
