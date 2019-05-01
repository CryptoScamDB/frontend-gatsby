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
const TextareaMore = styled.textarea`
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
  report: boolean;
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
        report: false
      }
    };
  }

  validateAddressInput(event: React.KeyboardEvent<HTMLElement>) {
    const { target } = event;
    let strInput = (target as HTMLInputElement).value;
    strInput = strInput.trim();

    this.setState({ inputValid: { report: true } });

    // if(strInput.match(new RegExp("^0x[a-fA-F0-9]{40}$", "g"))
    //   || strInput.match(new RegExp("^[A-z0-9\-]{7,}\.eth$", "g"))) {
    //   this.setState({inputValidated: true});
    //   this.props.stepCompleted();
    //   return;
    // } else {
    //   this.setState({inputValid: {report: false}})
    // }

    // this.props.stepInvalid();
    // this.setState({report: false});

    this.setState({ inputValidated: true });
    this.props.stepCompleted();
    return;
  }

  render() {
    return (
      <Container>
        <Description>
          We want to make sure we can help you!
          <br />
          What would you like to report?
        </Description>

        <InputContainer>
          <TextareaMore rows={10} cols={50} />
        </InputContainer>
      </Container>
    );
  }
}
