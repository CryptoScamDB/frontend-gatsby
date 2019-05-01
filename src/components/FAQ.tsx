import React, { Component } from 'react';
import Arrow from '../images/navigation/top-gold.svg';
import ReactHtmlParser from 'react-html-parser';

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
      <div className="faq">
        <div className="head" onClick={this.toggleFaq}>
          <span>{question}</span>
          <img alt="Expand" src={Arrow} />
        </div>
        <div className={expanded ? 'body' : 'body hidden'}>
          <ul>
            {answer.map((e, i) => (
              <li key={i}>{ReactHtmlParser(e)}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
