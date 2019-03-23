import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PaginatedTable from '../components/pagination/PaginatedTable';
import styled from 'styled-components'

const ScamStatus = styled.span`
    color: ${props => ["active"].indexOf(props.status.toLowerCase()) ? "#5194A2" : "#FF303E"}
`

export default function ScamPage({data}) {

    // Sort out the table data
    let arrTableData = [];
    data.allCsdbScamDomains.edges.forEach(scam => {

        let objRecord = {
            "title": "",
            "status": "",
            "category": "",
            "subcategory": ""
        };

        scam = scam.node

        if([scam.name,scam.category,scam.subcategory].indexOf(null) === -1) {
            objRecord.title = <Link to={"/domain/"+scam.csdbId} role="link">{scam.name.toLowerCase()}</Link>

            objRecord.status = scam.status
            if(scam.status == null) {
                objRecord.status = "Unknown";
            }
            switch(objRecord.status.toLowerCase()) {
                case 'active' :
                    objRecord.status = <ScamStatus status="active">Active</ScamStatus>
                    break;
                default:
                case 'offline':
                case 'suspended':
                    objRecord.status = <ScamStatus status="inactive">{objRecord.status}</ScamStatus>
                    break;
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
            tableHeaders={["Title", "Status", "Category", "Subcategory"]}
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