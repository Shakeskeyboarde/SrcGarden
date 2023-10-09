import { type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useMarkdown } from '../hooks/use-markdown.js';
import { AlertImportant, AlertNote, AlertWarning } from './alert.js';
import { FormattedCode } from './formatted-code.js';

interface Props {
  readonly children?: string | null;
}

export const Markdown: FC<Props> = ({ children }) => {
  const html = useMarkdown(children);
  const formatted = useHtml(html, {
    replace: (node) => {
      if (node.tagName === 'code') {
        return FormattedCode;
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
