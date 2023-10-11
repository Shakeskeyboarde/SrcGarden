declare module '@tabler/icons-react/dist/esm/icons/*.js' {
  import type { ForwardRefExoticComponent, RefAttributes } from 'react';

  const ReactComponent: ForwardRefExoticComponent<RefAttributes<any>>;

  export default ReactComponent;
}

declare module '@tabler/icons-react/dist/esm/createReactComponent.js' {
  import { type TablerIconsProps } from '@tabler/icons-react';

  const createReactComponent: (
    iconName: string,
    iconNamePascal: string,
    iconNode: any[],
  ) => (props: TablerIconsProps) => JSX.Element;

  export default createReactComponent;
}
