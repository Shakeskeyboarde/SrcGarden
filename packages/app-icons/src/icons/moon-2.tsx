/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconMoon2', () => import('@tabler/icons-react/dist/esm/icons/IconMoon2.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
