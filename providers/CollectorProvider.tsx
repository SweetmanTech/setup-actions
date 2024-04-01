import { createContext, useContext, useMemo } from 'react';
import useSnapshot from '@/hooks/useSnapshot';

const CollectorContext = createContext(null);

const CollectorProvider = ({ children, collectorId }: any) => {
  const snapshot = useSnapshot(collectorId);

  const value = useMemo(() => ({ ...snapshot, collectorId }), [snapshot, collectorId]);

  return <CollectorContext.Provider value={value as any}>{children}</CollectorContext.Provider>;
};

export const useCollectorProvider = () => {
  const context = useContext(CollectorContext);
  if (!context) {
    throw new Error('useCollectorProvider must be used within a CollectorProvider');
  }
  return context;
};

export default CollectorProvider;
