import React, { Component } from 'react';
import {
  Container,
  Description,
  InputContainer,
  InputLabel,
  InputField,
  TextareaMoreAddresses
} from './styles';

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
        badAddresses: '' //@todo - get value of MoreAddresses
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
            maxLength={42}
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
