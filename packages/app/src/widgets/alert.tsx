import styled from '@emotion/styled';
import { Icon } from 'app-icons';
import { type FC, type HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly type?: 'note' | 'important' | 'warning';
}

const AlertContainer = styled('div')<{
  type: 'note' | 'important' | 'warning';
}>`
  background-color: ${({ theme, type }) => theme.palette[`${type}Background`]};
  padding-inline-start: 0.5625rem;
  border-inline-start: 0.1875rem solid ${({ theme, type }) => theme.palette[type]};
  margin-block: 1rem;
  padding-block: 0.25rem;

  & > :last-child {
    margin-block-end: 0;
  }
`;

const AlertHeading = styled('div', { shouldForwardProp: (prop) => prop !== 'type' })<{
  type: 'note' | 'important' | 'warning';
}>`
  color: ${({ theme, type }) => theme.palette[type]};
  font-weight: 500;
  text-transform: capitalize;
  margin-block-end: 0.125rem;

  & + * {
    margin-block-start: 0;
  }

  & > svg {
    margin-inline-end: 0.25em;
  }
`;

export const Alert: FC<Props> = ({ type = 'note', children, ...props }) => {
  const iconName: string =
    type === 'warning' ? 'alert-triangle' : type === 'important' ? 'message-report' : 'info-circle';

  return (
    <AlertContainer type={type} {...props}>
      <AlertHeading type={type}>
        <Icon name={iconName} strokeWidth={2.5} />
        {type}
      </AlertHeading>
      {children}
    </AlertContainer>
  );
};

export const AlertNote: FC<Omit<Props, 'type'>> = ({ children, ...props }) => {
  return (
    <Alert type="note" {...props}>
      {children}
    </Alert>
  );
};

export const AlertImportant: FC<Omit<Props, 'type'>> = ({ children, ...props }) => {
  return (
    <Alert type="important" {...props}>
      {children}
    </Alert>
  );
};

export const AlertWarning: FC<Omit<Props, 'type'>> = ({ children, ...props }) => {
  return (
    <Alert type="warning" {...props}>
      {children}
    </Alert>
  );
};
