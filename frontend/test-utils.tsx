// test-utils.tsx
import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

interface TestProviderOptions {
    theme?: string;
}

interface CustomOptions extends RenderOptions, TestProviderOptions { }

const createTestProviders = ({
    theme = 'dark',
    // eslint-disable-next-line react/display-name
}: TestProviderOptions): React.FC => ({ children }: { children?: ReactNode | ReactNode[] }) => (
    <ThemeProvider defaultTheme={theme} enableSystem={false} attribute="class">
        {children}
    </ThemeProvider>
);

const customRender = (
    ui: ReactElement,
    { theme, ...options }: CustomOptions = {},
): RenderResult =>
    render(ui, { wrapper: createTestProviders({ theme }), ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };