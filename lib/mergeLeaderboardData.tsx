const mergeLeaderboardData = (zoraData: any[], soundData: any[]) => {
  const combinedObj = {} as any;
  const addToCombined = (entry: any) => {
    const { buyer, totalCreatorReward, editions, totalCreatorRewardUsd } = entry;
    if (combinedObj[buyer]) {
      combinedObj[buyer].totalCreatorReward = (
        BigInt(combinedObj[buyer].totalCreatorReward) + BigInt(totalCreatorReward)
      ).toString();
      combinedObj[buyer].editions += editions;
      combinedObj[buyer].totalCreatorRewardUsd += totalCreatorRewardUsd;
    } else {
      combinedObj[buyer] = {
        buyer,
        totalCreatorReward,
        editions,
        totalCreatorRewardUsd,
      };
    }
  };
  zoraData.forEach(addToCombined);
  soundData.forEach(addToCombined);
  const combinedArray = Object.values(combinedObj);
  return combinedArray;
};

export default mergeLeaderboardData;
