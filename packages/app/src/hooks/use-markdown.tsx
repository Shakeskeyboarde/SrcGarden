import { useQuery } from '@tanstack/react-query';

export const useMarkdown = (source: string | undefined | null): string | undefined => {
  const { data: html } = useQuery(['markdown', source], async () => {
    if (!source) return null;

    const { Markdown } = await import('app-markdown');
    const markdown = new Markdown();

    return await markdown.parse(source);
  });

  return html ?? undefined;
};
