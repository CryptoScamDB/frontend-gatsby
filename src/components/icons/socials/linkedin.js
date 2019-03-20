import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from "../icon"
import LogoLinkedin from "../../../images/social/linkedin.svg";

class SocialLinkedin extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <a>
                <Icon 
                    src={LogoLinkedin}
                    title="Share on Linkedin"
                    alt="Linkedin Logo"
                />
            </a>
        )
    }
}

SocialLinkedin.propTypes = {
    tweet: PropTypes.string,
    url: PropTypes.string
}

SocialLinkedin.defaultProps = {
    tweet: "",
    url: "https://cryptoscamdb.org"
}

export default SocialLinkedin