import { type ComponentPropsWithoutRef, type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useMarkdown } from '../hooks/use-markdown.js';
import { AlertImportant, AlertNote, AlertWarning } from './alert.js';
import { DescriptionList } from './description-list.js';
import { FormattedCode } from './formatted-code.js';
import { ListItem } from './list-item.js';
import { OrderedList } from './ordered-list.js';
import { Table } from './table.js';
import { TaskItem } from './task-item.js';
import { UnorderedList } from './unordered-list.js';

interface Props {
  readonly children?: string | null;
}

const MarkdownTaskItem: FC<ComponentPropsWithoutRef<typeof TaskItem>> = ({ className = '', children, ...props }) => {
  const checked = /\btask-complete\b/u.test(className);

  return (
    <TaskItem {...props} className={className} checked={checked}>
      {children}
    </TaskItem>
  );
};

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
        return node.attribs.class && /\btask\b/u.test(node.attribs.class) ? MarkdownTaskItem : ListItem;
      } else if (node.tagName === 'table') {
        return Table;
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
