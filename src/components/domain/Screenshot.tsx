import React from 'react';
import styled from 'styled-components';

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
}

export default ({ image, alt, index, active }: Props) => (
    <ScreenshotImage 
        alt={alt} 
        src={image} 
        data-index={index}
        style={{display: active ? "inline" : "none"}}
    />
) as React.StatelessComponent<Props>;