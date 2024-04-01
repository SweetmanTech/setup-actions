const parseLogEntries = (logEntries: any) => {
  const response = {} as any;

  logEntries.forEach((log: any) => {
    const buyerAddress = '0x' + log.topics[2].substring(26);
    if (response[buyerAddress]) {
      response[buyerAddress].editions += 1;
    } else {
      response[buyerAddress] = {
        buyer: buyerAddress,
        editions: 1,
      };
    }
  });

  const hardCodedSoundPrice = 333000000000000n;
  Object.keys(response).forEach((buyerAddress) => {
    const count = response[buyerAddress].editions;
    response[buyerAddress].totalCreatorReward = (BigInt(count) * hardCodedSoundPrice).toString();
  });

  return response;
};

export default parseLogEntries;
