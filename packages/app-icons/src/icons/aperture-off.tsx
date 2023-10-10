/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconApertureOff', () => import('@tabler/icons-react/dist/esm/icons/IconApertureOff.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
