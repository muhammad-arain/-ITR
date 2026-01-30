
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>ITR SOLAR</span>
              <span className={`text-[10px] font-medium tracking-widest ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>AUTOMATION GROUP</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-emerald-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              Get Free Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-emerald-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute w-full left-0 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-semibold text-slate-800 border-b border-slate-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
