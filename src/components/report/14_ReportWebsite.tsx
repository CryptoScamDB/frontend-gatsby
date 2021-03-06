import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import { Container, Description } from './styles';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputLabel = styled.label`
  border-radius: 8px 0 0 8px;
  background-color: #007999;
  color: #fff;
  border: 1px solid #fff;
  font-weight: 400;
  padding: 0.75em;
  height: 17.778px;
`;
const InputField = styled.input`
  padding: 0.75em;
  border: 0;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
`;

interface Props {
  stepCompleted: any;
  stepInvalid: any;
}

interface State {
  inputValidated: boolean;
}

export default class ReportWebsite extends Component<Props, State> {
  static defaultProps = {
    stepCompleted: {},
    stepInvalid: {}
  };

  constructor(props: Props) {
    super(props);

    this.validateAddressInput = this.validateAddressInput.bind(this);

    this.state = {
      inputValidated: false
    };
  }

  validateAddressInput(event: React.KeyboardEvent<HTMLElement>) {
    const { target } = event;
    let strInput = (target as HTMLInputElement).value;
    strInput = strInput.trim();
    strInput.replace(/https?:\/\//g, '');

    if (
      strInput.match(
        new RegExp(
          '^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/?$',
          'g'
        )
      )
    ) {
      this.setState({ inputValidated: true });
      this.props.stepCompleted({
        badDomain: strInput
      });
      return;
    }

    this.props.stepInvalid();
    this.setState({ inputValidated: false });
  }

  render() {
    return (
      <Container>
        <Description>On what website did you find the address?</Description>

        <InputContainer>
          <InputLabel>Website:</InputLabel>
          <InputField
            onKeyUp={this.validateAddressInput}
            type="text"
            placeholder="fake-mycrypto-fake.com"
            maxLength={42}
          />
        </InputContainer>
      </Container>
    );
  }
}
