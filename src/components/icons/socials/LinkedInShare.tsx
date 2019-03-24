import React from 'react';
import Icon from '../Icon';
import LogoLinkedin from '../../../images/social/linkedin.svg';

interface Props {
    url: string;
}

const LinkedInShare: React.StatelessComponent<Props> = ({ url }: Props) => (
    <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url)} target="_blank" rel="noopener noreferrer">
        <Icon 
            src={LogoLinkedin}
            title="Share on Linkedin"
            alt="Linkedin Logo"
        />
    </a>
);

export default LinkedInShare;