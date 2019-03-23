import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from "../icon"
import LogoLinkedin from "../../../images/social/linkedin.svg";

class SocialLinkedin extends Component
{
    render()
    {
        return(
            <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(this.props.url)} target="_blank" rel="noopener noreferrer">
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
    url: PropTypes.string
}

SocialLinkedin.defaultProps = {
    url: "https://cryptoscamdb.org"
}

export default SocialLinkedin