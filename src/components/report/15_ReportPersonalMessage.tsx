import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Description } from './styles';

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

    this.validateInput = this.validateInput.bind(this);

    this.state = {
      inputValidated: false
    };
  }

  validateInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { target } = event;
    let strInput = (target as HTMLTextAreaElement).value;
    strInput = strInput.trim();

    if (strInput.length > 0) {
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
          <TextareaMoreDetails rows={10} cols={50} onChange={this.validateInput} />
        </InputContainer>
      </Container>
    );
  }
}
