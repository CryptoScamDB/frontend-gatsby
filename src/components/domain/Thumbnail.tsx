import React from 'react';
import styled from 'styled-components';

const ThumbnailScreenshot = styled.img`
    height: 100px;
    width: 100px;
    margin: 0.5em;

    &:hover {
        cursor: pointer;
    }
`;

const ScreenshotImage = styled.img`
    height: 100%;
    width: 100%
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
`;

interface Props {
    image: string;
    alt: string;
    index: string;
    active: boolean;
    onClick: any;
}

const Thumbnail: React.StatelessComponent<Props> = ({ image, alt, index, active, onClick }: Props) => (
    <ThumbnailScreenshot 
        alt={alt} 
        src={image} 
        data-index={index}
        style={{outline: active ? "5px solid #FFD166" : ""}}
        onClick={onClick}
    />
);

export default Thumbnail;