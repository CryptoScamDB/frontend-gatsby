import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PaginatedTable from '../pagination/PaginatedTable';
import IconSearch from '../../images/navigation/right.svg';

const SearchForm = styled.form`
  position: relative;
  margin: 0 20%;
  padding-bottom: 3em;
`;
const SearchInput = styled.input`
  padding: 1em;
  border: 0.5px solid #ffffff;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 23px 45px -5px rgba(0, 0, 0, 0.38);
  width: 100%;
  color: #fff;
`;
const SearchButton = styled.button`
  color: #fff;
  width: 10%;
  cursor: pointer;
  position: absolute;
  top: 0.5em;
  right: 0%;
  background: transparent;
  border: transparent;
  border-left: 1px solid #fff;

  > img {
    height: 20px;
    margin-top: 0.3em;
  }
`;

interface ScamStatusProps {
  status: string;
}

const ScamStatus = styled.span`
  color: ${(props: ScamStatusProps) =>
    ['active'].indexOf(props.status.toLowerCase()) ? '#5194A2' : '#FF303E'};
`;

interface Props {
  data: any;
}

interface State {
  searchQuery: string;
  data: any;
}

export default class Search extends Component<Props, State> {
  static defaultProps = {
    data: []
  };

  constructor(props: Props) {
    super(props);

    this.searchData = this.searchData.bind(this);

    this.state = {
      searchQuery: '',
      data: []
    };
  }

  searchData = (objEvent: React.KeyboardEvent<FormControl>) => {
    const strSearchInput = objEvent.currentTarget.value;

    if (objEvent.key.toLowerCase() === 'backspace' && strSearchInput.length > 0) {
      return;
    }

    // Sort out the table data
    const arrTableData: any[] = [];
    let n = 1;
    this.props.data.allCsdbScamDomains.edges.forEach((scam: any) => {
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

        // See if we want to push the data to the table
        const objRegex = new RegExp(strSearchInput, 'gi');

        // Match on the domain name
        switch (true) {
          case !!scam.name.match(objRegex): //name search
          case !!scam.subcategory.match(objRegex): //subcategory search
          case scam.ip !== null && !!scam.ip.match(objRegex): //ip search
          case scam.addresses &&
            scam.addresses.length &&
            !!scam.addresses.map(addr => addr.match(objRegex)).filter(e => e).length: //address search
            arrTableData.push(objRecord);
            break;
          default:
            break;
        }
      }

      this.setState({ data: arrTableData });
    });
  };

  render() {
    return (
      <div>
        <SearchForm>
          <SearchInput
            placeholder="Search for a domain, an IP address, or a crypto address from one of our supported cryptocurrencies"
            type="text"
            onKeyUp={this.searchData}
          />
          <SearchButton>
            <img src={IconSearch} alt="Search" />
          </SearchButton>
        </SearchForm>

        {this.state.data.length > 0 ? (
          <PaginatedTable
            totalRecords={this.state.data.length}
            recordsPerPage={25}
            tableData={this.state.data}
            tableHeaders={['#', 'URL', 'Status', 'Category', 'Subcategory']}
            disableSearchInput={true}
          />
        ) : (
          ``
        )}
      </div>
    );
  }
}
