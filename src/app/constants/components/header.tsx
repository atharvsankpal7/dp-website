"use client"
import React, { useState } from 'react';

// Define interface for navigation item
interface NavItem {
  label: string;
  href: string;
  type?: 'primary' | 'secondary';
}

// Props interface for the Header component
interface HeaderProps {
  brandName?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaLink?: string;
}

const Header: React.FC<HeaderProps> = ({
  brandName = 'Display Promotion',
  navItems = [],
  ctaText = 'Get Started',
  ctaLink = '#'
}) => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300  ${
      isScrolled ? 'bg-white/30 backdrop-blur-md shadow-sm py-4 ' : 'bg-transparent py-6 '
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="flex items-center">
                <span className="gradient-text">{brandName}</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className={`
                      ${item.type === 'primary' 
                        ? 'btn-primary' 
                        : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {navItems.length === 0 && (
              <a 
                href={ctaLink} 
                className="btn-primary"
              >
                {ctaText}
              </a>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-primary focus:outline-none transition-colors duration-200"
              aria-label="Open menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 border-t border-gray-100">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className={`
                      block px-4 py-2 
                      ${item.type === 'primary' 
                        ? 'btn-primary text-center' 
                        : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {navItems.length === 0 && (
                <li>
                  <a 
                    href={ctaLink} 
                    className="btn-primary text-center block"
                  >
                    {ctaText}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;