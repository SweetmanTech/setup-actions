import useSetupActions from '@/hooks/useSetupActions';
import { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext<any>(null);

const Provider = ({ children }: any) => {
  const setupActions = useSetupActions();
  const [copied, setCopied] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      copied,
      setCopied,
      ...setupActions,
    }),
    [copied, setCopied, setupActions],
  );

  return <Context.Provider value={value as any}>{children}</Context.Provider>;
};

export const useProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useProvider must be used within a Provider');
  }
  return context;
};

export default Provider;
