import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const FAQ_PAGE: React.StatelessComponent = () => (
  <Layout id="faq-view">
    <SEO title="FAQ" keywords={[`ethereum`, `faq`, `mycrypto`]} />

    <h1 id="heading">FAQ</h1>

    <br />

    <FAQ
      question="How to protect myself against scammers?"
      answer={[
        `Use cold storage - Buy a Ledger Nano S or Trezor.`,
        `Bookmark your crypto sites - Use those bookmarks and only those.`,
        `Only send funds to trusted addresses - Double-check what address you're 
        sending ETH to. Lookup the address at etherscan.io and check if there are bad reviews.`,
        `Never trust any discord/slack/telegram/reddit message - Don't ever fall for messages that
        say you can get free ETH or that a hack has occured.`
      ]}
    />
    <FAQ
      question="How can I join the fight?"
      answer={[
        `Report scams to use here`,
        `Report scams to Google: `,
        `Send abuse reports to the registrar, hosting and SSL provider of the scam domains.`,
        `Install the <a href="https://harrydenley.com/ethaddresslookup-chrome-extension-release/">EtherAddressLookup</a> 
        extension on your browser.`
      ]}
    />
    <FAQ
      question="Can I use the data from this project?"
      answer={[
        `Yes, you can either download the raw blacklist and whitelist files or take a look at our API.`
      ]}
    />
    <FAQ
      question="Are the reports open source? Where do they go?"
      answer={[
        `All reports end up in a private Slack to protect people's privacy. The reports can be read by
        all team members of MyCrypto and they can decide whether the report makes it to the blacklist.`
      ]}
    />
    <FAQ
      question="Why was this database created"
      answer={[
        `The database was created in July 2017 as EtherScamDB(.info), when trying to find a solution
        to the ethereum scams. In 2019, we migrated to CryptoScamDB(.org) in order to indicate our
        support of the wider cryptocurrency ecosystem. While grouping all the scams won't make
        them go away, it will make both identifying them and taking them down easier.`
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
