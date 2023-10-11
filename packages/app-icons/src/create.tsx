import { type Theme } from '@emotion/react';
import styled, { type StyledComponent } from '@emotion/styled';
import { type Icon as TablerIcon, type TablerIconsProps } from '@tabler/icons-react';
import createReactComponent from '@tabler/icons-react/dist/esm/createReactComponent.js';
import { type FC, forwardRef, lazy, type PropsWithoutRef, type RefAttributes, Suspense } from 'react';

export type IconProps = PropsWithoutRef<TablerIconsProps> & RefAttributes<SVGSVGElement> & { theme?: Theme };
export type IconType = FC<IconProps>;

const createIcon = (name: string, IconBase: TablerIcon): StyledComponent<IconProps, {}, {}> => {
  const IconDefaults = forwardRef<SVGSVGElement, TablerIconsProps>(function Foo(
    { size, height, width, ...props },
    ref,
  ) {
    return (
      <IconBase
        {...{
          height: height ?? width ?? size ?? '1.5em',
          width: width ?? height ?? size ?? '1.5em',
          stroke: 2,
          ...props,
        }}
        ref={ref}
      />
    );
  });
  const Icon = styled(IconDefaults)`
    vertical-align: -0.375em;
  `;
  Icon.displayName = name;

  return Icon;
};

const IconBlank = createIcon('IconBlank', createReactComponent('Blank', 'IconBlank', []));

export const createLazyIcon = (name: string, provider: () => Promise<{ default: TablerIcon }>): IconType => {
  const IconLazy = lazy(async () => {
    const { default: Component } = await provider();
    return { default: createIcon(name, Component) };
  });

  const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
    return (
      <Suspense fallback={<IconBlank {...props} ref={ref} />}>
        <IconLazy {...props} ref={ref} />
      </Suspense>
    );
  });

  return Icon;
};
