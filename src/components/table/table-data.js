import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const _TableData = styled.td`
  padding: 1em;
`

class TableData extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <_TableData>
              {this.props.data}
            </_TableData>
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