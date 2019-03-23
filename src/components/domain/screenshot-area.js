import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import Left from "../../images/navigation/left.svg"
import Right from "../../images/navigation/right.svg"

import Screenshot from './screenshots'
import Thumbnail from './thumbnailScreenshot'

/**
 * The container for the screenshot area
 */
const ScreenshotContainer = styled.div`
    background: #001D2F;
    height: 600px;
    display: flex;
`

/**
 * The container for the left/right arrows
 */
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
`

/**
 * The container for the left arrow
 */
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

/**
 * The container for the right arrow
 */
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

/**
 * The container for the screenshots
 */
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

const NoScreenshot = styled.div`
    color: #001D2F;
    font-size: 22pt;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

/**
 * The container for the thumbnails
 */
const Thumbnails = styled.div`
    background: #001D2F;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    padding: 0.5em;
`

class ScreenshotArea extends Component {
    constructor(props)
    {
        super(props);
    
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.jumpToImage = this.jumpToImage.bind(this);

        this.state = {
            currentImage: 1,
            totalImages: this.props.images.length
        }
    }

    /**
     * Sets the state for the next image in the cycle
     */
    nextImage()
    {
        const nextImage = this.state.currentImage + 1 > this.state.totalImages 
            ? 1 
            : this.state.currentImage + 1;
        this.setState({ currentImage: nextImage });
    }

    /**
     * Sets the state for the previous image in the cycle
     */
    prevImage()
    {
        const nextImage = this.state.currentImage - 1 < 1 
            ? this.state.totalImages 
            : this.state.currentImage - 1;
        this.setState({ currentImage: nextImage });
    }

    jumpToImage(event)
    {
        let intJumpTo = event.target.dataset.index ? event.target.dataset.index : 1;
        intJumpTo = parseInt(intJumpTo, 10);
        if(intJumpTo > 0 && intJumpTo <= this.state.totalImages) {
            this.setState({ currentImage: intJumpTo });
        }
    }

    /**
     * Renders the screenshot area component
     */
    render()
    {
        return(
            <div>
                <ScreenshotContainer>
                    <LeftAndRightArrows>
                        <RightArrow onClick={this.nextImage}>
                            <img alt="Next" src={Right} />
                        </RightArrow>
                        <LeftArrow onClick={this.prevImage}>
                            <img alt="Previous" src={Left} />
                        </LeftArrow>
                    </LeftAndRightArrows>
                    <ScreenshotImages>
                        {
                            this.props.images.length
                                ?
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
                                :
                                    <NoScreenshot>No screenshots available</NoScreenshot>
                            
                        }
                    </ScreenshotImages>
                </ScreenshotContainer>
                {
                    this.props.images.length
                        ?
                            <Thumbnails>
                                {
                                    this.props.images.map((r, index) => 
                                        <Thumbnail 
                                            image={r} 
                                            alt="Screenshot" 
                                            index={++index} 
                                            active={
                                                this.state.currentImage === index 
                                                    ? true 
                                                    : false
                                            }
                                            onClick={this.jumpToImage}>
                                        </Thumbnail>
                                    )
                                }
                            </Thumbnails>
                        :
                            ``
                }
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