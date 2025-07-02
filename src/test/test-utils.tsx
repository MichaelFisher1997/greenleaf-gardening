import type { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';

/**
 * Custom render function that wraps components with necessary providers
 * @param ui - The React component to render
 * @param options - Additional options for rendering
 * @returns The rendered component and testing utilities
 */
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => {
  // Return the rendered component with all providers
  return render(ui, {
    ...options,
  });
};

// Re-export everything from testing-library/react
export * from '@testing-library/react';

// Export the custom renderer
export { customRender as render };

// Helper function to simulate a delay
// Useful for testing async operations
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to mock the current date
// Useful for testing date-related functionality
export const mockDate = (dateString: string) => {
  const mockDate = new Date(dateString);
  const _Date = Date;
  // @ts-ignore
  global.Date = class extends _Date {
    constructor() {
      super();
      return mockDate;
    }
  };
  // @ts-ignore
  global.Date.now = () => mockDate.getTime();
};

// Helper function to reset date mocks
export const resetDateMocks = () => {
  global.Date = Date;
};
