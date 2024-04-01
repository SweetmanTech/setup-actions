import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';

const tryEnsAddressLookup = async (ensName: string) => {
  try {
    const ensAddress = await ethPublicClient.getEnsAddress({
      name: normalize(ensName),
    });
    return { data: ensAddress };
  } catch (error) {
    return { error };
  }
};

export default tryEnsAddressLookup;
