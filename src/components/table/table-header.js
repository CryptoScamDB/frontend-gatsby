import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TableHeader extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <th>
              {this.props.data}
            </th>
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