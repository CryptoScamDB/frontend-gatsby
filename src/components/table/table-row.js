import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TableData from './table-data'
import TableHeader from './table-header'

const _TableRow = styled.tr`

    &:hover {
        background: ${props => props.type === "td" ? "#0f3d5b" : ""}
    }
`

class TableRow extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        switch(this.props.type) {
            case 'td':
            default:
                return(
                    <_TableRow type="td">
                        {this.props.data.map(d => <TableData data={d} />)}
                    </_TableRow>
                )
            case 'th':
            return(
                <_TableRow>
                    {this.props.data.map(d => <TableHeader data={d} />)}
                </_TableRow>
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