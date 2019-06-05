import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

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
`;

const Navigation: React.StatelessComponent = () => (
  <Container>
    <ul>
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
        <a href="https://api.cryptoscamdb.org" tabIndex={3}>
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

export default Navigation;
