import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, lazy, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { theme } from './theme.js';

const Home = lazy(() => import('./pages/home.js'));
const Github = lazy(() => import('./pages/github.js'));
const NotFound = lazy(() => import('./pages/not-found.js'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const Root: FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Global
          styles={({ typography, palette }) => ({
            body: {
              padding: '1rem',
              fontFamily: typography.fontFamily,
              fontSize: typography.fontSize,
              lineHeight: typography.lineHeight,
              backgroundColor: palette.background,
              color: palette.text,
            },
            table: {
              borderCollapse: 'collapse',
              borderSpacing: 0,
            },
            th: {
              fontWeight: 500,
            },
            'th, td': {
              border: `1px solid ${palette.border}`,
              paddingInline: '0.5em',
            },
            'tbody > tr:nth-child(odd)': {
              backgroundColor: palette.backgroundAlt,
            },
            'code.mathspan .katex': {
              fontSize: '1.1em',
            },
            'pre > code .katex-display': {
              margin: 'unset',
            },
          })}
        />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={null}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:user/:repo/*" element={<Github />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
};
