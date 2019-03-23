import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PaginatedTable from '../components/pagination/paginated-table';

export default function VerifiedPage({data}) {

    // Sort out the table data
    let arrTableData = [];
    data.allCsdbFeaturedDomain.edges.map(domain => {

        let objRecord = {
            "name": "",
            "url": "",
            "description": ""
        };


        objRecord.name = domain.node.name
        objRecord.url = domain.node.url
        objRecord.description = domain.node.description

        arrTableData.push(objRecord)
    });

    return (
    <Layout id="verified-view">
        <SEO title="Verified Domains" keywords={[`ethereum`,`verified`,`mycrypto`]} />

        <h2 id="heading">Verified Domains</h2>

        <br />
        
        <PaginatedTable
            totalRecords={data.allCsdbFeaturedDomain.edges.length}
            recordsPerPage={10}
            tableData={arrTableData}
            tableHeaders={["Name", "URL", "Description"]}
        />

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