import styled from '@emotion/styled';
import IconSquare from 'app-icons/icon/square.js';
import IconSquareCheck from 'app-icons/icon/square-check.js';
import { type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useMarkdown } from '../hooks/use-markdown.js';
import { AlertImportant, AlertNote, AlertWarning } from './alert.js';
import { FormattedCode } from './formatted-code.js';

interface Props {
  readonly children?: string | null;
}

const UnorderedList = styled.ul`
  li > & {
    padding-block-start: 0.25em;
  }
`;

const OrderedList = styled.ol`
  li > & {
    padding-block-start: 0.25em;
  }
`;

const DescriptionList = styled.dl`
  li > & {
    padding-block-start: 0.25em;
  }
`;

const ListItem = styled.li`
  position: relative;
  list-style-type: ${({ className = '' }) => (/\btask\b/u.test(className) ? 'none' : undefined)};
  padding-block: 0.25em;
`;

const TaskCheckboxBase: FC<{ className?: string; checked?: boolean }> = ({ className, checked }) => {
  return checked ? <IconSquareCheck className={className} /> : <IconSquare className={className} />;
};

const TaskCheckbox = styled(TaskCheckboxBase)`
  position: absolute;
  right: 100%;
  margin-block-start: 0.1875em;
  margin-inline-end: 0.25em;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    border: 1px solid ${({ theme }) => theme.palette.border};
    padding-inline: 0.5em;
  }

  th {
    font-weight: 500;
  }

  tbody > tr:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.backgroundAlt};
  }
`;

export const Markdown: FC<Props> = ({ children }) => {
  const html = useMarkdown(children);
  const formatted = useHtml(html, {
    replace: (node) => {
      if (node.tagName === 'code') {
        return FormattedCode;
      } else if (node.tagName === 'ul') {
        return UnorderedList;
      } else if (node.tagName === 'ol') {
        return OrderedList;
      } else if (node.tagName === 'dl') {
        return DescriptionList;
      } else if (node.tagName === 'li') {
        return ListItem;
      } else if (node.tagName === 'table') {
        return Table;
      } else if (
        node.tagName === 'input' &&
        node.attribs.type === 'checkbox' &&
        node.attribs.class &&
        /\btask-checkbox\b/u.test(node.attribs.class)
      ) {
        return TaskCheckbox;
      } else if (node.tagName === 'div' && node.attribs.class && /\balert\b/u.test(node.attribs.class)) {
        if (/\balert-warning\b/u.test(node.attribs.class)) {
          return AlertWarning;
        } else if (/\balert-important\b/u.test(node.attribs.class)) {
          return AlertImportant;
        } else {
          return AlertNote;
        }
      }
    },
  });

  return <>{formatted}</>;
};
