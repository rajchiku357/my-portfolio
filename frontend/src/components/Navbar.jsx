import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#131314]/90 backdrop-blur-xl border-b border-white/10 h-16' : 'bg-transparent h-20'
    }`}>
      <div className="max-w-[1280px] mx-auto h-full flex justify-between items-center px-6 md:px-16">
        
        {/* Brand Logo with Custom Favicon and Rithik Raj's Name */}
        <a href="#" className="flex items-center space-x-2.5 font-mono text-xs tracking-widest text-[#e5e2e3] font-bold hover:text-[#00f5ff] transition-colors group">
          <img
            src="/favicon.jpg"
            alt="Rithik Raj Logo"
            className="w-7 h-7 rounded-full border border-[#00f5ff]/40 shadow-[0_0_12px_rgba(0,245,255,0.4)] group-hover:scale-105 transition-transform"
          />
          <span>00 // RITHIK RAJ</span>
        </a>

        {/* Desktop Monospace Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs tracking-widest text-[#b9caca] hover:text-[#e5e2e3] transition-colors px-3 py-1.5 rounded-sm hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Direct Resume Download Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/Rithik_Raj_Resume.pdf"
            download="Rithik_Raj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00f5ff] text-black font-mono text-xs font-bold tracking-wider px-4 py-2 rounded hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,245,255,0.3)]"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#e5e2e3] hover:text-[#00f5ff]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131314] border-b border-white/10 px-6 py-4 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#b9caca] hover:text-[#00f5ff]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Rithik_Raj_Resume.pdf"
            download="Rithik_Raj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#00f5ff] text-black font-bold py-2.5 rounded mt-2"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      )}
    </nav>
  );
}
