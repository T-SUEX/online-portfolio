import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <Dna className="text-teal-600" size={28} />
          <span>{PORTFOLIO_OWNER.split(' ')[0]}<span className="text-teal-600">Bio</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a href="#contact" className="px-5 py-3 bg-slate-900 text-white rounded-lg text-center font-medium mt-2" onClick={() => setIsMenuOpen(false)}>
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};