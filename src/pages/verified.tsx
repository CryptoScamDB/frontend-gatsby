import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PaginatedTable from '../components/pagination/PaginatedTable';

export default ({ data }) => {
    // Sort out the table data
    const arrTableData = [];
    data.allCsdbFeaturedDomain.edges.forEach(domain => {

        const objRecord = {
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