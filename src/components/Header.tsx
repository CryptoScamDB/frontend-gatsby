import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import siteLogo from '../images/logo/csdb-logo.svg';
import Navigation from './cryptoscamdb/navigation';

interface Props {
  siteTitle: string;
}

const HeaderContainer = styled.div`
  padding: 2em 5em 2em 5em;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Brand = styled.div`
  flex: 0 0 55%;
`;

const Header: React.StatelessComponent<Props> = ({ siteTitle }: Props) => (
  <>
    <HeaderContainer>
      <Container>
        <Brand>
          <Link to="/">
            <img title={siteTitle} alt={siteTitle} src={siteLogo} />
          </Link>
        </Brand>
        <Navigation />
      </Container>
    </HeaderContainer>
  </>
);

export default Header;
