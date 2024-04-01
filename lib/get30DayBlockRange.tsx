import { optimismPublicClient } from './publicClient';

const get30DayBlockRange = async () => {
  const block = await optimismPublicClient.getBlock({
    blockTag: 'latest',
  });
  const toBlock = block.number;
  const blocksPerMonth = 1296000n;
  const fromBlock = toBlock - blocksPerMonth;
  return { fromBlock, toBlock };
};

export default get30DayBlockRange;
