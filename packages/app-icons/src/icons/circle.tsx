/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconCircle', () => import('@tabler/icons-react/dist/esm/icons/IconCircle.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
