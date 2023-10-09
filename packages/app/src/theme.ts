import { type Theme } from '@emotion/react';

export const theme: Theme = {
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    fontSize: '16px',
    lineHeight: 1.5,
  },
  palette: {
    background: '#fff',
    backgroundAlt: '#f2f2f2',
    text: '#111',
    paper: '#eee',
    border: '#ccc',
    note: '#48f',
    noteBackground: '#f0f5ff',
    important: '#a6f',
    importantBackground: '#f7f0ff',
    warning: '#e80',
    warningBackground: '#fff6eb',
  },
  shape: {
    borderRadius: `4px`,
  },
};
