import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from "../icon"
import LogoFacebook from "../../../images/social/facebook.svg";

class SocialFacebook extends Component
{
    render()
    {
        return(
            <a href={"http://www.facebook.com/sharer.php?u=" + encodeURIComponent(this.props.url) + "&quote=" + encodeURIComponent(this.props.text)} target="_blank" rel="noopener noreferrer">
                <Icon 
                    src={LogoFacebook}
                    title="Share on Facebook"
                    alt="Facebook Logo" 
                />
            </a>
        )
    }
}

SocialFacebook.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
}

SocialFacebook.defaultProps = {
    text: "",
    url: "https://cryptoscamdb.org"
}

export default SocialFacebook