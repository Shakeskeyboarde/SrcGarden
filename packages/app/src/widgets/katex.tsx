import { type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useKatex } from '../hooks/use-katex.js';
import { type CodeProps } from './code.js';

interface Props extends CodeProps {
  readonly inline?: boolean;
}

export const Katex: FC<Props> = ({ inline, children, ...props }) => {
  const source = typeof children === 'string' ? children : undefined;
  const html = useKatex(source, { inline });
  const formatted = useHtml(html);
  const Component = inline ? 'span' : 'div';

  return <Component {...props}>{formatted ?? children}</Component>;
};
