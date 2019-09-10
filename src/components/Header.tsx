import { Link } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';
import siteLogo from '../images/logo/csdb-logo.svg';
import Navigation from './cryptoscamdb/navigation';

interface Props {
  siteTitle: string;
  handleMobileMenuExtend: any;
}

const HeaderContainer = styled.div`
  padding: 2em 5em 2em 5em;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Brand = styled.div`
  flex: 0 0 55%;
  @media screen and (max-width: 900px) {
    padding-bottom: 2em;
  }
`;

interface Props {
  siteTitle: string;
}

interface State {
  mobileExpanded: boolean;
}

export default class Header extends Component<Props, State> {
  static defaultProps = {
    mobileExpanded: false
  };

  constructor(props: Props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      mobileExpanded: false
    };
  }

  handleMenuClick(event: React.MouseEvent) {
    event.preventDefault();
    this.setState({ mobileExpanded: !this.state.mobileExpanded });

    this.props.handleMobileMenuExtend(event);
  }

  render() {
    return (
      <HeaderContainer>
        <Container>
          <Brand>
            <Link to="/">
              <img title={this.props.siteTitle} alt={this.props.siteTitle} src={siteLogo} />
            </Link>
          </Brand>
          <Navigation
            isMobileMenuExtended={this.state.mobileExpanded}
            handleMobileMenuClick={this.handleMenuClick}
          />
        </Container>
      </HeaderContainer>
    );
  }
}
