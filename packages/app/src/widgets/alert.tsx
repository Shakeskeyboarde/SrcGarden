import styled from '@emotion/styled';
import { Icon } from 'app-icons';
import { type FC, type HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly type?: 'note' | 'important' | 'warning';
}

const AlertContainer = styled.div<{ type: 'note' | 'important' | 'warning' }>`
  background-color: ${({ theme, type }) => theme.palette[`${type}Background`]};
  padding-inline-start: 0.5625rem;
  border-inline-start: 0.1875rem solid ${({ theme, type }) => theme.palette[type]};
  margin-block: 1rem;
  padding-block: 0.25rem;

  & > :last-child {
    margin-block-end: 0;
  }
`;

const AlertHeading = styled.div<{ type: 'note' | 'important' | 'warning' }>`
  color: ${({ theme, type }) => theme.palette[type]};
  font-weight: 500;
  margin-block-end: 0.125rem;

  & + * {
    margin-block-start: 0;
  }

  & > svg {
    margin-inline-end: 0.25em;
  }
`;

export const AlertNote: FC<Omit<Props, 'type'>> = ({ children, ...props }) => {
  return (
    <AlertContainer type={'note'} {...props}>
      <AlertHeading type={'note'}>
        <Icon name={'InfoCircle'} strokeWidth={2.5} />
        Note
      </AlertHeading>
      {children}
    </AlertContainer>
  );
};

export const AlertImportant: FC<Omit<Props, 'type'>> = ({ children, ...props }) => {
  return (
    <AlertContainer type={'important'} {...props}>
      <AlertHeading type={'important'}>
        <Icon name={'MessageReport'} strokeWidth={2.5} />
        Important
      </AlertHeading>
      {children}
    </AlertContainer>
  );
};

export const AlertWarning: FC<Omit<Props, 'type'>> = ({ children, ...props }) => {
  return (
    <AlertContainer type={'warning'} {...props}>
      <AlertHeading type={'warning'}>
        <Icon name={'AlertTriangle'} strokeWidth={2.5} />
        Warning
      </AlertHeading>
      {children}
    </AlertContainer>
  );
};

export const Alert: FC<Props> = ({ type = 'note', children, ...props }) => {
  switch (type) {
    case 'warning':
      return <AlertImportant {...props}>{children}</AlertImportant>;
    case 'important':
      return <AlertImportant {...props}>{children}</AlertImportant>;
    default:
      return <AlertNote {...props}>{children}</AlertNote>;
  }
};
