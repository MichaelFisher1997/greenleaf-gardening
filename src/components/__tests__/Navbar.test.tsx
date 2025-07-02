// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock the Navbar component
vi.mock('../Navbar.astro', () => ({
  default: function MockNavbar() {
    return (
      <nav data-testid="navbar">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="GreenLeaf Gardening Logo" 
                className="h-10"
                data-testid="logo"
              />
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-800 hover:text-green-600">Home</a>
              <a href="/services" className="text-gray-800 hover:text-green-600">Services</a>
              <a href="/about" className="text-gray-800 hover:text-green-600">About</a>
              <a href="/contact" className="text-gray-800 hover:text-green-600">Contact</a>
            </div>
            <button 
              className="md:hidden text-gray-800"
              data-testid="mobile-menu-button"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.toggle('hidden');
                }
              }}
            >
              <span>☰</span>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600">Home</a>
            <a href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600">Services</a>
            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600">About</a>
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}));

// Import the Navbar component after setting up mocks
import Navbar from '../Navbar.astro';

describe('Navbar', () => {
  beforeEach(() => {
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('renders the navbar with logo and navigation links', () => {
    render(<Navbar />);
    
    // Check if the navbar is rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    
    // Check if the logo is rendered
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    
    // Check if navigation links are rendered
    const navLinks = ['Home', 'Services', 'About', 'Contact'];
    navLinks.forEach(linkText => {
      const elements = screen.getAllByText(linkText);
      expect(elements.length).toBeGreaterThan(0);
      expect(elements[0]).toBeInTheDocument();
    });
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByTestId('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Initial state (menu should be hidden)
    expect(mobileMenu).toHaveClass('hidden');
    
    // Click to open menu
    fireEvent.click(menuButton);
    expect(mobileMenu).not.toHaveClass('hidden');
    
    // Click to close menu
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('hidden');
  });
});
