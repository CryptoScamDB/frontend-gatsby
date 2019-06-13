import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import { TableRow } from '../table';

const Container = styled.div`
  width: 100%;
`;

const PageComponent = styled.div`
  margin-left: 80%;
  margin-bottom: 1em;

  @media (max-width: 968px) {
    width: 95%;
    display: block;
    margin-right: 0;
  }
`;
const Table = styled.table`
  width: 100%;
  color: #fff;
  background: #0b2e45;
  border-radius: 0.4em;

  @media (max-width: 968px) {
    width: 100%;
  }

  a {
    color: #fff;
  }
`;
const Search = styled.input`
  margin-left: 80%;
  margin-bottom: 1em;
  padding: 0.5em 0.7em;
  background: transparent;
  border: 1px solid rgba(0, 187, 236, 0.6);
  border-radius: 0.3em;
  color: #fff;

  @media (max-width: 968px) {
    width: 95%;
    display: block;
    margin: 1em;
  }
`;

interface Props {
  totalRecords: number;
  recordsPerPage: number;
  tableData: any[];
  tableHeaders: any[];
  disableSearchInput: boolean;
}

interface StateSearching {
  is: boolean;
  tableData: any[];
}

interface State {
  currentPage: number;
  totalPages: number;
  searching: StateSearching;
}

export default class PaginatedTable extends Component<Props, State> {
  static defaultProps = {
    totalRecords: 0,
    recordsPerPage: 15,
    tableData: [],
    tableHeaders: [],
    disableSearchInput: false
  };

  constructor(props: Props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.filterResults = this.filterResults.bind(this);
    const { totalRecords, recordsPerPage } = this.props;
    const intTotalPages =
      totalRecords > 0 && recordsPerPage > 0 ? Math.ceil(totalRecords / recordsPerPage) : 0;

    this.state = {
      currentPage: 1,
      totalPages: intTotalPages,
      searching: {
        is: false,
        tableData: []
      }
    };
  }

  changePage(event: MouseEvent<HTMLElement>) {
    const { target } = event;
    const intCurrentPage = (target as HTMLElement).getAttribute('value');
    if (intCurrentPage) {
      this.setState({ currentPage: parseInt(intCurrentPage, 10) });
    }
  }

  filterResults(event: React.KeyboardEvent<HTMLElement>) {
    const { target } = event;
    const strFilterValue = (target as HTMLInputElement).value;

    if (strFilterValue.length === 0) {
      this.setState({ searching: { is: false, tableData: [] } });
      return;
    }

    const { ...objProperties } = this.props;

    const arrFilteredValues: object[] = [];
    for (const objData of objProperties.tableData) {
      let strDomain;

      if (objData.url) {
        strDomain = objData.url;
      } else if (objData.title && objData.title.props.children) {
        strDomain = objData.title.props.children;
      } else if (objData.URL && objData.URL.props.children) {
        strDomain = objData.URL.props.children;
      } else {
        console.warn('Cannot filter table - no valid key to filter on.');
        continue;
      }

      const objRegex = new RegExp(strFilterValue, 'g');
      if (strDomain.match(objRegex)) {
        arrFilteredValues.push(objData);
      }
    }

    this.setState({ searching: { is: true, tableData: arrFilteredValues } });
  }

  render() {
    let { currentPage, totalPages } = this.state;
    const { searching } = this.state;
    let { tableData } = this.props;
    const { tableHeaders, recordsPerPage } = this.props;

    if (searching.is) {
      tableData = searching.tableData;
      totalPages = Math.ceil(tableData.length / recordsPerPage);
      if (currentPage > totalPages) {
        currentPage = 1;
      }
    }

    return (
      <Container>
        {this.props.disableSearchInput ? (
          ``
        ) : (
          <Search placeholder="Search" onKeyUp={this.filterResults} />
        )}
        <PageComponent>
          <Pagination currentPage={1} totalPages={totalPages} onClick={this.changePage} />
        </PageComponent>

        <Table>
          <TableRow data={tableHeaders} type="th" />
          {tableData
            .slice((currentPage - 1) * recordsPerPage, recordsPerPage * currentPage)
            .map((row, i) => (
              <TableRow key={i} data={Object.values(row)} type="td" />
            ))}
        </Table>
      </Container>
    );
  }
}
