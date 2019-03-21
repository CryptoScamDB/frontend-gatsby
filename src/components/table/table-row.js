import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableData from './table-data'
import TableHeader from './table-header'

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
                    <tr>
                        {this.props.data.map(d => <TableData data={d} />)}
                    </tr>
                )
            case 'th':
            return(
                <tr>
                    {this.props.data.map(d => <TableHeader data={d} />)}
                </tr>
            )
        }
    }
}

TableRow.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string
}

TableRow.defaultProps = {
  data: [],
  type: "td"
}

export default TableRow