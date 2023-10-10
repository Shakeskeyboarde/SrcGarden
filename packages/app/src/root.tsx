import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GithubRoute from './pages/github.js';
import NotFound from './pages/not-found.js';
import { theme } from './theme.js';
import { Redirect } from './widgets/redirect.js';

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
          })}
        />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={null}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Redirect to={'/Shakeskeyboarde/SrcGarden'} />} />
                <Route path="/:user/:repo/*" element={<GithubRoute />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
};
