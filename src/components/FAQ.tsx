import React, { Component } from 'react';
import styled from 'styled-components';

import Arrow from '../images/navigation/top-gold.svg';
import ReactHtmlParser from 'react-html-parser';

const Container = styled.div`
  margin-left: 5%;
  width: 751px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px;
    height: auto;
  }
`;
const Question = styled.div`
  min-height: 51px;
  height: auto;
  border-radius: 2px;
  overflow: auto;
  background: linear-gradient(
    180.01deg,
    rgba(250, 250, 253, 0.1) 0%,
    rgba(247, 248, 252, 0.1) 28.22%,
    rgba(243, 244, 250, 0.05) 100%
  );
  padding: 5px;

  > div {
    width: 80%;
    opacity: 1;
    color: #ebc561;
    padding-left: 0.5em;
    display: inline-block;
    vertical-align: middle;
  }

  > img {
    position: relative;
    z-index: 2;
    right: 0;
    float: right;
    margin-right: 2em;
    margin-top: 1.3em;
  }
`;
const Answer = styled.div`
  margin-bottom: 1em;
  display: inline;

  > ul {
    padding: 0.5em 1em;
  }
`;

interface Props {
  question: string;
  answer: any[];
}

interface State {
  expanded: boolean;
}

export default class Faq extends Component<Props, State> {
  static defaultProps = {
    question: '',
    answer: []
  };

  constructor(props: Props) {
    super(props);

    this.toggleFaq = this.toggleFaq.bind(this);

    this.state = {
      expanded: false
    };
  }

  toggleFaq() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { expanded } = this.state;
    const { question, answer } = this.props;
    return (
      <Container>
        <Question onClick={this.toggleFaq}>
          <img alt="Expand" src={Arrow} />
          <div>{question}</div>
        </Question>
        <Answer style={{ display: expanded ? 'inline' : 'none' }}>
          <ul>
            {answer.map((e, i) => (
              <li key={i}>{ReactHtmlParser(e)}</li>
            ))}
          </ul>
        </Answer>
      </Container>
    );
  }
}
