import React from 'react';
import Icon from '../Icon';
import LogoBitcoin from '../../../images/coins/bitcoin.png';

const DONATION_ADDR = {
    "ADDR": "3KLmPYTmiU3HJriRdEBGKCXEPAhagkqbAK",
    "HUMAN": "3KLmPYTmiU3HJriRdEBGKCXEPAhagkqbAK",
    "EXPLORER": "https://blockchain.info/address/3KLmPYTmiU3HJriRdEBGKCXEPAhagkqbAK"
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
