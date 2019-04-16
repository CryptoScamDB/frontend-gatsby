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

const Navigation: React.StatelessComponent = () => (
  <div id="header--container-navigation">
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
      <ReportButton>
        <Link to="/report" role="link" tabIndex={4}>
          Report Scams
        </Link>
      </ReportButton>
    </ul>
  </div>
);

export default Navigation;
