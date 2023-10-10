/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconAccessPoint', () => import('@tabler/icons-react/dist/esm/icons/IconAccessPoint.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
