import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PaginatedTable from '../components/pagination/paginated-table';

export default function ScamPage({data}) {

    // Sort out the table data
    let arrTableData = [];
    data.allCsdbScamDomains.edges.map(scam => {

        let objRecord = {
            "title": "",
            "status": "",
            "category": "",
            "subcategory": ""
        };

        scam = scam.node

        if([scam.name,scam.category,scam.subcategory].indexOf(null) === -1) {
            objRecord.title = scam.name.toLowerCase()

            objRecord.status = scam.status
            if(scam.status == null) {
                objRecord.status = "Unknown";
            }

            objRecord.category = scam.category
            objRecord.subcategory = scam.subcategory

            arrTableData.push(objRecord)
        }
    });

    return (
    <Layout id="scams-view">
        <SEO title="Scams" keywords={[`ethereum`,`scams`,`mycrypto`]} />

        <h2 id="heading">See Scams</h2>

        <PaginatedTable
            totalRecords={data.allCsdbScamDomains.edges.length}
            recordsPerPage={10}
            tableData={arrTableData}
            tableHeaders={["title", "status", "category", "subcategory"]}
        />

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