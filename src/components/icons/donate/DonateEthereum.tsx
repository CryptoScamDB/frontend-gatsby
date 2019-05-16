import React from 'react';
import Icon from '../Icon';
import LogoEthereum from '../../../images/coins/ethereum.png';

const DONATION_ADDR = {
    "ADDR": 0x7030B43E821BA34124915bA65B90Dbda7a9E7d09,
    "HUMAN": "cryptoscamdb.eth",
    "EXPLORER": "https://etherscan.io/address/0x7030B43E821BA34124915bA65B90Dbda7a9E7d09"
}

const DonateEthereum: React.StatelessComponent = () => (
    <a href={DONATION_ADDR.EXPLORER} target="_blank" rel="noopener noreferrer">
        <Icon 
            title={DONATION_ADDR.HUMAN} 
            src={LogoEthereum} 
            alt="Donate Ethereum"
        />
    </a>
);

export default DonateEthereum;
