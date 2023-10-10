import styled from '@emotion/styled';
import IconAlertTriangle from 'app-icons/icon/alert-triangle.js';
import IconInfoCircle from 'app-icons/icon/info-circle.js';
import IconMessageReport from 'app-icons/icon/message-report.js';
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
        <IconInfoCircle strokeWidth={2.5} />
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
        <IconMessageReport strokeWidth={2.5} />
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
        <IconAlertTriangle strokeWidth={2.5} />
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
