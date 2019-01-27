import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LogoEthereum from "../images/coins/ethereum.png";
import LogoBitcoin from "../images/coins/bitcoin.png";
import LogoMonero from "../images/coins/monero.png";

const IndexPage = () => (
  <Layout id="main-view">
    <SEO title="Home" keywords={[`ethereum`,`cryptoscamdb`,`mycrypto`]} />

    <h1>Stay Safe.</h1>
    <h1>Let us help you.</h1>

    <div id="blurb">
      <p>CryptoScamDB is an open-source dataset consisting of 6000+ entries.
        It is designed to keep track of malicious URLs and their associated
        addresses that have the intent of deceiving people for financial gains.
      </p>

      <p>
        We strive to gather and analyze data that can be shared with various
        projects to prevent and shut down scams and their operators, as well
        as to protect users in the cryptocurrency ecosystem.
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
      Report Scams
    </Link>

    <div id="blurb--extra">
      <div id="blurb--extra-opensource">
        <h3>Open-Source</h3>
        <p>The full website is open-source and resources to use for your own
           application are available at GitHub, including all data sets and
           documentation.
        </p>
      </div>
      <div id="blurb--extra-donate">
        <h3>Donate</h3>
        <p>Support the developers and maintainers of this project by donating
          to one of our cryptocurrency addresses.
        </p>
        <ul>
          <li><img src={LogoEthereum} /></li>
          <li><img src={LogoBitcoin} /></li>
          <li><img src={LogoMonero} /></li>
        </ul>
      </div>      
    </div>

  </Layout>
)

export default IndexPage
