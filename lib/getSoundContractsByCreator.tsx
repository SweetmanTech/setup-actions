import { encodeEventTopics, decodeEventLog } from 'viem';
import soundCreatorsAbi from './abi/soundCreators-abi.json';
import { mapChainIdToEndpoint } from './utils';
import { SOUND_FACTORY } from './consts';
export const getEditionsByCreator = async (creator: string) => {
  const topics: any = encodeEventTopics({
    abi: soundCreatorsAbi,
    eventName: 'Created',
    args: {
      owner: creator,
    },
  });
  const chains = [1, 10, 8453];
  const calls = [];
  for (const chainId of chains) {
    calls.push(
      fetch(mapChainIdToEndpoint(chainId), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 1,
          jsonrpc: '2.0',
          method: 'eth_getLogs',
          params: [
            {
              address: [SOUND_FACTORY],
              fromBlock: '0x0',
              toBlock: 'latest',
              topics,
            },
          ],
        }),
      }),
    );
  }
  const responses = await Promise.all(calls);
  const responseData = await Promise.all(responses.map((response) => response.json()));
  const contracts = responseData.map((response) => getContracts(response.result));
  const chainIdToContracts: any = {};
  chains.forEach((chainId, index) => {
    chainIdToContracts[chainId] = contracts[index];
  });
  return chainIdToContracts;
};
const getContracts = (data: any) => {
  return data.map((log: any) => {
    return getContract(log.data, log.topics);
  });
};
const getContract = (data: any, topics: any) => {
  const decoded: any = decodeEventLog({
    abi: soundCreatorsAbi,
    data: data,
    topics: topics,
  });
  return decoded?.args?.contracts[0];
};
