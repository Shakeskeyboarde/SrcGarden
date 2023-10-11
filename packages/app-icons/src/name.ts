import { type ICON_NAMES } from './names.js';

type PascalToKebab<T extends string, A extends string = ''> = T extends `${infer F}${infer R}`
  ? PascalToKebab<
      R,
      `${A}${A extends ''
        ? ''
        : F extends `${number}`
        ? A extends `${number}`
          ? ''
          : '-'
        : F extends Lowercase<F>
        ? ''
        : '-'}${Lowercase<F>}`
    >
  : A;

type KebabToPacal<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${Capitalize<First>}${KebabToPacal<Rest>}`
  : Capitalize<T>;

export type IconName = (typeof ICON_NAMES)[number];
export type IconNameKebab = PascalToKebab<IconName>;

export const getIconName = <T extends IconName | IconNameKebab>(name: T): KebabToPacal<T> => {
  return name.replace(/(?:^|-)([a-zA-Z\d])/gu, (_, letter) => letter.toUpperCase()) as KebabToPacal<T>;
};
