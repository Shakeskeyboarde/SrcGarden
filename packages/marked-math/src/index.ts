import { type MarkedExtension } from 'marked';

const encodeHtmlSpecials = (text: string): string => {
  return text
    .replace(/&/gu, '&amp;')
    .replace(/>/gu, '&gt;')
    .replace(/</gu, '&lt;')
    .replace(/"/gu, '&quot;')
    .replace(/'/gu, '&#039;');
};

export const markedMath = (): MarkedExtension => {
  return {
    extensions: [
      {
        name: 'mathspan',
        level: 'inline',
        start: (src) => src.match(/\$(?!\$)/u)?.index,
        tokenizer: (src) => {
          const rule = /^\$(?!\$)(?:(`)(.*?)\1|(\S*))\$/u;
          const match = src.match(rule);

          if (!match) return undefined;

          const text = match[2]?.trim() || match[3]?.trim() || '';
          const html = `<code class="language-math mathspan">${encodeHtmlSpecials(text)}</code>`;

          return { type: 'mathspan', raw: match[0], html };
        },
        renderer: (token) => {
          return token.html;
        },
      },
      {
        name: 'mathblock',
        level: 'block',
        start: (src) => src.match(/^\${2}(?!\$)/mu)?.index,
        tokenizer: (src) => {
          const rule = /^\${2}(?!\$)(.*?)\${2}\s*(?:\n|$)/su;
          const match = src.match(rule);

          if (!match) return undefined;

          const text = match[1]!.trim();
          const html = `<pre><code class="language-math">${encodeHtmlSpecials(text)}</code></pre>`;

          return { type: 'mathblock', raw: match[0], html };
        },
        renderer: (token) => {
          return token.html;
        },
      },
    ],
  };
};
