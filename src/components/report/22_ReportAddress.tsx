import React, { Component } from 'react';
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

interface IInputValid {
  maliciousAddress: boolean;
}

interface State {
  inputValidated: boolean;
  inputValid: IInputValid;
}
export default class ReportAddress extends Component<Props, State> {
  static defaultProps = {
    stepCompleted: {},
    stepInvalid: {}
  };

  constructor(props: Props) {
    super(props);

    this.validateAddressInput = this.validateAddressInput.bind(this);

    this.state = {
      inputValidated: false,
      inputValid: {
        maliciousAddress: false
      }
    };
  }

  validateAddressInput(event: React.KeyboardEvent<HTMLElement>) {
    const { target } = event;
    let strInput = (target as HTMLInputElement).value;
    strInput = strInput.trim();

    this.setState({ inputValid: { maliciousAddress: true } });

    if (
      strInput.match(new RegExp('^0x[a-fA-F0-9]{40}$', 'g')) ||
      strInput.match(new RegExp('^[A-z0-9-]{7,}.eth$', 'g'))
    ) {
      this.setState({ inputValidated: true });
      this.props.stepCompleted({
        badAddress: strInput
      });
      this.props.stepCompleted();
      return;
    } else {
      this.setState({ inputValid: { maliciousAddress: false } });
    }

    this.props.stepInvalid();
    this.setState({ inputValidated: false });
  }

  render() {
    return (
      <Container>
        <Description>What malicious address would you like to report?</Description>

        <InputContainer>
          <InputLabel>Address:</InputLabel>
          <InputField
            onKeyUp={this.validateAddressInput}
            type="text"
            placeholder="0x0000000000000000000000000000000000000000"
            maxLength={42}
          />
        </InputContainer>
      </Container>
    );
  }
}
