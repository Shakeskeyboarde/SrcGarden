/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconShareOff', () => import('@tabler/icons-react/dist/esm/icons/IconShareOff.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
