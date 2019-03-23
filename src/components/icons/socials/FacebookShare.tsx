import React from 'react';
import Icon from '../Icon';
import LogoFacebook from '../../../images/social/facebook.svg';

interface Props {
    text: string;
    url: string;
}

export default ({ text, url }: Props) => (
    <a href={"https://www.facebook.com/sharer.php?u=" + encodeURIComponent(url) + "&quote=" + encodeURIComponent(text)} target="_blank" rel="noopener noreferrer">
        <Icon 
            src={LogoFacebook}
            title="Share on Facebook"
            alt="Facebook Logo" 
        />
    </a>
) as React.StatelessComponent<Props>;