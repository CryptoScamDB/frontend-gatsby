import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Pagination from './pagination';
import {TableRow } from '../table/table';

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
            <div>

                <Pagination
                    currentPage={1}
                    totalPages={this.state.totalPages}
                    onClick={this.changePage}
                />

                <table>
                    <TableRow data={this.props.tableHeaders} type="th"/>
                    {
                        this.props.tableData
                            .slice((this.state.currentPage-1)*this.props.recordsPerPage, this.props.recordsPerPage*this.state.currentPage)
                            .map(row => <TableRow data={Object.values(row)} type="td" />)
                    }
                </table>
            </div>
        )
    }
}

PaginatedTable.propTypes = {
    totalRecords: PropTypes.int,
    recordsPerPage: PropTypes.int,
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