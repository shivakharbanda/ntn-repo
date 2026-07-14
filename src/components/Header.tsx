/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Shield, Award, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onScrollTo: (elementId: string) => void;
}

export default function Header({ onOpenQuote, onScrollTo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Who We Serve', id: 'who-we-serve' },
    { label: 'Countries', id: 'countries' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header className="w-full z-50">
      {/* Top Banner (Info Bar) */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2.5 px-4 sm:px-6 md:px-8 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
          <a href="mailto:info@embassyattestationindia.com" className="flex items-center gap-1.5 hover:text-amber-500 transition-colors" id="top-email">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>info@embassyattestationindia.com</span>
          </a>
          <a href="tel:+919818001166" className="flex items-center gap-1.5 hover:text-amber-500 transition-colors" id="top-phone">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>+91-9818001166</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-400" id="top-location">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Malviya Nagar, New Delhi</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase font-semibold">
          <span className="flex items-center gap-1 text-amber-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            MEA Approved Submission
          </span>
          <span className="hidden lg:inline text-slate-600">|</span>
          <span className="hidden lg:inline text-slate-300">ISO 9001:2015 Certified</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 bg-white shadow-md py-3 border-b border-slate-200' 
          : 'relative bg-white border-b border-slate-200 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="brand-logo"
          >
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-6">
              <div className="border-2 border-white w-6 h-6 rotate-45"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="font-display font-black text-slate-900 tracking-tighter text-lg sm:text-xl md:text-2xl flex items-center gap-1 leading-none">
                EMBASSY <span className="text-amber-500">ATTESTATION</span>
              </div>
              <div className="text-[10px] tracking-widest text-slate-500 uppercase font-bold mt-0.5 font-sans">
                MEA & Legalization Specialists
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-wider text-slate-600">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-slate-900 py-2 relative group cursor-pointer transition-colors"
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="h-6 w-[1px] bg-slate-200"></div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/919818001166?text=Hi%2C%20I%20want%20to%20get%20information%20about%20document%20attestation%20and%20apostille." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
                id="header-whatsapp"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                WhatsApp
              </a>
              <a 
                href="tel:+919818001166" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                id="header-call"
              >
                <Phone className="w-3.5 h-3.5 text-slate-900" />
                Call Now
              </a>
              <button 
                onClick={onOpenQuote}
                className="bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all"
                id="header-quote"
              >
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href="tel:+919818001166" 
              className="p-2 bg-slate-100 text-slate-900 rounded-sm hover:bg-slate-200 transition-colors"
              id="mobile-call-icon"
              title="Call Us"
            >
              <Phone className="w-4.5 h-4.5" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 hover:text-amber-500 focus:outline-none"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 z-40 transition-all duration-300">
            <ul className="space-y-3.5 mb-6">
              {menuItems.map((item) => (
                <li key={item.id} className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left font-bold text-slate-700 hover:text-slate-900 uppercase text-xs tracking-wider py-1"
                    id={`mobile-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/919818001166?text=Hi%2C%20I%20want%20to%20get%20information%20about%20document%20attestation%20and%20apostille." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white hover:bg-green-700 text-center py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                id="mobile-whatsapp-btn"
              >
                <span>WhatsApp Expert</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a 
                  href="tel:+919818001166" 
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1"
                  id="mobile-call-btn"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-slate-900 text-white py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider shadow-md"
                  id="mobile-quote-btn"
                >
                  Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
