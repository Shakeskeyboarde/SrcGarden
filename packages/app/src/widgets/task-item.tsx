import styled from '@emotion/styled';
import { Icon } from 'app-icons';
import { type ComponentPropsWithoutRef, type FC } from 'react';

const TaskListItem = styled.li`
  list-style-type: none;
`;

const TaskIcon = styled(Icon)`
  position: absolute;
  right: 100%;
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
      <TaskIcon name={checked ? 'square-check' : 'square'} />
      {children}
    </TaskListItem>
  );
};
