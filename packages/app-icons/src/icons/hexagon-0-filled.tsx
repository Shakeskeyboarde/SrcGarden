/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconHexagon0Filled', () => import('@tabler/icons-react/dist/esm/icons/IconHexagon0Filled.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
