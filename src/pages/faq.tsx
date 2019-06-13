import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const Container = styled.div`
  margin-top: 2em;
  padding: 5em;
`;
const Heading1 = styled.h1`
  color: $table-th-color;
  text-transform: uppercase;
  margin: auto auto;
  margin-left: 5%;
`;

const FAQ_PAGE: React.StatelessComponent = () => (
  <Layout id="faq-view">
    <SEO title="FAQ" keywords={[`ethereum`, `faq`, `mycrypto`]} />

    <Heading1>FAQ</Heading1>

    <br />

    <FAQ
      question="How to protect myself against scammers?"
      answer={[
        `<strong>Use cold storage:</strong> <a href="https://www.ledgerwallet.com/r/1985?path=/products/" target="_blank" rel="nofollow">Ledger</a> or <a href="https://shop.trezor.io/?offer_id=10&aff_id=1735" target="_blank" rel="nofollow">Trezor</a> hardware wallet.`,
        `<strong>Bookmark your crypto sites:</strong> Use those bookmarks and only those.`,
        `<strong>Only send funds to trusted addresses:</strong> Double-check what address you're 
        sending ETH to. Lookup the address at <a href="https://etherscan.io" target="_blank" rel="nofollow">etherscan.io</a> and  check the comments tab for people taling about their stolen funds.`,
        `<strong>Don't trust Discord/Slack/Telegram/Reddit/Twitter posts or messages:</strong> Scammers often promise free coins or try to scare you into clicking a link.`
      ]}
    />
    <FAQ
      question="How can I join the fight?"
      answer={[
        `See a malicious link being spammed in Telegram? <a href="/report">Report it</a>.`,
        `Receive a DM from someone asking you to send them coins? <a href="/report">Report it</a>.`,
        `Hear about someone who had their coins stolen? Tell them to <a href="/report">report it</a>.`,
        `Tell people to install <a href="https://harrydenley.com/ethaddresslookup-chrome-extension-release/">EtherAddressLookup</a> so they don’t accidentally end up on a known malicious website.`,
        `Use this data in your project to prevent people from sending to malicious addresses or visiting malicious URLs.`,
        `Contribute your own internal lists to our dataset. See <a href="https://api.cryptoscamdb.org" target="_blank" rel="nofollow">our API</a>.`,
        `If you have crypto, donate crypto to us to help cover the costs of upkeep.`,
        `If you don’t have any crypto, share some love for us across Twitter.`,
        `If you don’t have any social media, <a href="mailto:contact@cryptoscamdb.org">send us a nice message</a>.`
      ]}
    />
    <FAQ
      question="Can I use the data from this project?"
      answer={[
        `Yes, you can either download the raw blacklist and whitelist files or take a look at our <a href="https://api.cryptoscamdb.org" target="_blank" rel="nofollow">API</a>.`,
        `Reach out to us directly if you have any questions or simply want to share something cool you’ve created using this data!`
      ]}
    />
    <FAQ
      question="Are the reports open source? Where do they go?"
      answer={[
        `Team members at MyCrypto do an initial scan of the raw reports before adding a website or address to the dataset. One reason we 
        protect the raw reports is because they sometimes include sensitive, personal, or irrelevant information. `
      ]}
    />
    <FAQ
      question="Why was this database created?"
      answer={[
        `The database was created on July 2017 as EtherScamDB(.info) in response to the rapid proliferation of scams that cropped up in 
        within the Ethereum community with the network’s rise to popularity. In 2019, we migrated to CryptoScamDB(.org) in order to 
        indicate our support of the wider cryptocurrency ecosystem. While grouping all the scams won't make
        them go away, it will make both identifying them and taking them down easier.`
      ]}
    />
    <FAQ
      question="What reasons do we blacklist a website for?"
      answer={[
        `Impersonating popular crypto services.`,
        `Impersonating popular crypto personalities.`,
        `Sending user-input private keys/secrets to backend services.`,
        `Conducting a giveaway that requires participant's pay an advance fee.`,
        `Preying on, or lying to, investors of a project which can be proved without doubt.`,
        `Pyramid scheme-like language.`
      ]}
    />
    <FAQ
      question="What reasons do we blacklist an address for?"
      answer={[
        `Association with a website that has been blacklisted.`,
        `Receiving funds from a profiled security event (this includes breaches, ransomware, smart contract hacks, etc).`
      ]}
    />
    <FAQ
      question="When do we remove entries from the blacklist?"
      answer={[
        `When the offending action (i.e., private key harvesting) is removed, it has been reported to us by a member of the team associated with the blacklisted entry, and we have had time to review the change-of-status report.`,
        `If a genuine mistake is made on our part and has been raised with us by a member of the project’s team.`
      ]}
    />
    <br />

    <div>
      If you have any other questions and would like to get in contact with us, please shoot us an
      email at <a href="mailto:contact@cryptoscamdb.org">contact@cryptoscamdb.org</a>.
    </div>
  </Layout>
);

export default FAQ_PAGE;
