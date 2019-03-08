import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Arrow from "../images/navigation/top-gold.svg"

class Faq extends Component {

    constructor(props)
    {
        super(props);

        this.toggleFaq = this.toggleFaq.bind(this);

        this.state = {
            expanded: false
        }
    }

    toggleFaq()
    {
        const blExpanded = this.state.expanded;
        this.setState({ expanded: !blExpanded });
    }

    render()
    {
        return(
            <div className="faq">
                <div className="head" onClick={this.toggleFaq}>
                    <span>{this.props.question}</span>
                    <img src={Arrow} />
                </div>
                <div className={this.state.expanded ? "body" : "body hidden"}>
                    <ul>
                        {this.props.answer.map(e => <li>{e}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

Faq.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.array
}

Faq.defaultProps = {
    question: "",
    answer: []
}

export default Faq