import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

import Navigation from './navigation';

import Step10 from './10_ReportUserAddress';
import Step11 from './11_ReportPrivateKeyUse';
import Step12 from './12_ReportPrivateKeyUse_No';
import Step13 from './13_SentToWrongAddress';
import Step14 from './14_ReportWebsite';
import Step15 from './15_ReportPersonalMessage';
import Step16 from './16_ReportSomethingElse';
import Step17 from './17_PrivateKeyNotSure';

import Step20 from './20_ReportAddressDomainOrOther';
import Step21 from './21_ReportDomain';
import Step22 from './22_ReportAddress';
import Step23 from './23_ReportSomethingElse';

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
`;

const OptionList = styled.ul`
  text-align: right;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Option = styled.li`
  display: inline-block;
  list-style-position: inside;
  border-radius: 2px;
  border: 2px solid #fff;
  color: #fff;
  letter-spacing: 0.1px;
  line-height: 17px;
  text-align: center;
  margin-left: 2em;
  padding: 1em 1em 1em 1em;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  reportAddress: string;
  reportDomain: string;
  reportNotes: string;
  enteredPrivateKey: string;
}

interface IUserReport {
  userAddress: string | any;
  badAddresses: string[];
  badDomain: string;
  badPersonalMessage: string;
  badSomethingElse: string;
}

interface State {
  currentStep: number;
  canContinue: boolean;
  previousStep: number;
  userReport: IUserReport;
}

export default class Home extends Component<Props, State> {
  static defaultProps = {
    reportAddress: null,
    reportDomain: null,
    reportNotes: null,
    enteredPrivateKey: null
  };

  constructor(props: Props) {
    super(props);
    this.changeStep = this.changeStep.bind(this);
    this.stepCompleted = this.stepCompleted.bind(this);
    this.stepInvalid = this.stepInvalid.bind(this);

    this.state = {
      currentStep: 0,
      canContinue: false,
      previousStep: 0,
      userReport: {
        userAddress: '',
        badAddresses: [],
        badDomain: '',
        badPersonalMessage: '',
        badSomethingElse: ''
      }
    };
  }

  changeStep(event: MouseEvent<HTMLElement>) {
    const { target } = event;
    const intStep = (target as HTMLElement).getAttribute('value');
    if (intStep) {
      this.setState({ previousStep: this.state.currentStep });
      this.setState({ currentStep: parseInt(intStep, 10) });
      this.setState({ canContinue: false });
    }
  }

  stepCompleted(objUserInput) {
    if (objUserInput) {
      for (const strKey in objUserInput) {
        if (objUserInput.hasOwnProperty(strKey)) {
          const strValue = objUserInput[strKey];

          if (strKey in this.state.userReport) {
            this.state.userReport[strKey] = strValue;
          }
        }
      }
    }

    // Input for the step has been validated
    this.setState({ canContinue: true });
  }

  stepInvalid() {
    // Input for the step has been validated
    this.setState({ canContinue: false });
  }

  render() {
    /**
     * We are using a number system in the component state to bring in new views.
     * Due to the numbering, each route can have 9 steps after the initial - we
     * are reserving 10 numbers for each starting point. I.e.: the first route
     * is state 10 and substeps are 11, 12, 13, ..., 18, 19. This allows
     * us to go more granular if we want.
     */
    switch (this.state.currentStep) {
      default:
      case 0: // Main view for starting a report
        return (
          <Container>
            <Description>Has any of your money been stolen?</Description>

            <OptionList>
              <Option onClick={this.changeStep} value="10">
                Yes, it was
              </Option>
              <Option onClick={this.changeStep} value="20">
                No, I want to report an address/website
              </Option>
              <Option onClick={this.changeStep} value="17">
                I'm not sure
              </Option>
            </OptionList>
          </Container>
        );
        break;
      case 10: // Report your address where funds were stolen
        return (
          <Container>
            <Step10 stepCompleted={this.stepCompleted} stepInvalid={this.stepInvalid} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              previousStep={this.state.previousStep}
            />
          </Container>
        );
        break;
      case 20: // Switchboard on reporting an address, domain, or something else
        return (
          <Container>
            <Step20 changeStep={this.changeStep} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              previousStep={0}
              onlyShowBack={true}
            />
          </Container>
        );
        break;
      case 11: // Switchboard to ask if you entered your key on something other than MyCrypto
        return (
          <Container>
            <Step11 changeStep={this.changeStep} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              previousStep={this.state.previousStep}
              onlyShowBack={true}
            />
          </Container>
        );
        break;
      case 12: // Ask if they sent funds to the wrong address
        return (
          <Container>
            <Step12 changeStep={this.changeStep} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={true}
              previousStep={11}
            />
          </Container>
        );
        break;
      case 13: // They sent to the wrong address
        return (
          <Container>
            <Step13 changeStep={this.changeStep} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={true}
              previousStep={12}
            />
          </Container>
        );
        break;
      case 14: // They are reporting a website
        return (
          <Container>
            <Step14 stepCompleted={this.stepCompleted} stepInvalid={this.stepInvalid} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={false}
              previousStep={this.state.previousStep}
              isSendAction={true}
            />
          </Container>
        );
        break;
      case 15: // They are reporting a personal message
        return (
          <Container>
            <Step15 stepCompleted={this.stepCompleted} stepInvalid={this.stepInvalid} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={false}
              previousStep={this.state.previousStep}
              isSendAction={true}
            />
          </Container>
        );
        break;
      case 16: // They are reporting something else
        return (
          <Container>
            <Step16 stepCompleted={this.stepCompleted} stepInvalid={this.stepInvalid} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={false}
              previousStep={this.state.previousStep}
              isSendAction={true}
            />
          </Container>
        );
        break;
      case 17: // They aren't sure if they shared their private key
        return (
          <Container>
            <Step17 />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={true}
              previousStep={this.state.previousStep}
            />
          </Container>
        );
        break;
      case 21: // They are reporting a malicious domain
        return (
          <Container>
            <Step21 stepCompleted={this.stepCompleted} stepInvalid={this.stepInvalid} />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={false}
              previousStep={this.state.previousStep}
              isSendAction={true}
            />
          </Container>
        );
        break;
      case 22: // They are reporting a malicious address
        return (
          <Container>
            <Step22 />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={false}
              previousStep={this.state.previousStep}
              isSendAction={true}
            />
          </Container>
        );
        break;
      case 23: // They are reporting something else
        return (
          <Container>
            <Step23 />
            <Navigation
              canContinue={this.state.canContinue}
              changeStep={this.changeStep}
              onlyShowBack={false}
              previousStep={this.state.previousStep}
              isSendAction={true}
            />
          </Container>
        );
        break;
      case 99: // They are sending the report
        return <Container>{JSON.stringify(this.state.userReport)}</Container>;
    }
  }
}