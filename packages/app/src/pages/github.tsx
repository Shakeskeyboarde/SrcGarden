import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { FetchError, useGithubRawContent } from '../hooks/use-github-raw-content.js';
import { useGithubUrl } from '../hooks/use-github-url.js';
import { dirname } from '../utils/dirname.js';
import { join } from '../utils/join.js';
import { Container } from '../widgets/container.js';
import { Markdown } from '../widgets/markdown.js';
import { Redirect } from '../widgets/redirect.js';

const GithubMarkdown: FC<{ path: string }> = ({ path }) => {
  const [data, error] = useGithubRawContent(path);

  if (error) {
    if (!(error instanceof FetchError)) {
      throw error;
    }

    return (
      <Markdown>{`
        # ${error.status}: ${error.statusText}
        
        Failed to load content from: ${error.url}
      `}</Markdown>
    );
  }

  if (!data) return null;

  return (
    <Markdown
      render={(node, next) => {
        if (node.tagName === 'img' && typeof node.props?.src === 'string' && !/^\w+:\/{2}/u.test(node.props.src)) {
          const dir = dirname(path);
          const src = `https://raw.githubusercontent.com${join('/', dir, node.props.src)}`;

          return next({ ...node, props: { ...node.props, src } });
        }

        if (
          node.tagName === 'a' &&
          typeof node.props?.href === 'string' &&
          node.props.href.startsWith('https://github.com/')
        ) {
          const url = new URL(node.props.href);

          // Leave github links alone if they have query parameters.
          if (url.search) return next(node);

          const match = url.pathname.match(/^(\/[^/]+\/[^/]*)(?:\/blob(\/[^/]+)(\/.*)?)?$/u);

          // Leave github links alone if they don't match the expected format.
          if (!match) return next(node);

          const [, repo = '', branch = '', repoPath = ''] = match;
          const href = `${repo}${branch}${repoPath}`;

          return next({ ...node, props: { ...node.props, href } });
        }

        return next(node);
      }}
    >
      {data}
    </Markdown>
  );
};

const Github: FC = () => {
  const { user = '', repo = '', branch = '', '*': repoPath } = useParams();

  const url = useGithubUrl(user, repo, branch, repoPath);

  // Redirect to Github for non-markdown files.
  if (!url.pathname.endsWith('/') && !url.pathname.endsWith('.md')) {
    const to = `https://github.com/${user}/${repo}/blob/${branch || 'main'}/${repoPath}`;
    return (
      <Container border fillHeight>
        <Redirect to={to} />
      </Container>
    );
  }

  // Redirect to normalized path if necessary.
  if (url.pathname !== window.location.pathname) {
    const to = `${url.pathname}${window.location.search}${window.location.hash}`;
    return (
      <Container border fillHeight>
        <Redirect to={to} />
      </Container>
    );
  }

  if (url.pathname.endsWith('/')) {
    url.pathname += 'README.md';
  }

  return (
    <Container border fillHeight>
      <GithubMarkdown path={url.pathname} />
    </Container>
  );
};

export default Github;
