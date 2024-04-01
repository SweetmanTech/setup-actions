import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';

const getCreatorId = async (inputText: string, url: string) => {
  if (inputText) {
    if (inputText.includes('.eth')) {
      const creatorId = (await ethPublicClient.getEnsAddress({
        name: normalize(inputText),
      })) as any;
      return creatorId;
    } else if (inputText.includes('0x')) {
      const creatorId = inputText;
      return creatorId;
    }
  }
  const parts = url.split('creator/');
  const creatorId = parts[1];
  return creatorId;
};

export default getCreatorId;
