import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import { TableRow } from '../table';

const Container = styled.div``;
const PageComponent = styled.div`
  margin-left: 80%;
  margin-bottom: 1em;
`;
const Table = styled.table`
  width: 80%;
  margin: auto auto;
  color: #fff;
  background: #0b2e45;
  border-radius: 0.4em;

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
`;

interface Props {
  totalRecords: number;
  recordsPerPage: number;
  tableData: any[];
  tableHeaders: any[];
}

interface State {
  currentPage: number;
  totalPages: number;
}

export default class PaginatedTable extends Component<Props, State> {
  static defaultProps = {
    totalRecords: 0,
    recordsPerPage: 15,
    tableData: [],
    tableHeaders: []
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

  filterResults(event: MouseEvent<HTMLElement>) {
    const { target } = event;
    const strFilterValue = (target as HTMLInputElement).value;

    if (strFilterValue.length === 0) {
      this.setState({ searching: { is: false, tableData: [] } });
      return;
    }

    const { ...objProperties } = this.props;

    const arrFilteredValues = [];
    for (const objData of objProperties.tableData) {
      const strDomain;

      if (objData.url) {
        strDomain = objData.url;
      } else if (objData.title.props.children) {
        strDomain = objData.title.props.children;
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
        <Search placeholder="Search" onKeyUp={this.filterResults} />
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
