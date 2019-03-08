import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FacebookLogo from "../images/social/facebook.svg";
import TwitterLogo from "../images/social/twitter.svg";
import LinkedinLogo from "../images/social/linkedin.svg";

export default function DomainPage({data}) {
    // @todo - Can I do this any tidier?
    const {allCsdbScamDomains: scam} = data;
    const s = scam.edges[0].node;

    return (
    <Layout id="domain-view">
        <SEO title={s.name} keywords={[`cryptoscamdb`,`mycrypto`]} />
        <div id="domain-view--details-container left">
            <div>
                <span className="heading">Name:</span>
                <span>{s.name}</span>
            </div>

            <br /><br />

            <div>
                <span className="heading--sub">URL:</span>
                <span>{s.url}</span>
            </div>

            <div>
                <span className="heading--sub">Category:</span>
                <span>{s.category} - {s.subcategory}</span>
            </div>

            <div>
                <span className="heading--sub">Description:</span>
                <span>{s.description}</span>
            </div>

            <div>
                <span className="heading--sub">Status:</span>
                <span>{s.status}</span>
            </div>

            <div>
                <span className="heading--sub">IP:</span>
                <span>
                    {
                        s.lookups && s.lookups.URLScan.results > 0 && s.lookups.URLScan.results[0].page.ip
                            ? s.lookups.URLScan.results
                                .map(urlscan => urlscan.page.ip)
                                .filter((ip, index, arr) => arr.indexOf(ip) == index)
                                .sort()
                                .join(", ")
                            : `No IP (domain not resolving)`
                    }
                </span>
            </div>

            <br /><br />

            <div>
                <span className="heading--sub">Nameservers:</span>
                <ul>
                    {
                        s.nameservers
                            ? s.nameservers.map(ns => <li>{ns}</li>)
                            : `No Nameservers found (domain not resolving at lookup time)`
                    }
                </ul>
            </div>

            <br /><br />
            
            <div>
                <span className="heading--sub">Related Addresses:</span>
                <ul>
                {
                    s.addresses
                        ? s.addresses.map(ns => <li>{ns}</li>)
                        : `No Addresses`
                }
                </ul>
            </div>
        </div>
        <div id="domain-view--details-container right">
                
        </div>

        <br /><br />

        <div>
            <span className="heading--sub">Warn your friends</span>
            <ul id="social">
                <li><img src={TwitterLogo} /></li>
                <li><img src={FacebookLogo} /></li>
                <li><img src={LinkedinLogo} /></li>
            </ul>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query($slug: String) {
        allCsdbScamDomains(filter: {csdbId: {eq: $slug}}) {
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
                coin
                hostname
                ip
                nameservers
                status
                statusCode
                updated
                type
                lookups {
                    URLScan {
                      total
                      results {
                        page {
                          ip
                        }
                      }
                    }
                  }
                abusereport
                csdbId
                addresses
            }
        }
    }
  }
`