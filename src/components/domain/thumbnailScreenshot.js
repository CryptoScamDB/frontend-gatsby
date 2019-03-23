import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const ThumbnailScreenshot = styled.img`
    height: 100px;
    width: 100px;
    margin: 0.5em;

    &:hover {
        cursor: pointer;
    }
`;

class Thumbnail extends Component {
    render()
    {
        return(
            <ThumbnailScreenshot 
                alt={this.props.alt} 
                src={this.props.image} 
                data-index={this.props.index}
                style={{outline: this.props.active ? "5px solid #FFD166" : ""}}
                onClick={this.props.onClick}
            />
        )
    }
}

Thumbnail.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    index: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}

Thumbnail.defaultProps = {
    image: "",
    alt: "",
    index: "",
    active: "",
    onclick: ""
}

export default Thumbnail