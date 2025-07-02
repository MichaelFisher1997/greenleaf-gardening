import { render as rtlRender } from '@testing-library/react';
import type { RenderResult, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import type { ReactNode, JSX } from 'react';
import { vi } from 'vitest';

declare global {
  interface Window {
    Astro: {
      request: {
        url: URL;
      };
      site: URL;
    };
  }
}

// Mock Astro global
if (typeof window !== 'undefined' && !window.Astro) {
  window.Astro = {
    request: {
      url: new URL('http://localhost:3000/')
    },
    site: new URL('http://localhost:3000/')
  };
}

// Type for Astro components
type AstroComponent<Props = Record<string, unknown>> = (props: Props) => JSX.Element;

// Custom render function for Astro components
export function renderAstroComponent<Props = Record<string, unknown>>(
  Component: AstroComponent<Props>,
  props: Props = {} as Props,
  options: Omit<RenderOptions, 'wrapper'> = {}
): RenderResult {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <React.Fragment>
      <div id="root">{children}</div>
      <div id="modal-root" />
    </React.Fragment>
  );

  return rtlRender(React.createElement(Component, props), {
    wrapper: Wrapper,
    ...options
  });
}

// Mock Astro components
export function mockAstroComponent<Props = Record<string, unknown>>(
  componentName: string,
  implementation: AstroComponent<Props>
): void {
  vi.doMock(`../../components/${componentName}.astro`, () => ({
    default: implementation
  }));
}
