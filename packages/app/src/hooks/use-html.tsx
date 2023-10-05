import { attributesToProps, Comment, Element, htmlToDOM, Text } from 'html-react-parser';
import { type ComponentType, createElement, Fragment, useMemo } from 'react';

interface Options {
  readonly overrides?: Readonly<Record<string, ComponentType | true>>;
  readonly allowUnsafe?: boolean;
}

const UNSAFE_TAG_NAMES = new Set([
  'iframe',
  'noembed',
  'noframes',
  'plaintext',
  'script',
  'style',
  'title',
  'textarea',
  'xmp',
  'link',
]) satisfies ReadonlySet<string>;

const getJsx = (nodes: (Comment | Text | Element | {})[], options: Options): (JSX.Element | string | null)[] => {
  const { overrides = {}, allowUnsafe = false } = options;

  return [...nodes].flatMap((node) => {
    if (node instanceof Comment) {
      // TODO: Handle configuration comments.
      return [];
    }

    if (node instanceof Text) {
      return node.data;
    }

    if (!(node instanceof Element)) return [];
    if (!allowUnsafe && !(node.tagName in overrides) && UNSAFE_TAG_NAMES.has(node.tagName)) return [];

    const override = node.tagName in overrides ? overrides[node.tagName] : undefined;
    const attributes = Object.fromEntries([...node.attributes].map((attr) => [attr.name, attr.value]));
    const props: Record<string, any> = attributesToProps(attributes);
    const children = getJsx(node.children, options);

    return createElement(override && override !== true ? override : node.tagName, props, ...children);
  });
};

const parseHtml = (html: string, options: Options = {}): JSX.Element => {
  return createElement(Fragment, null, ...getJsx(htmlToDOM(html), options));
};

export const useHtml = (html: string | undefined | null, options?: Options): JSX.Element | null => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => (html ? parseHtml(html, options) : null), [html]);
};
