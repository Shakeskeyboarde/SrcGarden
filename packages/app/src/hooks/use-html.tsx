import { attributesToProps, Comment, Element, htmlToDOM, Text } from 'html-react-parser';
import { createElement, Fragment, type ReactNode, useMemo } from 'react';

interface Node {
  readonly tagName?: string;
  readonly props?: Readonly<Record<string, unknown>>;
  readonly children?: ReactNode;
}

type RenderNext = (node: Node) => JSX.Element | string | null | undefined;

export type Render = (node: Node, next: RenderNext) => JSX.Element | string | null | undefined;

interface Options {
  readonly render?: Render | (Render | undefined)[];
}

const renderDefault: RenderNext = ({ tagName, props, children }) => {
  switch (tagName) {
    // These tags are not allowed by default in SrcGarden markdown.
    case 'title':
    case 'script':
    case 'style':
    case 'link':
      return;
    // The `nobr` tag is deprecated and breaks rendering.
    case 'nobr':
    case undefined:
      return createElement(Fragment, undefined, children);
    default:
      break;
  }

  return createElement(tagName, props, children);
};

const renderRecursive = (
  nodes: (Comment | Text | Node | {})[],
  render: RenderNext,
): JSX.Element | string | undefined => {
  const childElements = [...nodes].flatMap((node) => {
    if (node instanceof Comment) {
      // TODO: Handle configuration comments.
      return [];
    }

    if (node instanceof Text) return node.data || [];
    if (!(node instanceof Element)) return [];

    const { tagName, attribs, childNodes } = node;
    const props = attributesToProps(attribs);
    const children = renderRecursive(childNodes, render);

    return render({ tagName, props, children }) || [];
  });

  if (childElements.length <= 1) return childElements[0];

  return createElement(Fragment, undefined, ...childElements);
};

const renderHtml = (html: string, renderers: Render | (Render | undefined)[] | undefined): JSX.Element => {
  const roots = htmlToDOM(html);
  const stack = (Array.isArray(renderers) ? renderers : [renderers]).filter((it): it is Render => Boolean(it));
  const render = stack.reduce<RenderNext>((next, current) => (node) => current(node, next), renderDefault);
  const children = renderRecursive(roots, render);

  return createElement(Fragment, null, children);
};

export const useHtml = (html: string | undefined | null, { render }: Options = {}): JSX.Element | null => {
  return useMemo(
    () => (html ? renderHtml(html, render) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [html],
  );
};
