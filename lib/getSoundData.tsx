import { getEditionsByCreator } from './getSoundContractsByCreator';
import getTransferEvents from './getTransferEvents';
import parseLogEntries from './parseLogEntries';
import getFormattedData from './getFormattedData';

const getSoundData = async (creator: string, ethPrice: any) => {
  const creatorEditions = await getEditionsByCreator(creator);
  const [mainnetEditions, baseEditions, optimismEditions] = [
    creatorEditions[1],
    creatorEditions[8453],
    creatorEditions[10],
  ];
  const [mainnetRawTransactions, optimismRawTransactions, baseRawTransactions] = await Promise.all([
    getTransferEvents(mainnetEditions, 1),
    getTransferEvents(optimismEditions, 10),
    getTransferEvents(baseEditions, 8453),
  ]);
  const editions = [...mainnetRawTransactions, ...optimismRawTransactions, ...baseRawTransactions];
  const parsed = parseLogEntries(editions);
  const arrayData = getFormattedData(parsed, ethPrice);
  return arrayData;
};

export default getSoundData;
