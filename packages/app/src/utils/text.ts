export const text = (strings: TemplateStringsArray, ...values: any[]): string => {
  const value = String.raw(strings, ...values)
    .trim()
    .replace(/\t/gu, '  ');

  const indent =
    Array.from(value.matchAll(/(?<=\n) */gu)).reduce(
      (count, match) => (count < match.length ? count : match.length),
      Number.NaN,
    ) || 0;

  return value.replace(new RegExp(`(?<=\\n) {${indent}}`, 'gu'), '') + '\n';
};
