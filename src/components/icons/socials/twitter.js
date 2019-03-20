import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from "../icon"
import LogoTwitter from "../../../images/social/twitter.svg";

class SocialTwitter extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.props.tweet + "\r\n\r\n") + "&url=" + this.props.url} target="_blank">
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
    tweet: PropTypes.string,
    url: PropTypes.string
}

SocialTwitter.defaultProps = {
    tweet: "",
    url: "https://cryptoscamdb.org"
}

export default SocialTwitter