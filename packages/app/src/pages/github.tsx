import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { Markdown } from '../widgets/markdown.js';
import { Redirect } from '../widgets/redirect.js';

const fetchFromGithub = async (user: string, repo: string, dir: string, file: string): Promise<string | null> => {
  const path = [user, repo, 'HEAD', dir, file, file.includes('.') ? '' : 'README.md'].filter(Boolean).join('/');
  const url = `https://raw.githubusercontent.com/${path}`;
  const res = await fetch(url, {
    headers: {
      accept: 'text/plain',
    },
  });

  // TODO: Handle errors.

  if (!res.ok) {
    return `
# ${res.status}: ${res.statusText || 'Error'}

The [file](${url}) you requested could not be fetched. Refresh the page to try again, or return to the repository [home page](/${user}/${repo}/).
    `.trim();
  }

  return res.ok ? await res.text() : null;
};

const GithubMarkdown: FC<{ user: string; repo: string; dir: string; file: string }> = ({ user, repo, dir, file }) => {
  const { data } = useQuery([user, repo, dir, file] as const, ({ queryKey }) => fetchFromGithub(...queryKey));

  return <Markdown>{data}</Markdown>;
};

const GithubRoute: FC = () => {
  const { user = '', repo = '', '*': path } = useParams();

  return <Github user={user} repo={repo} path={path} />;
};

export const Github: FC<{ user: string; repo: string; path?: string }> = ({ user, repo, path = '' }) => {
  const [, dir = '', file = ''] = path.match(/^(.*?)(?:\/([^/]*))?$/u)!;

  // Redirect to Github for non-markdown files.
  if (file.includes('.') && !file.endsWith('.md')) {
    const to = `https://github.com/${user}/${repo}/blob/HEAD/${path}`;
    return <Redirect to={to} />;
  }

  // Add trailing slash to directories.
  if (/\/[^./]+$/u.test(window.location.pathname)) {
    const to = new URL(window.location.href);
    to.pathname += '/';
    return <Redirect to={to} />;
  }

  return <GithubMarkdown user={user} repo={repo} dir={dir} file={file} />;
};

export default GithubRoute;
