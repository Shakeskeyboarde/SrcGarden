import styled from '@emotion/styled';
import { type ComponentPropsWithoutRef, type FC, useEffect } from 'react';

import { type Render, useHtml } from '../hooks/use-html.js';
import { useMarkdown } from '../hooks/use-markdown.js';
import { AlertImportant, AlertNote, AlertWarning } from './alert.js';
import { FormattedCode } from './formatted-code.js';
import { TaskItem } from './task-item.js';

interface Props {
  readonly render?: Render;
  readonly children?: string | null;
}

const renderDefault: Render = (node, next) => {
  if (node.tagName === 'code') {
    return <FormattedCode {...node.props}>{node.children}</FormattedCode>;
  }

  if (node.tagName === 'li' && typeof node.props?.className === 'string' && /\btask\b/u.test(node.props.className)) {
    return <MarkdownTaskItem {...node.props}>{node.children}</MarkdownTaskItem>;
  }

  if (node.tagName === 'div' && typeof node.props?.className === 'string' && /\balert\b/u.test(node.props.className)) {
    if (/\balert-warning\b/u.test(node.props.className)) {
      return <AlertWarning {...node.props}>{node.children}</AlertWarning>;
    } else if (/\balert-important\b/u.test(node.props.className)) {
      return <AlertImportant {...node.props}>{node.children}</AlertImportant>;
    } else {
      return <AlertNote {...node.props}>{node.children}</AlertNote>;
    }
  }

  return next(node);
};

const MarkdownContainer = styled.div`
  & > br {
    display: none;
  }

  img {
    max-width: 100%;
  }

  p > img:first-child:last-child {
    display: block;
  }

  li {
    position: relative;
    margin-block: 0.5em;
  }

  li > ul,
  li > ol,
  li > dl {
    margin-block: 0;
  }

  blockquote {
    color: ${({ theme }) => theme.palette.textDim};
    padding-inline-start: 0.5625rem;
    border-inline-start: 0.1875rem solid ${({ theme }) => theme.palette.border};
    margin-inline: 0;
  }

  blockquote > :first-child {
    margin-block-start: 0;
  }

  blockquote > :last-child {
    margin-block-end: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme.palette.border};
    padding-inline: calc(0.75em - 1px);
    padding-block: 0.125em;
  }

  th {
    font-weight: 500;
  }

  tbody > tr:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.backgroundAlt};
  }
`;

const MarkdownTaskItem: FC<ComponentPropsWithoutRef<typeof TaskItem>> = ({ className = '', children, ...props }) => {
  const checked = /\btask-complete\b/u.test(className);

  return (
    <TaskItem {...props} className={className} checked={checked}>
      {children}
    </TaskItem>
  );
};

export const Markdown: FC<Props> = ({ render, children: markdown }) => {
  const html = useMarkdown(markdown);
  const children = useHtml(html, { render: [render, renderDefault] });
  const isRendered = Boolean(children);

  useEffect(() => {
    if (!isRendered || !window.location.hash) return;
    window.document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'instant' });
  }, [isRendered]);

  return <MarkdownContainer>{children}</MarkdownContainer>;
};
