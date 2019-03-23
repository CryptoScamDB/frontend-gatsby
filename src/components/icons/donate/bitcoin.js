import React, { Component } from 'react'

import Icon from "../icon"
import LogoBitcoin from "../../../images/coins/bitcoin.png";

const DONATION_ADDR = {
    "ADDR": "32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3",
    "HUMAN": "32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3",
    "EXPLORER": "https://blockchain.info/address/32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3"
}

class DonateBitcoin extends Component
{
    render()
    {
        return(
            <a href={DONATION_ADDR.EXPLORER} target="_blank">
                <Icon 
                    title={DONATION_ADDR.HUMAN} 
                    src={LogoBitcoin} 
                />
            </a>
        )
    }
}

export default DonateBitcoin