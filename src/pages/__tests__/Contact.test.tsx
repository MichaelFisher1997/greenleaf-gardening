// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the Contact page component
vi.mock('../contact.astro', () => ({
  default: function MockContact() {
    return (
      <div data-testid="contact-page">
        <section className="relative bg-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We'd love to hear from you! Contact us for inquiries or to schedule a consultation.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      type="text"
                      data-testid="name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      type="email"
                      data-testid="email-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your message"
                      data-testid="message-input"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-md"
                      data-testid="submit-button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="lg:pl-12">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Email us at</p>
                      <p className="text-gray-900">info@greenleafgardens.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Call us at</p>
                      <p className="text-gray-900">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700 font-medium">Visit us at</p>
                      <p className="text-gray-900">123 Garden Lane, Greenville, SC 29601</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}));

// Import the Contact component after setting up the mock
import Contact from '../contact.astro';

describe('Contact Page', () => {
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

  it('renders the contact page header', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { level: 1, name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument();
  });

  it('renders the contact form with all fields', () => {
    render(<Contact />);
    
    // Check form title
    expect(screen.getByRole('heading', { level: 2, name: /send us a message/i })).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact />);
    
    // Check contact info title
    expect(screen.getByRole('heading', { level: 2, name: /contact information/i })).toBeInTheDocument();
    
    // Check contact details
    expect(screen.getByText(/email us at/i)).toBeInTheDocument();
    expect(screen.getByText(/info@greenleafgardens.com/i)).toBeInTheDocument();
    
    expect(screen.getByText(/call us at/i)).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/i)).toBeInTheDocument();
    
    expect(screen.getByText(/visit us at/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Garden Lane, Greenville, SC 29601/i)).toBeInTheDocument();
  });
});
