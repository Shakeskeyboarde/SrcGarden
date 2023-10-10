/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconArrowsDoubleNwSe', () => import('@tabler/icons-react/dist/esm/icons/IconArrowsDoubleNwSe.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
