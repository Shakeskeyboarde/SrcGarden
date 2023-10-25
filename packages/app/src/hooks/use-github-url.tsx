import { join } from '../utils/join.js';

export const useGithubUrl = (user: string, repo: string, branch: string, repoPath = ''): URL => {
  const url = new URL(join('/', user, repo, branch || 'main', repoPath), window.location.origin);

  if (/(?:^|\/)[^/.]+$/u.test(url.pathname)) {
    url.pathname += '/';
  }

  return url;
};
