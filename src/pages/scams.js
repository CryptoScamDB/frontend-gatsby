import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function ScamPage({data}) {
    return (
    <Layout id="scams-view">
        <SEO title="Scams" keywords={[`ethereum`,`scams`,`mycrypto`]} />

        <h2 id="heading">See Scams</h2>

        <br />

        <table>
            <thead>
                <th>Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Subcategory</th>
            </thead>
            <tbody>
                {data.allCsdbScamDomains.edges.map(scam => {

                    if([scam.node.name,scam.node.category,scam.node.subcategory].indexOf(null) === -1) {
                        scam.node.name = scam.node.name.toLowerCase()

                        if(scam.node.status == null) {
                            scam.node.status = "Unknown";
                        }

                        let statusClass;
                        switch(scam.node.status.toLowerCase()) {
                            case 'active':
                                statusClass = "scam--active";
                                break;
                            case 'offline':
                                statusClass = "scam--inactive";
                                break;
                            default: 
                            case 'Unknown':
                                statusClass = "scam--unknown";
                                break;
                        }

                        return(
                            <tr key={scam.node.id}>
                                <td><Link to={"/domain/"+scam.node.csdbId} role="link">{scam.node.name}</Link></td>
                                <td className={statusClass}>{scam.node.status}</td>
                                <td>{scam.node.category}</td>
                                <td>{scam.node.subcategory}</td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>

        <ul id="stats">
            <li><p>{data.allCsdbStats.edges[0].node.scams} TOTAL SCAMS</p></li>
            <li><p>{data.allCsdbStats.edges[0].node.actives} ACTIVE SCAMS</p></li>
            <li><p>{data.allCsdbStats.edges[0].node.addresses} ADDRESSES REGISTERED</p></li>
            <li><p>{data.allCsdbStats.edges[0].node.inactives} INACTIVE SCAMS</p></li>
        </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
    query GetPaginatedScams {
        allCsdbScamDomains {
            totalCount
            edges {
                node {
                    id
                    csdbId
                    name
                    status
                    category
                    subcategory
                }
            }
        }
        allCsdbStats {
            totalCount
            edges {
                node {
                    scams
                    verified
                    featured
                    addresses
                    ips
                    actives
                    inactives
                }
            }
        }
    }
`

/**
export const pageQuery = graphql`
    query GetPaginatedScams($skip:Int! $limit:Int!) {
        allCsdbDomains(skip:$skip, limit:$limit) {
            totalCount
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