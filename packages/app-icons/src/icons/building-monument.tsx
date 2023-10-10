/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconBuildingMonument', () => import('@tabler/icons-react/dist/esm/icons/IconBuildingMonument.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
