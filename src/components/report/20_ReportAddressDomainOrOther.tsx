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
          {/* <Option onClick={this.props.changeStep} value="23">
            Something else
          </Option> */}
        </OptionList>
      </Container>
    );
  }
}
