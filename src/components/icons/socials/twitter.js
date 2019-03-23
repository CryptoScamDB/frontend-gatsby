import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from "../icon"
import LogoTwitter from "../../../images/social/twitter.svg";

class SocialTwitter extends Component
{
    render()
    {
        return(
            <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.props.text + "\r\n\r\n") + "&url=" + encodeURIComponent(this.props.url)} target="_blank" rel="noopener noreferrer">
                <Icon 
                    src={LogoTwitter}
                    title="Share on Twitter"
                    alt="Twitter Logo"
                />
            </a>
        )
    }
}

SocialTwitter.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
}

SocialTwitter.defaultProps = {
    text: "",
    url: "https://cryptoscamdb.org"
}

export default SocialTwitter