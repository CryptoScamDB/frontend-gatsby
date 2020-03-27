import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div``;
const Container = styled.div`
  width: 100%;
  display: flex;
  background: rgb(245, 197, 97);
  padding: 0 0.5em;

  > p {
    text-align: center;
    width: 100%;
    color: #3a5f78;

    > a {
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

const Banner: React.StatelessComponent = () => (
  <BannerContainer>
    <Container>
      <p>
        Like what we're doing? If so, please consider contributing to{' '}
        <a href="https://gitcoin.co/grants/347/cryptoscamdb" target="_blank" rel="noreferrer">
          CryptoScamDB's Gitcoin grant
        </a>
        ! Right now, all contributions are being matched. Thank you!
      </p>
    </Container>
  </BannerContainer>
);

export default Banner;
