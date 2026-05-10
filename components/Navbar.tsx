
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Joy', href: '/#joy' },
    { name: 'About', href: '/#about' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm border-b border-brand-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight uppercase">
          Masechaba <span className="text-brand">Khoza</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="flex items-center space-x-4 text-sm font-medium text-slate-600">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && <span className="text-slate-300">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-4xl font-black text-slate-900 tracking-tighter transition-all duration-300 delay-[${index * 100}ms] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 flex gap-6">
            <a href="https://www.linkedin.com/in/masechabakhoza/" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-100 rounded-2xl text-brand group hover:bg-brand hover:text-white transition-all">
              <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
            <a href="mailto:masechaba.c.khoza@gmail.com" className="p-3 bg-brand-100 rounded-2xl text-brand group hover:bg-brand hover:text-white transition-all">
              <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
