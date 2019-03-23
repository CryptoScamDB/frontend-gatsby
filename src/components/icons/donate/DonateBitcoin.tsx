import React from 'react';
import Icon from '../Icon';
import LogoBitcoin from '../../../images/coins/bitcoin.png';

const DONATION_ADDR = {
    "ADDR": "32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3",
    "HUMAN": "32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3",
    "EXPLORER": "https://blockchain.info/address/32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3"
}

const DonateBitcoin: React.StatelessComponent = () => (
    <a href={DONATION_ADDR.EXPLORER} target="_blank" rel="noopener noreferrer">
        <Icon 
            title={DONATION_ADDR.HUMAN} 
            src={LogoBitcoin} 
            alt="Donate Bitcoin"
        />
    </a>
);

export default DonateBitcoin;