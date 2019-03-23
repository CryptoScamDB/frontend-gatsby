import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import '../css/layout.scss';

interface Props {
  id?: any;
  children: any;
}

const Layout: React.StatelessComponent<Props> = ({ id, children }: Props) => (
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
              <footer />
            </div>
        </div>
    )}
  />
);

export default Layout;