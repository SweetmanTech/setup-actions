import { erc721Abi } from 'viem';
import { ethPublicClient } from './publicClient';

const getSnapshot = async () => {
  const cre8orsPassportAddress = '0xd9635b70724b9f618a7bb37c7be182117b1f0dc1';
  const wagmiContract = {
    address: cre8orsPassportAddress,
    abi: erc721Abi,
  } as const;
  const contracts = Array.from({ length: 88 }, (_, index) => ({
    ...wagmiContract,
    functionName: 'ownerOf',
    args: [BigInt(index + 1)],
    blockNumber: 19441207,
  }));

  const results = await ethPublicClient.multicall({
    contracts,
  });
  return results;
};

export default getSnapshot;
