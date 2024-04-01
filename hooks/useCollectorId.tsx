import tryEnsAddressLookup from '@/lib/tryEnsAddressLookup';
import { useEffect, useState } from 'react';
import { isAddress } from 'viem';

const useCollectorId = (collectorId: string) => {
  const [collectorAddress, setCollectorAddress] = useState('' as any);

  useEffect(() => {
    const fetchENSAddress = async () => {
      const response = await tryEnsAddressLookup(collectorId);
      if (response.error) return;
      setCollectorAddress(response.data);
    };

    if (isAddress(collectorId)) {
      setCollectorAddress(collectorId);
      return;
    }

    if (collectorId.includes('.eth')) {
      fetchENSAddress();
    }
  }, [collectorId]);

  return { collectorAddress };
};

export default useCollectorId;
