import React, { Component, MouseEvent } from 'react';
import { Container, Description, OptionList, Option } from './styles';

interface Props {
  changeStep: any;
}

export default class ReportAddressDomainOrOther extends Component<Props> {
  static defaultProps = {
    changeStep: null
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Description>Do you want to report a domain or an address?</Description>

        <OptionList>
          <Option onClick={this.props.changeStep} value="21">
            Domain
          </Option>
          <Option onClick={this.props.changeStep} value="22">
            Address
          </Option>
          <Option onClick={this.props.changeStep} value="24">
            Browser Extension
          </Option>
          {/* <Option onClick={this.props.changeStep} value="23">
            Something else
          </Option> */}
        </OptionList>
      </Container>
    );
  }
}
