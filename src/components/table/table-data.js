import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableDataBase = styled.td`
  padding: 1em;
`

class TableData extends Component
{
    render()
    {
        return(
            <TableDataBase>
              {this.props.data}
            </TableDataBase>
        )
    }
}

TableData.propTypes = {
  data: PropTypes.string
}

TableData.defaultProps = {
  data: ""
}

export default TableData