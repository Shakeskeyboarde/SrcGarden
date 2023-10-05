import { type FC } from 'react';

import { useHighlight } from '../hooks/use-highlight.js';
import { useHtml } from '../hooks/use-html.js';
import { Code, type CodeProps } from './code.js';

interface Props extends CodeProps {
  readonly language: string | undefined;
}

export const Highlight: FC<Props> = ({ language, children, ...props }) => {
  const source = typeof children === 'string' ? children : undefined;
  const html = useHighlight(source, language);
  const formatted = useHtml(html);

  return <Code {...props}>{formatted ?? children}</Code>;
};
