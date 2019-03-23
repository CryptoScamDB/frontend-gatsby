import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Pagination from './pagination';
import {TableRow } from '../table/table';

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

class PaginatedTable extends Component
{

    constructor(props)
    {
        super(props)
        this.changePage = this.changePage.bind(this)

        let intTotalPages = this.props.totalRecords > 0 && this.props.recordsPerPage > 0 
            ? Math.ceil(this.props.totalRecords / this.props.recordsPerPage)
            : 0;

        this.state = {
            currentPage: 1,
            totalPages: intTotalPages
        }
    }

    changePage(event)
    {
        let intCurrentPage = event.target.getAttribute("value")

        this.setState({ currentPage: intCurrentPage })
    }

    render()
    {
        return(
            <Container>
                <PageComponent>
                    <Pagination
                        currentPage={1}
                        totalPages={this.state.totalPages}
                        onClick={this.changePage}
                    />
                </PageComponent>

                <Table>
                    <TableRow data={this.props.tableHeaders} type="th"/>
                    {
                        this.props.tableData
                            .slice((this.state.currentPage-1)*this.props.recordsPerPage, this.props.recordsPerPage*this.state.currentPage)
                            .map(row => <TableRow data={Object.values(row)} type="td" />)
                    }
                </Table>
            </Container>
        )
    }
}

PaginatedTable.propTypes = {
    totalRecords: PropTypes.number,
    recordsPerPage: PropTypes.number,
    tableData: PropTypes.array,
    tableHeaders: PropTypes.array
}

PaginatedTable.defaultProps = {
    totalRecords: 0,
    recordsPerPage: 15,
    tableData: [],
    tableHeaders: []
}

export default PaginatedTable