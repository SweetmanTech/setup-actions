import { erc721Abi } from 'viem';
import { optimismPublicClient } from '../publicClient';

const getSoundBatchCollectionMetadata = async (formattedSoundCollections: any) => {
  const soundContract = {
    abi: erc721Abi,
    functionName: 'tokenURI',
    args: [1n],
  } as const;

  const contracts = formattedSoundCollections.map((collection: any) => ({
    address: collection.address,
    ...soundContract,
  }));

  const results = await optimismPublicClient.multicall({ contracts });
  const filteredResults = results.filter((result: any) => result.result.startsWith('ar://'));

  const fetchPromises = filteredResults.map((result: any) => {
    const txId = result.result.replace('ar://', '');
    return fetch(`https://arweave.net/${txId}`);
  });

  const responses = await Promise.all(fetchPromises);
  const metadata = await Promise.all(responses.map((response) => response.json()));

  const mergedData = formattedSoundCollections.map((collection: any, index: number) => ({
    ...collection,
    metadata: metadata[index],
  }));

  const onlySound = mergedData.filter((item: any) => item.metadata);

  return onlySound;
};

export default getSoundBatchCollectionMetadata;
