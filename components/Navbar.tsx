import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { name: 'Home',      path: '/' },
    { name: 'About',     path: '/about' },
    { name: 'Services',  path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Contact',   path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-parchment-50/95 backdrop-blur-md shadow-sm border-b border-parchment-200'
        : 'bg-parchment-50/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display text-3xl font-semibold text-forest-900 leading-none">GHG</span>
            <div className="hidden sm:block border-l border-forest-200 pl-3">
              <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-forest-700 leading-tight">Global Health</div>
              <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-forest-700 leading-tight">Group</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 pb-1 ${
                  isActive(link.path)
                    ? 'text-forest-900'
                    : 'text-ink-500 hover:text-forest-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-400" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="text-[11px] tracking-[0.15em] uppercase font-medium bg-forest-900 text-parchment-100 px-6 py-3 hover:bg-forest-800 transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink-700 hover:text-forest-900 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-parchment-50 border-t border-parchment-200">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 text-[11px] tracking-[0.15em] uppercase font-medium border-b border-parchment-200 last:border-0 transition-colors ${
                  isActive(link.path) ? 'text-forest-900' : 'text-ink-600 hover:text-forest-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 text-center text-[11px] tracking-[0.15em] uppercase font-medium bg-forest-900 text-parchment-100 px-6 py-3 hover:bg-forest-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
