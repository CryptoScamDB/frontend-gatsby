import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Description, SubTextLink } from './styles';

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
  input: boolean;
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

    this.validateInput = this.validateInput.bind(this);

    this.state = {
      inputValidated: false,
      inputValid: {
        input: false
      }
    };
  }

  validateInput(event: React.KeyboardEvent<HTMLElement>) {
    const { target } = event;
    let strInput = (target as HTMLInputElement).value;
    strInput = strInput.trim();

    if (strInput) {
      this.setState({ inputValid: { input: true } });
      this.setState({ inputValidated: true });
      this.props.stepCompleted({
        badExtension: strInput
      });
      this.props.stepCompleted();
      return;
    } else {
      this.setState({ inputValid: { input: false } });
    }

    this.props.stepInvalid();
    this.setState({ inputValidated: false });
  }

  render() {
    return (
      <Container>
        <Description>What malicious browser extension would you like to report?</Description>
        <SubTextLink>
          Help the community be aware of this problem by reading and sharing research on these
          malicious extensions! <br />
          <a
            href="https://medium.com/mycrypto/discovering-fake-browser-extensions-that-target-users-of-ledger-trezor-mew-metamask-and-more-e281a2b80ff9"
            target="_blank"
            rel="noreferrer"
          >
            Discovering Fake Browser Extensions That Target Users of Ledger, Trezor, MEW, Metamask,
            and More
          </a>
        </SubTextLink>

        <InputContainer>
          <InputLabel>Extension Link:</InputLabel>
          <InputField
            onKeyUp={this.validateInput}
            type="text"
            placeholder="https://chrome.google.com/webstore/detail/ledger-live/kphogdpmodamipjcohopkabelaknhmij"
            maxLength={250}
          />
        </InputContainer>
      </Container>
    );
  }
}
