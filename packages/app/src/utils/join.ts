export const join = (...parts: (string | number | null | undefined | false)[]): string => {
  const normalized = parts
    .filter((part): part is string | number => Boolean(part))
    .join('/')
    .split(/\/+/u);

  const result: string[] = [];

  for (const part of normalized) {
    if (part === '..') {
      if (result.length > 0 || result[0] !== '') {
        result.pop();
      }
    } else if (part !== '.') {
      result.push(part);
    }
  }

  return result.join('/') || '.';
};
