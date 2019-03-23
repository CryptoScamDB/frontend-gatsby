import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconImage = styled.img`
    height: 26px;
    width: 26px;
`

class Icon extends Component
{
    render()
    {
        return(
            <IconImage 
                src={this.props.src} 
                alt={this.props.alt}
                title={this.props.title}
            />
        )
    }
}

Icon.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
}

Icon.defaultProps = {
    src: "",
    alt: "",
    title: ""
}

export default Icon