import { useMemo } from 'react';

import { join } from '../utils/join.js';

export const useGithubUrl = (user: string, repo: string, branch: string, repoPath: string): URL => {
  return useMemo(() => {
    const url = new URL(join('/', user, repo, branch || 'HEAD', repoPath), window.location.origin);

    if (!url.pathname.endsWith('/LICENSE') && /(?:^|\/)[^/.]+$/u.test(url.pathname)) {
      url.pathname += '/';
    }

    return url;
  }, [user, repo, branch, repoPath]);
};
