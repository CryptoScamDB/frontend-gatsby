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
const TextareaMoreAddresses = styled.textarea`
  border-radius: 8px 0 0 8px;
  background-color: transparent;
  color: #fff;
  padding: 1em;
  margin-bottom: 2em;
`;
const InputError = styled.div`
  color: #ce3a44;
`;

interface Props {
  stepCompleted: any;
  stepInvalid: any;
}

interface IInputValid {
  yourAddress: boolean;
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
        yourAddress: false
      }
    };
  }

  validateAddressInput(event: React.KeyboardEvent<HTMLElement>) {
    const { target } = event;
    let strInput = (target as HTMLInputElement).value;
    strInput = strInput.trim();

    this.setState({ inputValid: { yourAddress: true } });

    if (
      strInput.match(new RegExp('^0x[a-fA-F0-9]{40}$', 'g')) ||
      strInput.match(new RegExp('^[A-z0-9-]{7,}.eth$', 'g'))
    ) {
      this.setState({ inputValidated: true });
      this.props.stepCompleted({
        userAddress: strInput,
        badAddresses: ''
      });
      return;
    } else {
      this.setState({ inputValid: { yourAddress: false } });
    }

    this.props.stepInvalid(true);
    this.setState({ inputValidated: false });
  }

  render() {
    return (
      <Container>
        <Description>
          We're sorry to hear that! <br />
          Can you please provide your wallet address below.
        </Description>

        <InputContainer>
          <InputLabel>Your wallet address:</InputLabel>
          <InputField
            onKeyUp={this.validateAddressInput}
            type="text"
            placeholder="0x0000000000000000000000000000000000000000"
            maxlength="42"
            length="42"
          />
          {/* <InputError ShowError={this.state.inputValid.yourAddress}>Please fill your wallet address</InputError> */}
        </InputContainer>

        <Description>
          What we can do together is to help other avoid the same scam! <br />
          Do you know the addresses the attacker used to launder your money? <br />
          If so, please share them below (one address per line)
        </Description>

        <InputContainer>
          <TextareaMoreAddresses rows={10} cols={50} name="MoreAddresses" />
        </InputContainer>
      </Container>
    );
  }
}
