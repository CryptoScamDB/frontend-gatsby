import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TableData extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <td>
              {this.props.data}
            </td>
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