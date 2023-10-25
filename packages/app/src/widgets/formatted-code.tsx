import 'highlight.js/styles/github.css';

import { type FC, type HTMLAttributes, useMemo } from 'react';

import { Highlight } from './highlight.js';
import { Katex } from './katex.js';

interface Props extends HTMLAttributes<HTMLElement> {}

const useLanguage = (className: string): string | undefined => {
  return useMemo(
    () =>
      className
        .split(/\s+/u)
        .filter(Boolean)
        .find((value) => value.startsWith('language-'))
        ?.replace(/^language-/u, '')
        .replace(/_/gu, '.'),
    [className],
  );
};

export const FormattedCode: FC<Props> = ({ children, ...props }) => {
  const { className = '' } = props;
  const language = useLanguage(className);

  switch (language) {
    case 'math':
      return (
        <Katex {...props} inline={/\bmathspan\b/u.test(className)}>
          {children}
        </Katex>
      );
    default:
      return (
        <Highlight {...props} language={language}>
          {children}
        </Highlight>
      );
  }
};
