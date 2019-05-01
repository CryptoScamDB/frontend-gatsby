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
const TextareaMoreDetails = styled.textarea`
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

interface State {
  inputValidated: boolean;
}

export default class ReportPersonalMessage extends Component<Props, State> {
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
          '^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$',
          'g'
        )
      )
    ) {
      this.setState({ inputValidated: true });
      this.props.stepCompleted({
        badPersonalMessage: strInput
      });
      return;
    }

    this.props.stepInvalid();
    this.setState({ inputValidated: false });
  }

  render() {
    return (
      <Container>
        <Description>
          What message was sent to you? <br />
          Include details like the name of the user, platform, timestamp, etc.
        </Description>

        <InputContainer>
          <TextareaMoreDetails rows={10} cols={50} />
        </InputContainer>
      </Container>
    );
  }
}
