import { FARCASTER_ID_REGISTRY } from './consts';
import { optimismPublicClient } from './publicClient';
import abi from '@/lib/abi/farcaster-id-registry.json';

const getFarcasterNames = async (rawData: any[]) => {
  const itemsToProcessFurther = [] as any[];
  const rawDataWithPfp = await Promise.all(
    rawData.map(async (data: any) => {
      try {
        const owner = data.buyer;
        const farcasterId = await optimismPublicClient.readContract({
          address: FARCASTER_ID_REGISTRY,
          abi,
          functionName: 'idOf',
          args: [owner],
        });
        if (farcasterId) {
          const response = await fetch(
            `https://nemes.farcaster.xyz:2281/v1/userDataByFid?fid=${farcasterId}&user_data_type=USER_DATA_TYPE_PFP`,
          );
          const json = await response.json();
          const pfp = json.data.userDataBody.value;
          return { ...data, pfp };
        } else {
          itemsToProcessFurther.push(data);
          return null;
        }
      } catch (err) {
        console.error(err);
        itemsToProcessFurther.push(data);
        return null;
      }
    }),
  ).then((results) => results.filter((item) => item !== null));
  return { match: rawDataWithPfp, noMatch: itemsToProcessFurther };
};

export default getFarcasterNames;
