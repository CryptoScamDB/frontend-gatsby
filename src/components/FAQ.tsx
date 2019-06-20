import React, { Component } from 'react';
import styled from 'styled-components';

import Arrow from '../images/navigation/top-gold.svg';
import ReactHtmlParser from 'react-html-parser';

const Container = styled.div`
  margin-left: 5%;
  margin-bottom: 0.5em;
  width: 751px;
  padding: 10px 40px;
`;
const Question = styled.div`
  height: 51px;
  border-radius: 2px;
  background: linear-gradient(
    180.01deg,
    rgba(250, 250, 253, 0.1) 0%,
    rgba(247, 248, 252, 0.1) 28.22%,
    rgba(243, 244, 250, 0.05) 100%
  );
  line-height: 3;

  > span {
    opacity: 1;
    color: #ebc561;
    padding-left: 0.5em;
  }

  > img {
    float: right;
    margin-right: 2em;
    margin-top: 1.3em;
  }
`;
const Answer = styled.div`
  margin-bottom: 1em;
  display: inline;

  > ul {
    padding: 0.5em 0;
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
          <span>{question}</span>
          <img alt="Expand" src={Arrow} />
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
