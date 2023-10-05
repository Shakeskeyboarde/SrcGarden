import styled from '@emotion/styled';
import { type FC } from 'react';

import { useHtml } from '../hooks/use-html.js';
import { useKatex } from '../hooks/use-katex.js';
import { Code, type CodeProps } from './code.js';

interface Props extends CodeProps {
  readonly inline?: boolean;
}

const KatexCode = styled(Code, {
  shouldForwardProp: (prop) => prop !== 'inline',
})<{ inline?: boolean }>`
  // Reset the font size if not inline so that the larger Katex font size
  // is based on the body font size.
  font-size: ${({ inline }) => (inline ? undefined : '1rem')};
`;

export const Katex: FC<Props> = ({ inline, children, ...props }) => {
  const source = typeof children === 'string' ? children : undefined;
  const html = useKatex(source, { inline });
  const formatted = useHtml(html);

  return (
    <KatexCode inline={inline} {...props}>
      {formatted ?? children}
    </KatexCode>
  );
};
