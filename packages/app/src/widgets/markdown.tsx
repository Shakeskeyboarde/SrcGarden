import { type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useMarkdown } from '../hooks/use-markdown.js';
import { FormattedCode } from './formatted-code.js';

interface Props {
  readonly children?: string | null;
}

export const Markdown: FC<Props> = ({ children }) => {
  const html = useMarkdown(children);
  const formatted = useHtml(html, { overrides: { code: FormattedCode } });

  return <>{formatted}</>;
};
