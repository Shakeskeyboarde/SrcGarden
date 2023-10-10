/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconJson', () => import('@tabler/icons-react/dist/esm/icons/IconJson.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
