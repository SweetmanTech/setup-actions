const getSortedLeaderboard = (leaderboard: any[]) =>
  leaderboard.sort((a: any, b: any) => {
    const rewardA = BigInt(a.totalCreatorReward);
    const rewardB = BigInt(b.totalCreatorReward);
    if (rewardA > rewardB) return -1;
    if (rewardA < rewardB) return 1;
    if (a.editions > b.editions) return -1;
    if (a.editions < b.editions) return 1;
    return a.buyer.localeCompare(b.buyer);
  });

export default getSortedLeaderboard;
