import { type MarkedExtension } from 'marked';

export const markedAlert = (): MarkedExtension => {
  return {
    renderer: {
      blockquote: (quote: string) => {
        const match = quote.match(
          /^\s*<p>\s*(?:\[!(NOTE|IMPORTANT|WARNING)\]|<strong>(Note|Important|Warning):<\/strong>)(.*?)<\/p>(.*)/isu,
        );

        if (match) {
          const type = match[1]?.toLowerCase() || match[2]?.toLowerCase() || 'note';
          const message = match[3]?.trim() ? `<p>${match[3].trim()}</p>${match[4]}` : match[4];

          return `<div class="alert alert-${type.toLowerCase()}">${message}</div>`;
        }

        return `<blockquote>${quote}</blockquote>`;
      },
    },
  };
};
