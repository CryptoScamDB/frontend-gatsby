import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #0c3153;
  width: 100%;
  height: 100%;
  min-height: 20em;
`;

const Description = styled.h3`
  padding-top: 2em;
  color: #ffd166;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2em;
`;

const SubText = styled.p`
  color: #fff;
  text-align: center;
`;

interface Props {
  stepCompleted: any;
  stepInvalid: any;
}

interface State {
  inputValidated: boolean;
}

export default class PrivateKeyNotSure extends Component<Props, State> {
  static defaultProps = {
    stepCompleted: {},
    stepInvalid: {}
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      inputValidated: false
    };
  }

  render() {
    return (
      <Container>
        <Description>Check your browsing history</Description>

        <SubText>
          To check your browsing history, use CTRL + H (Windows) or Command + Shift + H (macOS).{' '}
          <br />
          See if you notice any domains that are slightly different than expected. Things like
          mycrypto.co instead of mycrypto.com or mycyrpto.com instead of mycrypto.com.
        </SubText>
      </Container>
    );
  }
}
