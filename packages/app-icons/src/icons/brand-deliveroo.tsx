/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconBrandDeliveroo', () => import('@tabler/icons-react/dist/esm/icons/IconBrandDeliveroo.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
