import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PaginatedTable from '../components/pagination/PaginatedTable';
import styled from 'styled-components';

interface ScamStatusProps {
  status: string;
}

const ScamStatus = styled.span`
  color: ${(props: ScamStatusProps) =>
    ['active'].indexOf(props.status.toLowerCase()) ? '#5194A2' : '#FF303E'};
`;

interface ScamsProps {
  data: any;
}

const Scams: React.StatelessComponent<ScamsProps> = ({ data }: ScamsProps) => {
  // Sort out the table data
  const arrTableData: any[] = [];
  let n = 1;
  data.allCsdbScamDomains.edges.forEach((scam: any) => {
    const objRecord: any = {
      n: '',
      URL: '',
      status: '',
      category: '',
      subcategory: ''
    };

    scam = scam.node;

    if ([scam.name, scam.category, scam.subcategory].indexOf(null) === -1) {
      objRecord.n = ['#', n++].join('');

      objRecord.URL = (
        <Link to={'/domain/' + scam.csdbId} role="link">
          {scam.name.toLowerCase()}
        </Link>
      );

      objRecord.status = scam.status;
      if (scam.status == null) {
        objRecord.status = 'Unknown';
      }
      switch (objRecord.status.toLowerCase()) {
        case 'active':
          objRecord.status = <ScamStatus status="active">Active</ScamStatus>;
          break;
        default:
        case 'offline':
        case 'suspended':
          objRecord.status = <ScamStatus status="inactive">{objRecord.status}</ScamStatus>;
          break;
      }

      objRecord.category = scam.category;
      objRecord.subcategory = scam.subcategory;

      arrTableData.push(objRecord);
    }
  });

  return (
    <Layout id="scams-view">
      <SEO title="Scams" keywords={[`ethereum`, `scams`, `mycrypto`]} />

      <h2 id="heading">See Scams</h2>

      <PaginatedTable
        totalRecords={data.allCsdbScamDomains.edges.length}
        recordsPerPage={25}
        tableData={arrTableData}
        tableHeaders={['#', 'URL', 'Status', 'Category', 'Subcategory']}
      />

      <ul id="stats">
        <li>
          <p>{data.allCsdbStats.edges[0].node.scams} TOTAL SCAMS</p>
        </li>
        <li>
          <p>{data.allCsdbStats.edges[0].node.actives} ACTIVE SCAMS</p>
        </li>
        <li>
          <p>{data.allCsdbStats.edges[0].node.addresses} ADDRESSES REGISTERED</p>
        </li>
        <li>
          <p>{data.allCsdbStats.edges[0].node.inactives} INACTIVE SCAMS</p>
        </li>
      </ul>
    </Layout>
  );
};

export default Scams;

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
`;
