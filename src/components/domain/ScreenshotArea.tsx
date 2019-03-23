import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import Left from '../../images/navigation/left.svg';
import Right from '../../images/navigation/right.svg';
import Screenshot from './Screenshot';
import Thumbnail from './Thumbnail';

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

interface Props {
    images: any[];
}

interface State {
    currentImage: number;
    totalImages: number;
}

export default class ScreenshotArea extends Component<Props, State> {
    static defaultProps = {
        images: []
    }
    
    constructor(props: Props) {
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
    nextImage() {
        const { currentImage, totalImages } = this.state;
        const nextImage = currentImage + 1 > totalImages 
            ? 1 
            : currentImage + 1;
        this.setState({ currentImage: nextImage });
    }

    /**
     * Sets the state for the previous image in the cycle
     */
    prevImage() {
        const { currentImage, totalImages } = this.state;
        const nextImage = currentImage - 1 < 1 
            ? totalImages 
            : currentImage - 1;
        this.setState({ currentImage: nextImage });
    }

    jumpToImage(event: MouseEvent<HTMLElement>) {
        const { totalImages } = this.state;
        const { target } = event;
        const { index } = (target as HTMLElement).dataset;
        const intJumpTo = parseInt((index && typeof index !== 'undefined') ? index : '1', 10);
        if(intJumpTo > 0 && intJumpTo <= totalImages) {
            this.setState({ currentImage: intJumpTo });
        }
    }

    /**
     * Renders the screenshot area component
     */
    render() {
        const { currentImage } = this.state;
        const { images } = this.props;
        return (
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
                            images.length
                                ?
                                    images.map((r, index) => 
                                        <Screenshot 
                                            image={r} 
                                            alt="Screenshot" 
                                            index={index.toString()} 
                                            key={index}
                                            active={
                                                currentImage === index 
                                                    ? true 
                                                    : false
                                            }
                                        />
                                    )
                                :
                                    <NoScreenshot>No screenshots available</NoScreenshot>
                            
                        }
                    </ScreenshotImages>
                </ScreenshotContainer>
                {
                    images.length
                        ?
                            <Thumbnails>
                                {
                                    images.map((r, index) => 
                                        <Thumbnail 
                                            image={r} 
                                            alt="Screenshot" 
                                            index={index.toString()} 
                                            key={index}
                                            active={
                                                currentImage === index 
                                                    ? true 
                                                    : false
                                            }
                                            onClick={this.jumpToImage}
                                        />
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