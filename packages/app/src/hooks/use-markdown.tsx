import { useQuery } from '@tanstack/react-query';

export const useMarkdown = (source: string | undefined | null): string | undefined => {
  const { data } = useQuery(['markdown', source], async () => {
    if (!source) return null;

    const [{ Marked }, { markedMath }, { gfmHeadingId }] = await Promise.all([
      import('marked'),
      import('marked-math'),
      import('marked-gfm-heading-id'),
    ]);

    const marked = new Marked({ gfm: true }, markedMath(), gfmHeadingId());

    return await marked.parse(source);
  });

  return data ?? undefined;
};
