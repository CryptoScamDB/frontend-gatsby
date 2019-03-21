import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from "../icon"
import LogoFacebook from "../../../images/social/facebook.svg";

class SocialFacebook extends Component
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
                    src={LogoFacebook}
                    title="Share on Facebook"
                    alt="Facebook Logo" 
                />
            </a>
        )
    }
}

SocialFacebook.propTypes = {
    tweet: PropTypes.string,
    url: PropTypes.string
}

SocialFacebook.defaultProps = {
    tweet: "",
    url: "https://cryptoscamdb.org"
}

export default SocialFacebook