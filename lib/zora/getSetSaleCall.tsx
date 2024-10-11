import { zoraTimedSaleStrategyABI } from '@zoralabs/protocol-deployments';

import { encodeFunctionData, maxUint64 } from 'viem';

const getSetSaleCall = (tokenId: bigint) =>
  encodeFunctionData({
    abi: zoraTimedSaleStrategyABI,
    functionName: `setSaleV2`,
    args: [
      tokenId,
      {
        saleStart: 0n,
        marketCountdown: 0n,
        minimumMarketEth: 111000000000000n * 1n,
        name: 'COOP',
        symbol: 'COOP',
      },
    ],
  });

export default getSetSaleCall;
