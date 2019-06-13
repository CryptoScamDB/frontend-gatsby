import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import '../css/layout.scss';

const PageView = styled.div`
  width: 100%;
`;
const Container = styled.div`
  margin-top: 2em;
  padding: 0em;
`;

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
      <PageView id={id}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
          <footer />
        </Container>
      </PageView>
    )}
  />
);

export default Layout;
