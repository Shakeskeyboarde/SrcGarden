/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconArrowDownLeftCircle', () => import('@tabler/icons-react/dist/esm/icons/IconArrowDownLeftCircle.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
