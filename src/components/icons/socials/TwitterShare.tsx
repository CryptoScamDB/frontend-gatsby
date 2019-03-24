import React from 'react';
import Icon from '../Icon';
import LogoTwitter from '../../../images/social/twitter.svg';

interface Props {
    text: string;
    url: string;
}

const TwitterShare: React.StatelessComponent<Props> = ({ text, url }: Props) => (
    <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(text + "\r\n\r\n") + "&url=" + encodeURIComponent(url)} target="_blank" rel="noopener noreferrer">
        <Icon 
            src={LogoTwitter}
            title="Share on Twitter"
            alt="Twitter Logo"
        />
    </a>
);

export default TwitterShare;