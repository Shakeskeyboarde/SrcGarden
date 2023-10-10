/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconProgressX', () => import('@tabler/icons-react/dist/esm/icons/IconProgressX.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
