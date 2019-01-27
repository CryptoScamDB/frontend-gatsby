import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from '../components/image'

const Header = ({ siteTitle, siteLogo }) => (
  <div id="header">
    <div id="header--container">
      <div id="header--container-brand">
        <Link to="/">
          <img src="icons/icon-144x144.png" />
        </Link>
      </div>
      <div id="header--container-navigation">
        <ul>
          <li><Link to="/scams">See Scams</Link></li>
          <li><Link to="/verified">Verified Domains</Link></li>
          <li><Link to="/api">API</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteLogo: `images/logo/csdb-logo.svg`
}

export default Header
