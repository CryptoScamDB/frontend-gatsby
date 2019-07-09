import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import * as querystring from 'querystring';
import { API_ENDPOINT, RECAPTCHA_SITEKEY } from '../../../gatsby/config';

const Recaptcha = require('react-recaptcha');

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

const ErrorText = styled.p`
  text-align: center;
`;

const NoRobots = styled.div`
  margin: 0em auto;
  padding: 2em 0;
  width: 10%;
  text-align: center;
`;

interface Props {
  report: string;
}

export default class ReportSubmit extends Component<Props> {
  static defaultProps = {
    report: ''
  };

  recaptcha: any;

  state = {
    hasSentReport: false,
    reportId: '',
    errorString: ''
  };

  constructor(props: Props) {
    super(props);
    this.sendReport = this.sendReport.bind(this);
  }

  async sendReport(captchaResponse) {
    this.setState({ errorString: '' });
    const reportData = JSON.parse(this.props.report);
    const reportObject = {
      reportType: 'customReport',
      'args[captcha]': captchaResponse
    };
    Object.keys(reportData).forEach(key => {
      reportObject[`args[${key}]`] = reportData[key];
    });
    const objResponse = await Axios.post(
      `${API_ENDPOINT}/report/`,
      querystring.stringify(reportObject),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then(response => {
        switch (response.status) {
          case 200:
          case 201:
            if (response.data.success) {
              return {
                sentReport: true,
                reportId: response.data.report_id,
                errorString: ''
              };
            } else {
              return {
                sentReport: false,
                reportId: null,
                errorString: `Please try again, or tweet us @CryptoScamDB if the problem persists.`
              };
            }
            break;
          default:
            return {
              sentReport: false,
              reportId: null,
              errorString: response.data.message
            };
            break;
        }
      })
      .catch(error => {
        return {
          sentReport: false,
          reportId: null,
          errorString: 'Please try again later.'
        };
      });

    switch (objResponse.sentReport) {
      case true:
        this.setState({ hasSentReport: true, reportId: objResponse.reportId });
        break;
      case false:
      default:
        this.setState({ hasSentReport: false, errorString: objResponse.errorString });
        this.resetCaptcha();
        break;
    }
  }

  resetCaptcha() {
    this.recaptcha.reset();
  }

  render() {
    switch (this.state.hasSentReport) {
      default:
      case false:
        return (
          <Container>
            <NoRobots>
              <Recaptcha
                sitekey={RECAPTCHA_SITEKEY}
                verifyCallback={this.sendReport}
                ref={e => (this.recaptcha = e)}
                expiredCallback={this.resetCaptcha}
              />
            </NoRobots>
            <ErrorText>{this.state.errorString}</ErrorText>
          </Container>
        );
        break;
      case true:
        return (
          <Container>
            <script src="https://www.google.com/recaptcha/api.js" />
            <Description>
              Thank you! <br /> We've recieved your report!
            </Description>
            <Description>
              <strong>Your Reference:</strong> {this.state.reportId}
              <SubText>
                Make sure you keep a note of this reference ID in case you want to talk to us in the
                future about your report - including a request for deletion.
              </SubText>
            </Description>
            <Description>
              In the meanwhile, you can learn how to protect yourself and others in the future:
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
                Now we can request takedowns of any URLS you've provided and alert others to be
                aware of the scam. This also helps us continue research and development on how to
                make crypto more safe.
                <br />
                <br />
                <strong>Continue to help the community!</strong> <br />
                Spread the word about this scam. Blog about it, tweet about it, scream it from the
                rooftops! Let's make sure other people can keep their funds safe too.
              </p>
            </SubText>
          </Container>
        );
        break;
    }
  }
}
