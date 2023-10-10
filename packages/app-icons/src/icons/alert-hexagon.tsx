/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconAlertHexagon', () => import('@tabler/icons-react/dist/esm/icons/IconAlertHexagon.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
