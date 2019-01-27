import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
//import Table from '../components/table'


async function getScams()
{
    fetch('https://api.cryptoscamdb.org/v1/scams')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
}

const ScamPage = () => (
  <Layout id="scams-view">
    <SEO title="Scams" keywords={[`ethereum`,`scams`,`mycrypto`]} />

    <h1>See Scams</h1>
    
  </Layout>
)

export default ScamPage
