import { useQuery } from '@tanstack/react-query';

export const useMarkdown = (source: string | undefined | null): string | undefined => {
  const { data: html } = useQuery(['markdown', source], async () => {
    if (!source) return null;

    source = source.trim();

    const { Markdown } = await import('app-markdown');
    const markdown = new Markdown();
    const indent = Array.from(source.matchAll(/(?<=\n) */gu)).reduce(
      (result, [next]) => (result.length >= next.length ? result : next),
      '',
    );

    source = source.replace(new RegExp(`(?<=\n)${indent}`, 'gu'), '') + '\n';

    return await markdown.parse(source);
  });

  return html ?? undefined;
};
