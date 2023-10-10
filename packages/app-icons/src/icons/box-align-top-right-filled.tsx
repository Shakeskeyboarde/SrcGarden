/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconBoxAlignTopRightFilled', () => import('@tabler/icons-react/dist/esm/icons/IconBoxAlignTopRightFilled.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
