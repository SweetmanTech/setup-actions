import { formatEther } from 'viem';

const getFormattedData = (items: any[], ethPrice: any) => {
  return Object.values(items).map((item: any) => {
    const ethValue = formatEther(item.totalCreatorReward.toString());
    const usdValue = (ethPrice * parseFloat(ethValue)).toFixed(2);
    return {
      buyer: item.buyer,
      totalCreatorReward: item.totalCreatorReward.toString(),
      totalCreatorRewardUsd: usdValue,
      editions: item.editions,
    };
  });
};

export default getFormattedData;
