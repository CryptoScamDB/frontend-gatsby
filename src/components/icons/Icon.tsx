import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 26px;
    width: 26px;
`

interface Props {
    src: string;
    alt: string;
    title: string;
}

const Icon: React.StatelessComponent<Props> = ({ src, alt, title }: Props) => (
    <IconImage 
        src={src} 
        alt={alt}
        title={title}
    />
);

export default Icon;