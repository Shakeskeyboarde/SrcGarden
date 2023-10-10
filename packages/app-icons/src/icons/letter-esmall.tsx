/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconLetterESmall', () => import('@tabler/icons-react/dist/esm/icons/IconLetterESmall.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
