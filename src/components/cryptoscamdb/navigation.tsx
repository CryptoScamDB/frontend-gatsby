import { Link } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from '../../images/navigation/hamburger.svg';

const ReportButton = styled.li`
  text-transform: uppercase;
  list-style-position: inside;
  border-radius: 2px;
  border: 2px solid #ffd166;
  color: #ffd166;
  letter-spacing: 0.1px;
  line-height: 17px;
  text-align: center;
  margin-left: 2em;
  padding: 1em 2em 1em 1em;

  a {
    color: #ffd166;
  }

  &:hover {
    background: #ffd166;
    color: #fff;

    a {
      color: #000;
    }
  }
`;
const Container = styled.div`
  flex: 1;
  text-align: right;

  ul {
    text-align: right;
    list-style-type: none;
    display: inline;

    li {
      display: inline-block;
      padding-left: 2em;
      margin-bottom: 2em;

      &:first-child {
        display: none;
      }
    }
  }

  a {
    &:active {
      padding-bottom: 1em;
      border-bottom: 1px solid #fff;
    }

    &:hover {
      padding-bottom: 1em;
      border-bottom: 1px solid #fff;
    }
  }

  @media screen and (max-width: 900px) {
    ${(props: Props) =>
      props.isMobileMenuExtended &&
      `
      width: 100vw;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      margin: 0 0;
    `}
    background: ${props => (props.isMobileMenuExtended ? '#001629' : 'transparent')};

    a {
      &:hover {
        border-bottom: 0px solid transparent;
      }
    }

    ul {
      ${(props: Props) =>
        props.isMobileMenuExtended &&
        `
          display: block;
          position: fixed;
          overflow-x: hidden;
          width: 100vw;
          height: 100vh;
          margin-bottom: 0.5em;
      `}

      li {

        &:hover {
          cursor: hand;
        }

        &:first-child { /** The hamburger icon */
          display: block;
          padding: ${props => (props.isMobileMenuExtended ? '5%' : '0')};
        }

        &:not(:first-child) {
          text-align: left;
          display: ${props => (props.isMobileMenuExtended ? 'block' : 'none')};
        }

        &:last-child { /** The report button */
          text-align: center;
          width: 50vw;
          margin: 2.5vw;
        }
    }
  }
`;

interface Props {
  isMobileMenuExtended: boolean;
}

interface State {
  mobileExpanded: boolean;
}

export default class Navigation extends Component<Props, State> {
  static defaultProps = {
    mobileExpanded: false
  };

  constructor(props: Props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      mobileExpanded: false
    };
  }

  handleClick(event: React.MouseEvent) {
    event.preventDefault();
    this.setState({ mobileExpanded: !this.state.mobileExpanded });
  }

  render() {
    return (
      <Container isMobileMenuExtended={this.state.mobileExpanded}>
        <ul>
          <li onClick={this.handleClick}>
            {this.state.mobileExpanded ? `X` : <img alt="Menu" src={Hamburger} />}
          </li>
          <li>
            <Link to="/scams" role="link" tabIndex={1}>
              See Scams
            </Link>
          </li>
          <li>
            <Link to="/verified" role="link" tabIndex={2}>
              Verified Domains
            </Link>
          </li>
          <li>
            <a href="https://api.cryptoscamdb.org" target="_blank" rel="noreferrer" tabIndex={3}>
              API
            </a>
          </li>
          <li>
            <Link to="/faq" role="link" tabIndex={4}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/search" role="link" tabIndex={5}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/mission" role="link" tabIndex={6}>
              Mission Statement
            </Link>
          </li>
          <ReportButton>
            <Link to="/report" role="link" tabIndex={7}>
              Report Scams
            </Link>
          </ReportButton>
        </ul>
      </Container>
    );
  }
}
