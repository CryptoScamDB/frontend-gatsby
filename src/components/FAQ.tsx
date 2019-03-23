import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Arrow from '../images/navigation/top-gold.svg';

interface Props {
    question: string;
    answer: any[];
}

export default class Faq extends Component {
    constructor(props) {
        super(props);

        this.toggleFaq = this.toggleFaq.bind(this);

        this.state = {
            expanded: false
        }
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
                <div className={expanded ? "body" : "body hidden"}>
                    <ul>
                        {answer.map(e => <li>{e}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    static defaultProps = {
        question: "",
        answer: []
    }
}