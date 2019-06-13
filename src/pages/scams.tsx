import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PaginatedTable from '../components/pagination/PaginatedTable';
import styled from 'styled-components';

const StatsContainer = styled.ul`
  list-style-type: none;
  display: block;
  padding-top: 5%;
  margin-left: 10%;
`;
const Stat = styled.li`
  text-align: center;
  margin: 2em;
  text-transform: uppercase;
  background: radial-gradient(ellipse at center, #329efc 1%, #288accd4 53%, #0e1f357a 84%);
  height: 12vw;
  width: 12vw;
  border-radius: 100%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  opacity: 0.9;
  padding: 1vw;
  box-sizing: border-box;

  &:after {
    width: 170%;
    height: 170%;
    position: absolute;
    background: #2b92d836;
    content: '';
    border-radius: 100%;
    left: -35%;
    top: -35%;
    z-index: -1;
  }

  &:before {
    width: 230%;
    height: 230%;
    position: absolute;
    background: #1d6ba04d;
    content: '';
    border-radius: 100%;
    left: -65%;
    top: -65%;
    z-index: -2;
  }

  &:nth-child(1) {
    margin-top: 3vw;
  }

  &:nth-child(2) {
    width: 11vw;
    height: 11vw;
    margin-top: 9vw;
    margin-left: 8vw;
  }

  &:nth-child(3) {
    margin-left: 8vw;
  }

  &nth-child(4) {
    margin-top: 13vw;
    margin-left: 8vw;
  }
`;
const StatText = styled.p`
  text-align: center;
`;

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
    <Layout imageBg={false} id="scams-view">
      <SEO title="Scams" keywords={[`ethereum`, `scams`, `mycrypto`]} />

      <h2 id="heading">See Scams</h2>

      <PaginatedTable
        totalRecords={data.allCsdbScamDomains.edges.length}
        recordsPerPage={25}
        tableData={arrTableData}
        tableHeaders={['#', 'URL', 'Status', 'Category', 'Subcategory']}
      />

      <StatsContainer>
        <Stat>
          <p>
            {data.allCsdbStats.edges[0].node.scams.toLocaleString()} <br /> TOTAL SCAMS
          </p>
        </Stat>
        <Stat>
          <p>
            {data.allCsdbStats.edges[0].node.actives.toLocaleString()} <br /> ACTIVE SCAMS
          </p>
        </Stat>
        <Stat>
          <p>
            {data.allCsdbStats.edges[0].node.addresses.toLocaleString()} <br /> ADDRESSES REGISTERED
          </p>
        </Stat>
        <Stat>
          <p>
            {data.allCsdbStats.edges[0].node.inactives.toLocaleString()} <br /> INACTIVE SCAMS
          </p>
        </Stat>
      </StatsContainer>
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
