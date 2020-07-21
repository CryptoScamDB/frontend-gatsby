import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Banner from './Banner';
import Footer from '../components/cryptoscamdb/footer';
import '../css/layout.scss';

import RobotBg from '../images/background-big.png';

const PageView = styled.div`
  background: #001629;
  color: #ffffff;
  height: 100%;
  width: 100%;
  font-family: 'Lato', sans-serif;

  ${(props: Props) =>
    props.imageBg &&
    `
    @media (min-width: 1200px) {
      background: url(${RobotBg}) no-repeat center center;
      background-position: center center;
      background-size: cover;
      min-height: 100vh;
    }
  `}
`;

const Container = styled.div`
  margin-top: 2em;
  padding: 0em;

  @media screen and (max-width: 900px) {
    display: ${(props: Props) => (props.isMobileMenuExtended ? 'none' : 'block')};
  }
`;

interface Props {
  id?: any;
  children: any;
  imageBg: boolean;
  isMobileMenuExtended: boolean;
}

interface State {
  isMobileMenuExtended: boolean;
}

export default class Layout extends Component<Props, State> {
  static defaultProps = {
    mobileExpanded: false
  };

  constructor(props: Props) {
    super(props);

    this.handleMobileMenuExpand = this.handleMobileMenuExpand.bind(this);

    this.state = {
      isMobileMenuExtended: false
    };
  }

  handleMobileMenuExpand(event: React.MouseEvent) {
    event.preventDefault();
    this.setState({ isMobileMenuExtended: !this.state.isMobileMenuExtended });
  }

  render() {
    const { isMobileMenuExtended } = this.state;
    const { imageBg } = this.props;

    return (
      <PageView isMobileMenuExtended={isMobileMenuExtended} imageBg={imageBg} id={this.props.id}>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Unna&display=swap"
          rel="stylesheet"
        />
        <Header siteTitle="CryptoScamDB" handleMobileMenuExtend={this.handleMobileMenuExpand} />
        <Container imageBg={imageBg} isMobileMenuExtended={isMobileMenuExtended}>
          {this.props.children}
          <Footer />
        </Container>
      </PageView>
    );
  }
}
