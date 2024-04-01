const getCleanedEthereumAddress = (address: string | number | bigint) => {
  const cleaned = BigInt(address).toString(16);
  return `0x${cleaned.padStart(40, '0')}`;
};

export default getCleanedEthereumAddress;
