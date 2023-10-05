import { type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useMermaid } from '../hooks/use-mermaid.js';
import { Code, type CodeProps } from './code.js';

interface Props extends CodeProps {}

export const Mermaid: FC<Props> = ({ children, ...props }) => {
  const source = typeof children === 'string' ? children : undefined;
  const result = useMermaid(source);
  const formatted = useHtml(result?.svg, { allowUnsafe: true });

  return (
    <Code {...props} ref={(element) => void (element && result?.bindFunctions?.(element))}>
      {formatted ?? children}
    </Code>
  );
};
