import type { ResolvedPathname } from '$app/types';

export interface Challenge {
  index: number;
  route: ResolvedPathname;
  title: string;
  description: string;
}
