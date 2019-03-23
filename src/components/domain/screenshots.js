import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const ScreenshotImage = styled.img`
    height: 100%;
    width: 100%
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
`;

class Screenshot extends Component {
    render()
    {
        return(
            <ScreenshotImage 
                alt={this.props.alt} 
                src={this.props.image} 
                data-index={this.props.index}
                style={{display: this.props.active ? "inline" : "none"}}
            />
        )
    }
}

Screenshot.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    index: PropTypes.string,
    active: PropTypes.bool
}

Screenshot.defaultProps = {
    image: "",
    alt: "",
    index: "",
    active: ""
}

export default Screenshot