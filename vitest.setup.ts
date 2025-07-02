// Import testing utilities
import { cleanup } from '@testing-library/react';
import { afterEach, vi, expect } from 'vitest';

// Import the matchers from @testing-library/jest-dom
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
Object.entries(matchers).forEach(([key, value]) => {
  if (key.startsWith('to') && typeof value === 'function') {
    expect.extend({ [key]: value });
  }
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
const mockIntersectionObserverInstance = {
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
};
mockIntersectionObserver.mockImplementation(() => mockIntersectionObserverInstance);
window.IntersectionObserver = mockIntersectionObserver;

// Mock ResizeObserver
const mockResizeObserver = vi.fn();
const mockResizeObserverInstance = {
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
};
mockResizeObserver.mockImplementation(() => mockResizeObserverInstance);
window.ResizeObserver = mockResizeObserver;

// Mock fetch
global.fetch = vi.fn() as any;

// Add global test helpers
declare global {
  interface Window {
    IntersectionObserver: typeof mockIntersectionObserver;
    ResizeObserver: typeof mockResizeObserver;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      fetch: typeof fetch;
      mockFetchResponse: (data: any, status?: number) => void;
      mockFetchError: (error: Error) => void;
    }
  }
}

// Clean up after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  
  // Reset mock implementations
  mockIntersectionObserver.mockClear();
  mockIntersectionObserverInstance.observe.mockClear();
  mockIntersectionObserverInstance.unobserve.mockClear();
  mockIntersectionObserverInstance.disconnect.mockClear();
  
  mockResizeObserver.mockClear();
  mockResizeObserverInstance.observe.mockClear();
  mockResizeObserverInstance.unobserve.mockClear();
  mockResizeObserverInstance.disconnect.mockClear();
});

// Helper for mocking successful fetch responses
const mockFetchResponse = (data: any, status = 200) => {
  (global.fetch as any).mockResolvedValueOnce({
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
    text: async () => JSON.stringify(data),
  });
};

// Helper for mocking failed fetch responses
const mockFetchError = (error: Error) => {
  (global.fetch as any).mockRejectedValueOnce(error);
};

// Add to global scope
global.mockFetchResponse = mockFetchResponse;
global.mockFetchError = mockFetchError;
