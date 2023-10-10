/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconBooksOff', () => import('@tabler/icons-react/dist/esm/icons/IconBooksOff.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
