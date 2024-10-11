import getAdminMintCall from '@/lib/zora/getAdminMintCall';
import getCallSaleCall from '@/lib/zora/getCallSaleCall';
import getMinterPermissionCall from '@/lib/zora/getMinterPermissionCall';
import getSetSaleCall from '@/lib/zora/getSetSaleCall';
import getSetupActions from '@/lib/zora/getSetupActions';
import getSetupNewTokenCall from '@/lib/zora/getSetupNewTokenCall';
import getUpdateRoyaltiesForTokenCall from '@/lib/zora/getUpdateRoyaltiesForTokenCall';
import getUpdateTokenURICall from '@/lib/zora/getUpdateTokenURICall';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { maxUint256, zeroAddress } from 'viem';

const Context = createContext<any>(null);

const Provider = ({ children }: any) => {
  const [selectedSetupLabels, setSelectedSetupLabels] = useState<string[]>([
    'updateTokenURICall',
    'setupNewTokenCall',
    'updateRoyaltiesForTokenCall',
    'minterPermissionCall',
    'callSaleCall',
    'adminMintCall',
  ]);
  const [setupActions, setSetupActions] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [fundsRecipient, setFundsRecipient] = useState<`0x${string}`>(zeroAddress);
  const [saleStrategy, setSaleStrategy] = useState<`0x${string}`>(zeroAddress);

  // Define the master list of call labels in the desired order
  const callLabels = [
    'updateTokenURICall',
    'setupNewTokenCall',
    'updateRoyaltiesForTokenCall',
    'minterPermissionCall',
    'callSaleCall',
    'adminMintCall',
  ];

  const updateSetupActions = () => {
    const tokenId = 1n;
    const maxSupply = maxUint256;

    const setSaleCall = getSetSaleCall(tokenId, fundsRecipient);

    const orderedSelectedCalls = callLabels
      .filter((label) => selectedSetupLabels.includes(label))
      .map((label) => {
        switch (label) {
          case 'updateTokenURICall':
            return getUpdateTokenURICall(tokenId, '');
          case 'setupNewTokenCall':
            return getSetupNewTokenCall('', maxSupply);
          case 'updateRoyaltiesForTokenCall':
            return getUpdateRoyaltiesForTokenCall(tokenId, fundsRecipient);
          case 'minterPermissionCall':
            return getMinterPermissionCall(tokenId, saleStrategy);
          case 'callSaleCall':
            return getCallSaleCall(tokenId, saleStrategy, setSaleCall);
          case 'adminMintCall':
            return getAdminMintCall(tokenId, fundsRecipient);
          default:
            return null;
        }
      })
      .filter(Boolean);

    setSetupActions(orderedSelectedCalls as string[]);
  };

  useEffect(() => {
    updateSetupActions();
  }, [fundsRecipient, saleStrategy, selectedSetupLabels]);

  const value = useMemo(
    () => ({
      copied,
      setCopied,
      fundsRecipient,
      setFundsRecipient,
      saleStrategy,
      setSaleStrategy,
      selectedSetupLabels,
      setSelectedSetupLabels,
      setupActions,
      setSetupActions,
    }),
    [
      copied,
      setCopied,
      fundsRecipient,
      setFundsRecipient,
      saleStrategy,
      setSaleStrategy,
      selectedSetupLabels,
      setSelectedSetupLabels,
      setupActions,
      setSetupActions,
    ],
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
