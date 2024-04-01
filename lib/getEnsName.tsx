import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';

const getEnsName = async (address: string) => {
  const ensName = await ethPublicClient.getEnsName({
    address: normalize(address as string) as any,
  });
  return ensName;
};

export default getEnsName;
