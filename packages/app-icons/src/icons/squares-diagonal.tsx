/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconSquaresDiagonal', () => import('@tabler/icons-react/dist/esm/icons/IconSquaresDiagonal.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
