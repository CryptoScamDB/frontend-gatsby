import { Link } from 'gatsby';
import React from 'react';
import siteLogo from '../images/logo/csdb-logo.svg';
import Navigation from './cryptoscamdb/navigation';

interface Props {
  siteTitle: string;
}

const Header: React.StatelessComponent<Props> = ({ siteTitle }: Props) => (
  <div id="header">
    <div id="header--container">
      <div id="header--container-brand">
        <Link to="/">
          <img title={siteTitle} alt={siteTitle} src={siteLogo} />
        </Link>
      </div>
      <Navigation />
    </div>
  </div>
);

export default Header;
