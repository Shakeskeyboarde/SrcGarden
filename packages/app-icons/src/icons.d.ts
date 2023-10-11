import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { type IconType } from './create-icon.js';
import { type IconName } from './names.ts';

export const icons: Record<IconName, IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>>;
