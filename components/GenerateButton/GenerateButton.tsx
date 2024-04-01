import { encodeFunctionData, maxUint256 } from 'viem';
import Button from '../Button';
import { zoraCreator1155ImplABI, contracts1155 } from '@zoralabs/protocol-deployments';

const GenerateButton = ({
  tokenId = 1n,
  minter,
  uri = '',
  maxSupply = maxUint256,
}: {
  tokenId?: bigint;
  minter: `0x${string}`;
  uri?: string;
  maxSupply?: bigint;
}) => {
  const handleClick = () => {
    console.log('SWEETS CLICKED', contracts1155);
    const permissionBits = 4n;
    const minterPermissionCall = encodeFunctionData({
      abi: zoraCreator1155ImplABI,
      functionName: 'addPermission',
      args: [tokenId, minter, permissionBits],
    });
    const setupNewTokenCall = encodeFunctionData({
      abi: zoraCreator1155ImplABI,
      functionName: 'setupNewToken',
      args: [uri, maxSupply],
    });

    const setupActions = [setupNewTokenCall, minterPermissionCall];
    console.log('SWEETS setupActions', setupActions);
  };

  return <Button onClick={handleClick}>Generate</Button>;
};

export default GenerateButton;
