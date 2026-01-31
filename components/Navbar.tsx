import React, { useState, useEffect } from 'react';
import { Container, Menu, X } from 'lucide-react';

interface NavbarProps {
  onJoinWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToData = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('market-data');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-royal-900 text-white' : 'bg-white text-royal-900 shadow-md'}`}>
              <Container size={24} />
            </div>
            <span className={`font-serif font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Gateway to GMT Commerce Solutions
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-royal-900 font-medium text-sm transition-colors">Services</a>
            <a href="#market-data" onClick={scrollToData} className="text-slate-600 hover:text-royal-900 font-medium text-sm transition-colors">UK-India Data</a>
            <a href="#" className="text-slate-600 hover:text-royal-900 font-medium text-sm transition-colors">Pricing</a>
            <button 
              onClick={onJoinWaitlist}
              className="bg-royal-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-royal-800 transition-colors shadow-lg shadow-royal-900/10"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 md:hidden flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded">Services</a>
          <a href="#market-data" onClick={scrollToData} className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded">UK-India Data</a>
          <a href="#" className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded">Pricing</a>
          <button 
            onClick={() => {
              onJoinWaitlist();
              setIsMobileMenuOpen(false);
            }}
            className="bg-royal-900 text-white w-full py-3 rounded-lg font-semibold"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};