import React, { Component } from 'react';
import { Container, Description, OptionList, Option, SubTextLink } from './styles';

interface Props {
  inputValidated: boolean;
  changeStep: any;
}

export default class SentToWrongAddress extends Component<Props> {
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
          <strong>Unfortunately there is no way to refund your funds.</strong> <br />
          Where did you find the address you sent funds to?
        </Description>

        <SubTextLink>
          If anybody claims they can recover your funds, get them to{' '}
          <a
            href="https://support.mycrypto.com/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum"
            target="_blank"
            rel="noreferrer"
          >
            sign a message you can verify
          </a>
          . Please do not trust anybody offering a refund service!
        </SubTextLink>

        <OptionList>
          <Option onClick={this.props.changeStep} value="14">
            A Website
          </Option>
          <Option onClick={this.props.changeStep} value="15">
            A personal message
          </Option>
          <Option onClick={this.props.changeStep} value="16">
            Somewhere else
          </Option>
        </OptionList>
      </Container>
    );
  }
}
