import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { forwardRef, type HTMLAttributes } from 'react';

export const ContainerBase = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function ContainerBase(
  { children, ...props },
  ref,
) {
  return (
    <div {...props} ref={ref}>
      <div>{children}</div>
    </div>
  );
});

export const Container = styled(ContainerBase, { shouldForwardProp: isPropValid })<{
  border?: boolean;
  fillHeight?: boolean;
}>`
  box-sizing: border-box;
  max-width: 898px;
  min-width: 402px;
  width: 100%;
  min-height: ${({ fillHeight }) => (fillHeight ? '100vh' : undefined)};
  margin: 0 auto;
  border-color: ${({ theme }) => theme.palette.border};
  border-style: solid;
  border-width: ${({ border }) => (border ? '0 1px' : '0')};
  overflow: hidden;

  & > div {
    margin: 2rem;
    margin-block-end: 50%;
  }
`;
