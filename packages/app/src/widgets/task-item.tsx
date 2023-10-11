import styled from '@emotion/styled';
import { Icon } from 'app-icons';
import { type ComponentPropsWithoutRef, type FC } from 'react';

import { ListItem } from './list-item.js';

const TaskListItem = styled(ListItem)`
  list-style-type: none;
`;

const TaskIcon = styled(Icon)`
  position: absolute;
  right: 100%;
  margin-block-start: 0.1875em;
  margin-inline-end: 0.25em;
`;

export const TaskItem: FC<ComponentPropsWithoutRef<typeof TaskListItem> & { checked?: boolean }> = ({
  className = '',
  checked,
  children,
  ...props
}) => {
  return (
    <TaskListItem className={className} {...props}>
      <TaskIcon name={checked ? 'SquareCheck' : 'Square'} />
      {children}
    </TaskListItem>
  );
};
