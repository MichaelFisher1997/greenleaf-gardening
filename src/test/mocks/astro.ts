import type { ComponentType } from 'astro/components';

// Mock Astro components
export const mockAstroComponents = {
  'astro:components': {
    default: {
      a: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
        <a {...props}>{children} (Mocked Link)</a>
      ),
      img: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
        <img src={src} alt={alt} {...props} data-testid="mocked-img" />
      ),
    },
  },
};

// Mock for Astro components
export function mockAstroComponent(componentName: string): ComponentType<any> {
  return function MockAstroComponent(props: any) {
    return <div data-testid={`mocked-${componentName.toLowerCase()}`} {...props} />;
  } as unknown as ComponentType<any>;
}
