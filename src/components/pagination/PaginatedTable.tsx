import React, { Component, MouseEvent } from 'react';
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
    }

    constructor(props: Props) {
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

    changePage(event: MouseEvent<HTMLElement>) {
        const { target } = event;
        const intCurrentPage = (target as HTMLElement).getAttribute("value");
        if(intCurrentPage) {
            this.setState({ currentPage: parseInt(intCurrentPage, 10) });
        }
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
                            .map((row, i) => <TableRow key={i} data={Object.values(row)} type="td" />)
                    }
                </Table>
            </Container>
        );
    }
}