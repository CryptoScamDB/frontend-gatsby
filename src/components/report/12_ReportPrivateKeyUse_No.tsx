import React, { Component, MouseEvent } from 'react';
import { Container, Description, OptionList, Option } from './styles';

interface Props {
  inputValidated: boolean;
  changeStep: any;
}

export default class ReportPrivateKeyUseNo extends Component<Props> {
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
        <Description>Have you sent funds to the wrong address?</Description>

        <OptionList>
          <Option onClick={this.props.changeStep} value="20">
            No
          </Option>
          <Option onClick={this.props.changeStep} value="13">
            Yes
          </Option>
        </OptionList>
      </Container>
    );
  }
}
