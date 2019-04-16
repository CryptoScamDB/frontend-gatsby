import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #0c3153;
  width: 100%;
  height: 100%;
  min-height: 20em;
`;

const Description = styled.h3`
  padding-top: 2em;
  color: #ffd166;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2em;

  > ul {
    padding-left: 35%;
    text-align: left;

    > li {
      line-height: 2em;

      > a {
        color: #fff;
        font-weight: 400;
      }
    }
  }
`;

const SubText = styled.p`
  color: #fff;
  text-align: left;
  padding-left: 25%;
  width: 50%;
`;

export default class ReportSubmit extends Component {
  render() {
    return (
      <Container>
        <Description>Thank you!</Description>

        <Description>
          We've recieved your report! In the meanwhile, you can learn how to protect yourself and
          others in the future:
          <ul>
            <li>
              Read our security guide -{' '}
              <a
                href="https://medium.com/mycrypto/mycryptos-security-guide-for-dummies-and-smart-people-too-ab178299c82e"
                rel="noreferrer"
                target="_blank"
              >
                MyCrypto’s Security Guide For Dummies And Smart People Too
              </a>
            </li>
            <li>
              Get yourself a hardware wallet -{' '}
              <a
                href="https://www.ledgerwallet.com/r/1985?path=/products/"
                rel="noreferrer"
                target="_blank"
              >
                Ledger
              </a>{' '}
              or{' '}
              <a
                href="https://shop.trezor.io/?offer_id=10&aff_id=1735"
                rel="noreferrer"
                target="_blank"
              >
                TREZOR
              </a>
            </li>
          </ul>
        </Description>

        <SubText>
          <p>
            <strong>What your report helps us with:</strong> <br />
            Now we can request takedowns of any URLS you've provided and alert others to be aware of
            the scam. This also helps us continue research and development on how to make crypto
            more safe.
          </p>

          <p>
            <strong>Continue to help the community!</strong> <br />
            Spread the word about this scam. Blog about it, tweet about it, scream it from the
            rooftops! Let's make sure other people can keep their funds safe too.
          </p>
        </SubText>
      </Container>
    );
  }
}
