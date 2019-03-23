import React, { Component } from 'react'

import Icon from "../icon"
import LogoEthereum from "../../../images/coins/ethereum.png";

const DONATION_ADDR = {
    "ADDR": 0x25a51b3A7163352D4f32D0ED4a012b73fc32C08a,
    "HUMAN": "cryptoscamdb.eth",
    "EXPLORER": "https://etherscan.io/address/0x25a51b3A7163352D4f32D0ED4a012b73fc32C08a"
}

class DonateEthereum extends Component
{
    render()
    {
        return(
            <a href={DONATION_ADDR.EXPLORER} target="_blank" rel="noopener noreferrer">
                <Icon 
                    title={DONATION_ADDR.HUMAN} 
                    src={LogoEthereum} 
                />
            </a>
        )
    }
}

export default DonateEthereum