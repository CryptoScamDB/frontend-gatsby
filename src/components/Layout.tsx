import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Footer from '../components/cryptoscamdb/footer';
import '../css/layout.scss';

import RobotBg from '../images/background-big.jpg';

const PageView = styled.div`
  width: 100%;
  background: #001629;
  color: #ffffff;
  height: 100%;
  width: 100%;
  font-family: 'Lato', sans-serif;

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
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Unna&display=swap"
          rel="stylesheet"
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
          <Footer />
        </Container>
      </PageView>
    )}
  />
);

export default Layout;
