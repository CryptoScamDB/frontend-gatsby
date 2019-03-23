import { Link } from 'gatsby';
import React from 'react';
import siteLogo from '../images/logo/csdb-logo.svg';

interface Props {
  siteTitle: string;
}

export default ({ siteTitle }: Props) => (
  <div id="header">
    <div id="header--container">
      <div id="header--container-brand">
        <Link to="/">
          <img title={siteTitle} alt={siteTitle} src={siteLogo} />
        </Link>
      </div>
      <div id="header--container-navigation">
        <ul>
          <li><Link to="/scams" role="link" tabIndex="1">See Scams</Link></li>
          <li><Link to="/verified" role="link" tabIndex="2">Verified Domains</Link></li>
          <li><a href="https://api.cryptoscamdb.org" tabIndex="3">API</a></li>
          <li><Link to="/faq" role="link" tabIndex="4">FAQ</Link></li>
        </ul>
      </div>
    </div>
  </div>
) as React.StatelessComponent<Props>;