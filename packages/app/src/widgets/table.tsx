import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    border: 1px solid ${({ theme }) => theme.palette.border};
    padding-inline: 0.5em;
  }

  th {
    font-weight: 500;
  }

  tbody > tr:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.backgroundAlt};
  }
`;
