const getArweaveLink = (arweaveString: string) => {
  const url = arweaveString.replace('ar://', 'https://arweave.net/');

  return url;
};

export default getArweaveLink;
