import React, { Component } from 'react';
import styled from 'styled-components';
import Pagination from './pagination';
import { TableRow } from '../table';

const Container = styled.div`

`
const PageComponent = styled.div`
    margin-left: 80%;
    margin-bottom: 1em;
`
const Table = styled.table`
    width: 80%;
    margin: auto auto;
    color: #fff;
    background: #0B2E45;
    border-radius: 0.4em;

    a {
        color: #fff;
    }
`

interface Props {
    totalRecords: number;
    recordsPerPage: number;
    tableData: any[];
    tableHeaders: any[];
}

export default class PaginatedTable extends Component<Props> {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
        const { totalRecords, recordsPerPage } = this.props;
        const intTotalPages = totalRecords > 0 && recordsPerPage > 0 
            ? Math.ceil(totalRecords / recordsPerPage)
            : 0;

        this.state = {
            currentPage: 1,
            totalPages: intTotalPages
        };
    }

    changePage(event) {
        const intCurrentPage = event.target.getAttribute("value");

        this.setState({ currentPage: intCurrentPage });
    }

    render() {
        const { currentPage, totalPages } = this.state;
        const { tableHeaders, tableData, recordsPerPage } = this.props;
        return (
            <Container>
                <PageComponent>
                    <Pagination
                        currentPage={1}
                        totalPages={totalPages}
                        onClick={this.changePage}
                    />
                </PageComponent>

                <Table>
                    <TableRow data={tableHeaders} type="th"/>
                    {
                        tableData
                            .slice((currentPage-1)*recordsPerPage, recordsPerPage*currentPage)
                            .map(row => <TableRow data={Object.values(row)} type="td" />)
                    }
                </Table>
            </Container>
        );
    }

    static defaultProps = {
        totalRecords: 0,
        recordsPerPage: 15,
        tableData: [],
        tableHeaders: []
    }
}