/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconCertificate2Off', () => import('@tabler/icons-react/dist/esm/icons/IconCertificate2Off.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
