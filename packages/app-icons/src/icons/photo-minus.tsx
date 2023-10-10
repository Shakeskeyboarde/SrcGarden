/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconPhotoMinus', () => import('@tabler/icons-react/dist/esm/icons/IconPhotoMinus.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
