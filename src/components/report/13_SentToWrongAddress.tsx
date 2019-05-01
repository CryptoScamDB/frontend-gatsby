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

const OptionList = styled.ul`
  text-align: right;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Option = styled.li`
  display: inline-block;
  list-style-position: inside;
  border-radius: 2px;
  border: 2px solid #fff;
  color: #fff;
  letter-spacing: 0.1px;
  line-height: 17px;
  text-align: center;
  margin-left: 2em;
  padding: 1em 1em 1em 1em;

  &:hover {
    cursor: pointer;
  }
`;

const SubText = styled.p`
  color: #fff;
  text-align: center;

  a {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: #fff;
  }
`;

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

        <SubText>
          If anybody claims they can recover your funds, get them to{' '}
          <a
            href="https://support.mycrypto.com/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum"
            target="_blank"
            rel="noreferrer"
          >
            sign a message you can verify
          </a>
          . Please do not trust anybody offering a refund service!
        </SubText>

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
