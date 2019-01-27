import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/layout.scss'

const Layout = ({ id, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <div id={id}>
          <Header siteTitle={data.site.siteMetadata.title} />
            <div id={id +"--container"}>
              {children}
              <footer>
                
              </footer>
            </div>
        </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
