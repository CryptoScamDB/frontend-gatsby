import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function VerifiedPage({data}) {
    return (
    <Layout id="verified-view">
        <SEO title="Verified Domains" keywords={[`ethereum`,`verified`,`mycrypto`]} />

        <h2 id="heading">Verified Domains</h2>

        <br />
        
        <table>
            <thead>
                <th>Name</th>
                <th>URL</th>
                <th>Description</th>
            </thead>
            <tbody>
            {data.allCsdbFeaturedDomain.edges.map(domain => {
                  return(
                    <tr key={domain.node.name}>
                        <td>{domain.node.name}</td>
                        <td>{domain.node.url}</td>
                        <td>{domain.node.description}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
      </Layout> 
    )
}

export const pageQuery = graphql`
    query GetVerifiedDomains {
        allCsdbFeaturedDomain {
            totalCount
            edges {
                node {
                    name
                    url
                    description
                }
            }
        }
    }
`