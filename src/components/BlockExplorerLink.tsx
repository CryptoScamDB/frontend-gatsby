import React, { Component } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

interface Props {
  address: string[];
  chain: string[];
}

const LinkContainer = styled.div`
  display: inline-block;
`;

export default class BlockExplorerLink extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  constructLink(): string {
    const { address, chain } = this.props;
    switch (chain.toString().toUpperCase()) {
      case 'ETH':
        return `<a href="https://etherscan.io/address/${address}" target="_blank" rel="noreferrer">View in Etherscan</a>`;
      default:
        return ``;
    }
  }

  render() {
    return <LinkContainer>{ReactHtmlParser(this.constructLink())}</LinkContainer>;
  }
}
