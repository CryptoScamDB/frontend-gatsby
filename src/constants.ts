import { IAnalysisToolsEntry } from './types';

export const AnalysisTools: Record<string, IAnalysisToolsEntry[]> = {
  ETH: [
    { title: 'EtherScan', link: 'https://etherscan.io/address/{address}' },
    {
      title: 'Breadcrumbs',
      link:
        'https://www.breadcrumbs.app/report.aspx?address={address}&currency=1&childrenleftmax=10&childrenrightmax=10#'
    }
  ],
  BTC: [{ title: 'Blockchair', link: 'https://blockchair.com/bitcoin/address/{address}' }],
  BCH: [{ title: 'Blockchair', link: 'https://blockchair.com/bitcoin-cash/address/{address}' }],
  BSV: [{ title: 'Blockchair', link: 'https://blockchair.com/bitcoin-sv/address/{address}' }],
  TRX: [{ title: 'Tronscan', link: 'https://tronscan.org/#/address/{address}' }],
  XRP: [{ title: 'XRPScan', link: 'https://xrpscan.com/account/{address}' }]
};
