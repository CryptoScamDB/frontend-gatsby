import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

import LeftArrow from '../../images/navigation/left.svg';
import RightArrow from '../../images/navigation/right.svg';

interface PageButtonProps {
  isDisabled: boolean;
}

const PageNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;
const PageButton = styled.div`
  background: transparent;
  padding: 0 1em;
  height: 19px;
  color: ${(props: PageButtonProps) => (props.isDisabled ? '#EBEBEB' : '#FFF')}
  font-size: 16px;
  letter-spacing: 0.91px;
  line-height: 19px;
  text-align: center;
  opacity: ${(props: PageButtonProps) => (props.isDisabled ? '0.5' : '1')}

  > img {
    display: inline;
    padding: 0 1em;
    vertical-align: middle;
  }

  &:hover {
    cursor: ${(props: PageButtonProps) => (props.isDisabled ? 'not-allowed' : 'pointer')}
  }
`;

interface Props {
  canContinue: boolean;
  changeStep: any;
  onlyShowBack: boolean;
  previousStep: number;
  isSendAction: boolean;
  isDisabled: boolean;
}

export default class Navigation extends Component<Props> {
  static defaultProps = {
    canContinue: false,
    changeStep: null,
    onlyShowBack: false,
    previousStep: 0,
    isSendAction: false,
    isDisabled: false
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <PageNavigationContainer>
        <PageButton onClick={this.props.changeStep} isDisabled={false}>
          <img src={LeftArrow} alt="Go Back" />
          Back
        </PageButton>

        {this.props.onlyShowBack ? (
          ``
        ) : (
          <PageButton
            onClick={this.props.canContinue ? this.props.changeStep : null}
            isDisabled={this.props.canContinue ? false : true}
          >
            {this.props.isSendAction ? 'Send' : 'Continue'}
            <img src={RightArrow} alt="Continue" />
          </PageButton>
        )}
      </PageNavigationContainer>
    );
  }
}
