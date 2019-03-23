import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TableData from './table-data'
import TableHeader from './table-header'

const TableRowBase = styled.tr`

    &:hover {
        background: ${props => props.type === "td" ? "#0f3d5b" : ""}
    }
`

class TableRow extends Component
{
    render()
    {
        switch(this.props.type) {
            case 'td':
            default:
                return(
                    <TableRowBase type="td">
                        {this.props.data.map(d => <TableData data={d} />)}
                    </TableRowBase>
                )
            case 'th':
            return(
                <TableRowBase>
                    {this.props.data.map(d => <TableHeader data={d} />)}
                </TableRowBase>
            )
        }
    }
}

TableRow.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  link: PropTypes.string
}

TableRow.defaultProps = {
  data: [],
  type: "td",
  link: ""
}

export default TableRow