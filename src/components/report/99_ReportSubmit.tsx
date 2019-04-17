import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

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

  state = {
    hasSentReport: false,
    reportId: '',
    errorString: ''
  };

  constructor(props: Props) {
    super(props);
    this.sendReport = this.sendReport.bind(this);
  }

  async sendReport() {
    this.setState({ errorString: '' });
    const objResponse = await Axios.post(`${process.env.CSDB_EXPRESS_ENDPOINT}/api/report`, {
      g_recaptcha_response: 'test',
      full_report: this.props.report
    })
      .then(response => {
        switch (response.data.status_code) {
          case 200:
          case 201:
            return {
              sentReport: true,
              reportId: response.data.report_id,
              errorString: ''
            };
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
                sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
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
