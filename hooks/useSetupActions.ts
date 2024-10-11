import getAdminMintCall from '@/lib/zora/getAdminMintCall';
import getCallSaleCall from '@/lib/zora/getCallSaleCall';
import getMinterPermissionCall from '@/lib/zora/getMinterPermissionCall';
import getSetSaleCall from '@/lib/zora/getSetSaleCall';
import getSetupNewTokenCall from '@/lib/zora/getSetupNewTokenCall';
import getUpdateRoyaltiesForTokenCall from '@/lib/zora/getUpdateRoyaltiesForTokenCall';
import getUpdateTokenURICall from '@/lib/zora/getUpdateTokenURICall';
import { useEffect, useState } from 'react';
import { maxUint256, zeroAddress } from 'viem';

const useSetupActions = () => {
  const [tokenId, setTokenId] = useState<bigint>(1n);
  const [selectedSetupLabels, setSelectedSetupLabels] = useState<string[]>([
    'updateTokenURICall',
    'setupNewTokenCall',
    'updateRoyaltiesForTokenCall',
    'minterPermissionCall',
    'callSaleCall',
    'adminMintCall',
  ]);
  const [setupActions, setSetupActions] = useState<string[]>([]);
  const [fundsRecipient, setFundsRecipient] = useState<`0x${string}`>(zeroAddress);
  const [saleStrategy, setSaleStrategy] = useState<`0x${string}`>(zeroAddress);

  const callLabels = [
    'updateTokenURICall',
    'setupNewTokenCall',
    'updateRoyaltiesForTokenCall',
    'minterPermissionCall',
    'callSaleCall',
    'adminMintCall',
  ];

  const updateSetupActions = () => {
    const maxSupply = maxUint256;

    const setSaleCall = getSetSaleCall(tokenId);

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
  }, [tokenId, fundsRecipient, saleStrategy, selectedSetupLabels]);

  return {
    tokenId,
    setTokenId,
    selectedSetupLabels,
    setSelectedSetupLabels,
    setupActions,
    updateSetupActions,
    setFundsRecipient,
    setSaleStrategy,
  };
};

export default useSetupActions;
