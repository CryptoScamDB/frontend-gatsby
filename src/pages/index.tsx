import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DonateEthereum from '../components/icons/donate/DonateEthereum';
import DonateBitcoin from '../components/icons/donate/DonateBitcoin';

const Index: React.StatelessComponent = () => (
  <Layout id="main-view">
    <SEO title="Home" keywords={[`ethereum`, `cryptoscamdb`, `mycrypto`]} />

    <h1>Stay Safe</h1>
    <h1>Let us help you.</h1>

    <div id="blurb">
      <p>
        CryptoScamDB's open-source dataset tracks malicious URLs and their associated addresses to
        make this entire ecosystem safer for you. It is designed to keep track of malicious URLs and
        their associated addresses that have the intent of deceiving people for financial gains.
      </p>

      <p>
        Each day, new reports are gathered, analyzed, and added to our quickly growing dataset
        containing more than 6,000 entries. Various companies and projects use these entries to shut
        down scams, prevent people from visiting phishing websites, track known malicious operators,
        and ultimately protect users across the cryptocurrency ecosystem.
      </p>
    </div>

    <Link
      to="/scams"
      style={{
        color: `#fff`,
        textDecoration: `none`,
        background: `#f5c561`,
        backgroundImage: `linear-gradient(to right, #f5c561, #fcab5b)`,
        padding: `15px 50px`,
        width: `100px`,
        borderRadius: `0.3em`,
        margin: `1em`
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

    <div id="blurb--extra">
      <div id="blurb--extra-opensource">
        <h3>Open-Source</h3>
        <p>
          The full website is open-source and resources to use for your own application are
          available at GitHub, including all data sets and documentation.
        </p>
      </div>
      <div id="blurb--extra-donate">
        <h3>Donate</h3>
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
      </div>
    </div>
  </Layout>
);

export default Index;
