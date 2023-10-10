/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from '../icon.js';

export default createLazyIcon('IconSettingsExclamation', () => import('@tabler/icons-react/dist/esm/icons/IconSettingsExclamation.js')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;
