const formatErc721Events = (filteredLogs: any) => {
  const result = filteredLogs.reduce((acc: any, log: any) => {
    const existing = acc.find((item: any) => item.address === log.address) as any;
    if (existing) {
      existing.numberOfEditions += 1;
    } else {
      acc.push({ address: log.address, numberOfEditions: 1 });
    }
    return acc;
  }, []);
  return result;
};

export default formatErc721Events;
