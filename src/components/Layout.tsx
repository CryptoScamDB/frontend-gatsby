import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import '../css/layout.scss';

import RobotBg from '../images/logo/robot-and-bg.png';

const PageView = styled.div`
  width: 100%;
  background: #000d15;
  color: #ffffff;
  height: 100%;
  width: 100%;
  font-family: 'Roboto', sans-serif;

  ${(props: Props) =>
    props.imageBg &&
    `
    @media (min-width: 1200px) {
      background: url(${RobotBg}) no-repeat center center fixed;
      background-position: center center;
      background-size: cover;
      height: 100vh;
    }
  `}
`;

const Container = styled.div`
  margin-top: 2em;
  padding: 0em;
`;

interface Props {
  id?: any;
  children: any;
  imageBg: boolean;
}

const Layout: React.StatelessComponent<Props> = ({ id, children, imageBg }: Props) => (
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
      <PageView imageBg={imageBg} id={id}>
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
