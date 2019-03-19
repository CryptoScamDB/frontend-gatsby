import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Left from "../../images/navigation/left.svg"
import Right from "../../images/navigation/right.svg"

import Screenshot from './screenshots'

const ScreenshotContainer = styled.div`
    background: #001D2F;
    height: 600px;
    display: flex;
`

const LeftAndRightArrows = styled.div`
    background: #FFD166
    height: 600px;
    flex: 0.1;
    text-align: center;

    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;

    &:hover {
        cursor: hand;
    }
`
const LeftArrow = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #001D2F;

    &:hover {
        cursor: pointer;

        img {
            filter: brightness(0) sepia(1) hue-rotate(-70deg) saturate(5)
        }
    }
`
const RightArrow = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #001D2F;

    &:hover {
        cursor: pointer;

        img {
            filter: brightness(0) sepia(1) hue-rotate(-70deg) saturate(5)
        }
    }
`
const ScreenshotImages = styled.div`
    background: #FFF;
    flex: 1;
    width: 100%;

    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;
`

class ScreenshotArea extends Component {
    constructor(props)
    {
        super(props);
    
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);

        this.state = {
            currentImage: 1,
            totalImages: null
        }
    }

    nextImage()
    {
        const nextImage = this.state.currentImage + 1 > this.state.totalImages 
            ? 1 
            : this.state.currentImage + 1;
        this.setState({ currentImage: nextImage });
    }

    prevImage()
    {
        const nextImage = this.state.currentImage - 1 < 1 
            ? this.state.totalImages 
            : this.state.currentImage - 1;
        this.setState({ currentImage: nextImage });
    }

    render()
    {
        this.state.totalImages = this.props.images.length;

        return(
            <div>
                <ScreenshotContainer>
                    <LeftAndRightArrows>
                        <RightArrow onClick={this.nextImage}>
                            <img src={Right} />
                        </RightArrow>
                        <LeftArrow onClick={this.prevImage}>
                            <img src={Left} />
                        </LeftArrow>
                    </LeftAndRightArrows>
                    <ScreenshotImages>
                        {
                            this.props.images.map((r, index) => 
                                <Screenshot 
                                    image={r} 
                                    alt="Screenshot" 
                                    index={++index} 
                                    active={
                                        this.state.currentImage === index 
                                            ? true 
                                            : false
                                    }>
                                </Screenshot>
                            )
                        }
                    </ScreenshotImages>
                </ScreenshotContainer>
            </div>
        )
    }
}

ScreenshotArea.propTypes = {
    images: PropTypes.array
}

ScreenshotArea.defaultProps = {
    images: [],
}

export default ScreenshotArea