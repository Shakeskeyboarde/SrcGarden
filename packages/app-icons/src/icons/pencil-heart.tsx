/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconPencilHeart', () => import('@tabler/icons-react/dist/esm/icons/IconPencilHeart.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
