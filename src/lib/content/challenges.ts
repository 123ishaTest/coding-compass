import type { Challenge } from '$lib/model/Challenge.ts';
import { resolve } from '$app/paths';

export const challenges: Challenge[] = [
  {
    index: 1,
    route: resolve('/challenges/the-wallet'),
    title: 'The Wallet',
    description: 'Handle transactions between various currencies and users',
  },
];
