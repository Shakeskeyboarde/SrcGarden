/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconGauge', () => import('@tabler/icons-react/dist/esm/icons/IconGauge.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
