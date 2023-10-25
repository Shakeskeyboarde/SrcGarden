import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Github from './pages/github.js';
import NotFound from './pages/not-found.js';
import { theme } from './theme.js';
import { Container } from './widgets/container.js';
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
              fontFamily: typography.fontFamily,
              fontSize: typography.fontSize,
              lineHeight: typography.lineHeight,
              backgroundColor: palette.background,
              color: palette.text,
            },
            'p, h1, h2, h3, h4, h5, h6, ul, ol, dl, blockquote, pre, hr': {
              marginBlock: '1.375em',
            },
          })}
        />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={null}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Container border fillHeight>
                      <Redirect to={'/Shakeskeyboarde/SrcGarden/main/'} />
                    </Container>
                  }
                />
                <Route path="/:user/:repo/:branch?/*" element={<Github />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
};
