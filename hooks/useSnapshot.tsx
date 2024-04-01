import { useEffect, useState } from 'react';
import useCollectorId from './useCollectorId';
import getErc721TransferEvents from '@/lib/getErc721TransferEvents';
import formatErc721Events from '@/lib/formatErc721Events';
import get30DayBlockRange from '@/lib/get30DayBlockRange';
import getSoundBatchCollectionMetadata from '@/lib/sound/getSoundBatchCollectionMetadata';

const useSnapshot = (collectorId: string) => {
  const [snapshot, setSnapshot] = useState([] as any);
  const { collectorAddress } = useCollectorId(collectorId);

  useEffect(() => {
    const fetchSnapshot = async () => {
      const { fromBlock, toBlock } = await get30DayBlockRange();
      const filteredLogs = await getErc721TransferEvents(
        [null, collectorAddress],
        fromBlock,
        toBlock,
      );
      const eventResponse = formatErc721Events(filteredLogs);

      let soundResponse = await getSoundBatchCollectionMetadata(eventResponse);
      soundResponse = soundResponse.sort(
        (a: any, b: any) => b.numberOfEditions - a.numberOfEditions,
      );

      setSnapshot(soundResponse);
    };

    if (!collectorAddress) return;
    fetchSnapshot();
  }, [collectorAddress]);

  return { snapshot };
};

export default useSnapshot;
