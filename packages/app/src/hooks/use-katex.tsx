import { useQuery } from '@tanstack/react-query';

interface Options {
  inline?: boolean;
}

export const useKatex = (source: string | undefined, { inline = false }: Options = {}): string | undefined => {
  const result = useQuery(['katex', source, inline], async () => {
    if (!source) return null;

    const [{ default: katex }] = await Promise.all([import('katex'), import('katex/dist/katex.min.css')]);
    const html = katex.renderToString(source, { displayMode: !inline, output: 'html' });

    return html;
  });

  return result.data ?? undefined;
};
