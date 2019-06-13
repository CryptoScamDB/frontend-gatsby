import React from 'react';
import styled from 'styled-components';

interface Props {
  blurbs: string[];
}

const BlurbContainer = styled.div`
  border-left: 1px solid #fff;
  padding-left: 1em;
  margin-bottom: 3em;
  width: 30%;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
    display: block;
  }
`;
const Segment = styled.p`
  width: 100%;
`;

const Blurb: React.StatelessComponent<Props> = ({ blurbs }: Props) => (
  <BlurbContainer>
    {blurbs.map((b, k) => (
      <Segment key={k}>{b}</Segment>
    ))}
  </BlurbContainer>
);

export default Blurb;
