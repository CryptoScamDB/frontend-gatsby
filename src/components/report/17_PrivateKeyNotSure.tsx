import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Description } from './styles';

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
          <br />
          <br />
          Remember to use a read-only block explorer to just check your balance, no need to unlock
          your wallet to just check your balances.
        </SubText>
      </Container>
    );
  }
}
