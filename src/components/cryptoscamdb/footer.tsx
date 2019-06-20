import React from 'react';
import styled from 'styled-components';
import LogoPoweredByMyCrypto from '../../images/logo/powered-by-mycrypto.svg';

const Container = styled.div`
  margin: 0 5%;
  width: 90%;
  padding-top: 5em;
  padding-bottom: 3em;

  @media (max-width: 968px) {
    width: 100%;
    margin: 0;
  }
`;

const Footer: React.StatelessComponent = () => (
  <Container>
    <img title="Powered By MyCrypto" alt="Powered By MyCrypto" src={LogoPoweredByMyCrypto} />
  </Container>
);

export default Footer;
