import React from 'react';
import styled from 'styled-components';

const HeadingTag1 = styled.h1`
  color: #ebc561;
  text-transform: uppercase;
  margin: auto auto;
`;
const HeadingTag2 = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  margin: auto auto;
`;
const HeadingTag3 = styled.h3`
  color: #ffffff;
  text-transform: uppercase;
  margin: auto auto;
`;
const HeadingTag4 = styled.h4`
  color: #ffffff;
  text-transform: uppercase;
  margin: auto auto;
`;
const HeadingTag5 = styled.h5`
  color: #ffffff;
  text-transform: uppercase;
  margin: auto auto;
`;
const HeadingTag6 = styled.h6`
  color: #ffffff;
  text-transform: uppercase;
  margin: auto auto;
`;

interface Props {
  text: string;
}

const Heading1: React.SFC<Props> = props => <HeadingTag1>{props.text}</HeadingTag1>;

const Heading2: React.SFC<Props> = props => <HeadingTag2>{props.text}</HeadingTag2>;

const Heading3: React.SFC<Props> = props => <HeadingTag3>{props.text}</HeadingTag3>;

const Heading4: React.SFC<Props> = props => <HeadingTag4>{props.text}</HeadingTag4>;

const Heading5: React.SFC<Props> = props => <HeadingTag5>{props.text}</HeadingTag5>;

const Heading6: React.SFC<Props> = props => <HeadingTag6>{props.text}</HeadingTag6>;
export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
