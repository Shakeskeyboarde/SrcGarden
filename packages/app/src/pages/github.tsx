import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { FetchError, useGithubRawContent } from '../hooks/use-github-raw-content.js';
import { useGithubUrl } from '../hooks/use-github-url.js';
import { dirname } from '../utils/dirname.js';
import { join } from '../utils/join.js';
import { Container } from '../widgets/container.js';
import { Markdown } from '../widgets/markdown.js';
import { Redirect } from '../widgets/redirect.js';

const isFullyQualified = (url: string): boolean => {
  return /^(?:\w+:|\/{2})/u.test(url);
};

const getUrl = (url: string, basePath: string): URL => {
  if (isFullyQualified(url)) return new URL(url, window.location.origin);

  if (url.startsWith('/')) {
    const match = basePath.match(/^(?:\/[^/]+){3}(?=\/)/u);

    if (match) {
      return new URL(join(match[0], url), window.location.origin);
    }
  }

  return new URL(join(dirname(basePath), url), window.location.origin);
};

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
        if (node.tagName === 'img' && typeof node.props?.src === 'string' && !isFullyQualified(node.props.src)) {
          const url = getUrl(node.props.src, path);
          const src =
            url.origin === window.location.origin
              ? `https://raw.githubusercontent.com${url.pathname}${url.search}`
              : url.href;

          return next({ ...node, props: { ...node.props, src } });
        }

        if (node.tagName === 'a' && typeof node.props?.href === 'string') {
          const url = getUrl(node.props.href, path);

          // Leave links alone if they are fully qualified to an origin other than self or GitHub.
          if (url.origin !== window.location.origin && url.origin !== 'https://github.com') return next(node);

          const match = url.pathname.match(
            url.origin === window.location.origin
              ? /^((?:\/[^/]+){2})(?:(\/[^/]+)(\/.*)?)?/u
              : /^((?:\/[^/]+){2})(?:(?:\/blob)?(\/[^/]+)(\/.*)?)?/u,
          );

          // Leave links alone if they don't start with a repo slug.
          if (!match) {
            return next(node);
          }

          const [repo = '', branch = '', repoPath = ''] = match.slice(1);

          // If the filename is not something that Source Garden can/should render, then redirect to github.
          if (repoPath.endsWith('/LICENSE') || !/(?:\.md|(?:^|\/)[^/.]*)$/u.test(repoPath)) {
            return next({
              ...node,
              props: {
                ...node.props,
                href: `https://github.com${join('/', repo, branch && 'blob', branch, repoPath)}${url.search}${
                  url.hash
                }`,
              },
            });
          }

          return next({
            ...node,
            props: {
              ...node.props,
              href: `${window.location.origin}${join(repo, branch || 'HEAD', repoPath || '/')}${url.search}${url.hash}`,
            },
          });
        }

        return next(node);
      }}
    >
      {data}
    </Markdown>
  );
};

const Github: FC = () => {
  const { user = '', repo = '', branch = '', '*': repoPath = '' } = useParams();

  const url = useGithubUrl(user, repo, branch, repoPath);

  // Redirect to Github for non-markdown files.
  if (url.pathname.endsWith('/LICENSE') || (!url.pathname.endsWith('/') && !url.pathname.endsWith('.md'))) {
    const to = `https://github.com${join('/', user, repo, 'blob', branch || 'main', repoPath)}`;

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
