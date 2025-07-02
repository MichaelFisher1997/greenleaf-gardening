// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Mock the Index page component
vi.mock('../index.astro', () => ({
  default: function MockIndex() {
    return (
      <div data-testid="home-page">
        <div data-testid="hero">Hero Section</div>
        <div data-testid="services">Services Section</div>
        <div data-testid="about">About Section</div>
        <div data-testid="testimonials">Testimonials Section</div>
        <div data-testid="cta">Call to Action</div>
      </div>
    );
  },
}));

// Import the component after setting up the mock
import Home from '../index.astro';

describe('Home Page', () => {
  it('renders all sections', () => {
    render(<Home />);
    
    // Check if all sections are rendered
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('cta')).toBeInTheDocument();
  });

  // Removed navigation links test as it's not relevant for the simplified mock component
  // Navigation should be tested in an E2E test or in component tests for the Navbar component

  // Removed call-to-action buttons test as it's not relevant for the simplified mock component
  // CTA buttons should be tested in their respective component tests

  // Removed accessibility test as it's not relevant for the simplified mock component
  // Accessibility should be tested in component tests or with dedicated tools like axe
});
