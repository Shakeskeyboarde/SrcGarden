/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconPillOff', () => import('@tabler/icons-react/dist/esm/icons/IconPillOff.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
