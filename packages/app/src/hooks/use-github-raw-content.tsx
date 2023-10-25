import { useQuery } from '@tanstack/react-query';

import { join } from '../utils/join.js';

export class FetchError extends Error {
  readonly url: string;
  readonly status: number;
  readonly statusText: string;

  constructor(url: string, status: number, statusText: string) {
    super(`Fetch failed.`);

    this.name = 'FetchError';
    this.url = url;
    this.status = status;
    this.statusText = statusText;
  }
}

export const useGithubRawContent = (path: string): [data: string | undefined, error: unknown] => {
  const url = `https://raw.githubusercontent.com${join('/', path)}`;
  const { data, error } = useQuery([path] as const, async () => {
    const res = await fetch(url, { headers: { accept: 'text/plain' } });

    if (!res.ok) {
      throw new FetchError(url, res.status, res.statusText);
    }

    return await res.text();
  });

  return [data ?? undefined, error];
};
