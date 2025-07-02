/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />
/// <reference types="vitest" />

declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/dist/runtime/server';
  const Component: AstroComponentFactory;
  export default Component;
}

// Add types for Vitest
declare const vi: typeof import('vitest')['vi'];
declare const describe: typeof import('vitest')['describe'];
declare const it: typeof import('vitest')['it'];
declare const expect: typeof import('vitest')['expect'];
declare const beforeEach: typeof import('vitest')['beforeEach'];
declare const afterEach: typeof import('vitest')['afterEach'];

// Add types for JSX
import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
