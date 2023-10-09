import styled from '@emotion/styled';
import { type FC, forwardRef, type PropsWithoutRef, Suspense, type SVGProps } from 'react';

import { icons } from './icons.js';

interface Props extends PropsWithoutRef<SVGProps<SVGSVGElement>> {
  name: keyof typeof icons;
}

const Blank = forwardRef<SVGSVGElement, PropsWithoutRef<SVGProps<SVGSVGElement>>>((props, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}></svg>;
});
Blank.displayName = 'Blank';

const IconBase: FC<Props> = forwardRef<SVGSVGElement, Props>(
  ({ name, height = '1.125em', width = 'auto', strokeWidth = 2, ...rest }, ref) => {
    const Lazy = icons[name];
    const props = { height, width, strokeWidth, ...rest };

    return Lazy ? (
      <Suspense fallback={<Blank ref={ref} {...props} />}>
        <Lazy ref={ref} {...props} />
      </Suspense>
    ) : (
      <Blank ref={ref} {...props} />
    );
  },
);
IconBase.displayName = 'IconBase';

export const Icon = styled(IconBase)`
  vertical-align: -0.1875em;
`;
