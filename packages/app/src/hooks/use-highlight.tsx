import { useQuery } from '@tanstack/react-query';

export const useHighlight = (source: string | undefined, language: string | undefined): string | undefined => {
  const { data: html } = useQuery(['highlight', language, source], async () => {
    if (!language || !source) return null;

    const { hljs, languages } = await import('app-highlight');

    if (!(language in languages)) return source;

    if (!hljs.getLanguage(language)) {
      const languageFn = (await languages[language]!()).default;
      hljs.registerLanguage(language, languageFn);
    }

    return hljs.highlight(source, { language }).value;
  });

  return html ?? undefined;
};
