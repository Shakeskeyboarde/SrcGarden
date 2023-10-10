import { type Theme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  type ComponentProps,
  type ComponentType,
  forwardRef,
  lazy,
  type PropsWithoutRef,
  type RefAttributes,
  Suspense,
  type SVGProps,
} from 'react';

export type IconProps<C extends ComponentType<any>> = PropsWithoutRef<ComponentProps<C>> &
  RefAttributes<C> & {
    theme?: Theme | undefined;
  };

export type IconType<C extends ComponentType<any>> = ComponentType<IconProps<C>>;

const BlankSvg = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(function BlankSvg(props, ref) {
  return <svg xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} />;
});

export const createIcon = <C extends ComponentType<any>>(name: string, Component: C): IconType<C> => {
  const IconBase = forwardRef<C, ComponentProps<C>>(function IconBase(props, ref) {
    props = { height: '1.125em', width: 'auto', strokeWidth: 2, ...props, ref };
    return <Component {...props} />;
  });

  const Icon = styled(IconBase)`
    vertical-align: -0.1875em;
  `;
  Icon.displayName = name;

  return Icon;
};

const IconBlank = createIcon('Blank', BlankSvg);

export const createLazyIcon = <C extends ComponentType<any>>(
  name: string,
  provider: () => Promise<{ default: C }>,
): IconType<C> => {
  const IconLazy = lazy(async () => {
    const { default: Component } = await provider();
    return { default: createIcon(name, Component) };
  });

  const Icon = forwardRef<C, ComponentProps<C>>(function Icon(props, ref) {
    return (
      <Suspense fallback={<IconBlank {...props} ref={ref} />}>
        <IconLazy {...props} ref={ref} />
      </Suspense>
    );
  });

  return Icon;
};
