/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconFreezeRow', () => import('@tabler/icons-react/dist/esm/icons/IconFreezeRow.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
