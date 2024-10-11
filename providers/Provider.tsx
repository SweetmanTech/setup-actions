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

  const updateSetupActions = () => {
    const tokenId = 1n;
    const maxSupply = maxUint256;

    const setSaleCall = getSetSaleCall(tokenId, fundsRecipient);

    const actionMap: { [key: string]: string } = {
      updateTokenURICall: getUpdateTokenURICall(tokenId, ''),
      setupNewTokenCall: getSetupNewTokenCall('', maxSupply),
      updateRoyaltiesForTokenCall: getUpdateRoyaltiesForTokenCall(tokenId, fundsRecipient),
      minterPermissionCall: getMinterPermissionCall(tokenId, saleStrategy),
      callSaleCall: getCallSaleCall(tokenId, saleStrategy, setSaleCall),
      adminMintCall: getAdminMintCall(tokenId, fundsRecipient),
    };

    const selectedCalls = selectedSetupLabels.map((label) => actionMap[label]).filter(Boolean);

    setSetupActions(selectedCalls);
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
