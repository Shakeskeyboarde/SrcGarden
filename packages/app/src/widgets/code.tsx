import styled from '@emotion/styled';
import { type HTMLAttributes } from 'react';

export interface CodeProps extends HTMLAttributes<HTMLElement> {}

export const Code = styled.code<CodeProps>`
  background-color: ${({ theme }) => theme.palette.paper};
  padding: 0.125em 0.3125em;
  font-size: 0.875em;
  border-radius: ${({ theme }) => theme.shape.borderRadius};

  pre > & {
    display: block;
    padding: 1rem;
    border-radius: unset;
  }
`;
