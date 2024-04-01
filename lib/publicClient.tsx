import { createPublicClient, http } from 'viem';
import { base, mainnet, optimism } from 'viem/chains';

export const ethPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const optimismPublicClient = createPublicClient({
  chain: optimism,
  transport: http(),
});

export const basePublicClient = createPublicClient({
  chain: base,
  transport: http(),
});
