import getFormattedData from './getFormattedData';

const getLeaderboard = (results: any, ethPrice?: any) => {
  const summary = {} as any;

  results.forEach((result: any) => {
    const buyerAddress = result.buyer;
    const reward = BigInt(result.creatorReward);
    const editions = 1;

    if (summary[buyerAddress]) {
      summary[buyerAddress].totalCreatorReward += reward;
      summary[buyerAddress].editions += 1;
    } else {
      summary[buyerAddress] = {
        buyer: buyerAddress,
        totalCreatorReward: reward,
        editions,
      };
    }
  });

  return getFormattedData(summary, ethPrice);
};

export default getLeaderboard;
