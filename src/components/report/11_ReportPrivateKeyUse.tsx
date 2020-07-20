import React, { Component, MouseEvent } from 'react';
import { Container, Description, OptionList, Option } from './styles';

interface Props {
  inputValidated: boolean;
  changeStep: any;
}

export default class ReportPrivateKeyUse extends Component<Props> {
  static defaultProps = {
    inputValidated: false,
    changeStep: null
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Description>
          We need to know more about where you've been. <br />
          Have you entered your private key on any site other than MyCrypto.com? <br />
          Not sure how to do this? Learn how to check your browsing history
        </Description>

        <OptionList>
          <Option onClick={this.props.changeStep} value="12">
            No
          </Option>
          <Option onClick={this.props.changeStep} value="13">
            Yes
          </Option>
          <Option onClick={this.props.changeStep} value="17">
            I'm not sure
          </Option>
        </OptionList>
      </Container>
    );
  }
}
