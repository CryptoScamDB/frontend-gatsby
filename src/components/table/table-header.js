import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableHeadBase = styled.th`
  padding: 1em 0 1em 1em;
  width: 25%;
  text-align: left;
  color: #ebc561;
`

class TableHeader extends Component
{
    render()
    {
        return(
            <TableHeadBase>
              {this.props.data}
            </TableHeadBase>
        )
    }
}

TableHeader.propTypes = {
  data: PropTypes.string
}

TableHeader.defaultProps = {
  data: ""
}

export default TableHeader