/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconBaselineDensitySmall', () => import('@tabler/icons-react/dist/esm/icons/IconBaselineDensitySmall.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
