/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconArrowDownSquare', () => import('@tabler/icons-react/dist/esm/icons/IconArrowDownSquare.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
