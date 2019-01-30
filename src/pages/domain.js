import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FacebookLogo from "../images/social/facebook.svg";
import TwitterLogo from "../images/social/twitter.svg";
import LinkedinLogo from "../images/social/linkedin.svg";

export default function DomainPage({data}) {
    //const {allCsdbDomains: scam} = data;

    return (
    <Layout id="domain-view">
        <SEO title="Heading" keywords={[`cryptoscamdb`,`mycrypto`]} />
        
        <pre>SCREENSHOT AREA</pre>

        <div>
            <span class="heading">Name:</span>
            <span>\name\</span>
        </div>

        <br /><br />

        <div>
            <span class="heading--sub">URL:</span>
            <span>\url\</span>
        </div>

        <div>
            <span class="heading--sub">Category:</span>
            <span>\cat\</span>
        </div>

        <div>
            <span class="heading--sub">Description:</span>
            <span>\desc\</span>
        </div>

        <div>
            <span class="heading--sub">Status:</span>
            <span>\status\</span>
        </div>

        <div>
            <span class="heading--sub">IP:</span>
            <span>\ip\</span>
        </div>

        <br /><br />

        <div>
            <span class="heading--sub">Nameservers:</span>
            <ul>
                <li>\nameserver1\</li>
                <li>\nameserver2\</li>
                <li>\nameserver3\</li>
                <li>\nameserver4\</li>
            </ul>
        </div>

        <br /><br />
        
        <div>
            <span class="heading--sub">Related Addresses:</span>
            <ul>
                <li>\address1\</li>
                <li>\address2\</li>
            </ul>
        </div>

        <br /><br />

        <div>
            <span class="heading--sub">Warn your friends</span>
            <ul id="social">
                <li><img src={TwitterLogo} /></li>
                <li><img src={FacebookLogo} /></li>
                <li><img src={LinkedinLogo} /></li>
            </ul>
        </div>
    </Layout>
  )
}

/**
 * Fix this so it's getSpecificDomain WHERE node.name = $domain
export const pageQuery = graphql`
    query getSpecificDomain($domain: String!) {
        allCsdbDomains(limit:1) {
            edges {
                node {
                    id
                    name
                    status
                    category
                    subcategory
                }
            }
        }
    }
`
*/