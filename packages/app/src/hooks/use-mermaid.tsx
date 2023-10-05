import { useQuery } from '@tanstack/react-query';
import { type RenderResult } from 'mermaid';

let isMermaidUsed = false;
let index = 0;

export const useMermaid = (source: string | undefined): RenderResult | undefined => {
  const { data: result } = useQuery(['mermaid', source], async () => {
    if (!source) return null;

    const { default: mermaid } = await import('mermaid');

    if (!isMermaidUsed) {
      isMermaidUsed = true;
      mermaid.initialize({ startOnLoad: false, securityLevel: 'loose', theme: 'neutral' });
    }

    /*
     * XXX: Hack because mermaid has hidden/global stateful-ness that
     * expects to only process elements (by ID) once. When called a
     * second time with the same ID, it will return an empty result.
     */
    const id = `mermaid-${++index}`;

    try {
      document.getElementById(id)?.remove();
      return await mermaid.render(id, source);
    } catch (error) {
      console.error(error);

      // XXX: Hack because mermaid appends the error in the wrong place.
      const errorDiv = document.querySelector(`#d${id}`);
      const svg = errorDiv?.innerHTML ?? '';
      errorDiv?.remove();

      return { svg };
    }
  });

  return result ?? undefined;
};
