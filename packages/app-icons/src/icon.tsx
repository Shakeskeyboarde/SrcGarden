import { type ComponentPropsWithoutRef, type FC } from 'react';

import { icons } from './icons.js';
import { getIconName, type IconName, type IconNameKebab } from './name.js';

interface Props extends ComponentPropsWithoutRef<'svg'> {
  name: IconName | IconNameKebab;
}

export const Icon: FC<Props> = ({ name, ...props }) => {
  name = getIconName(name);
  const IconComponent = icons[name];

  return IconComponent ? <IconComponent {...props} /> : null;
};
