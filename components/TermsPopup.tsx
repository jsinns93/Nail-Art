
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TermsPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        // Show popup when services section is in view
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
          const hasShown = sessionStorage.getItem('terms_popup_shown');
          if (!hasShown) {
            setIsOpen(true);
            sessionStorage.setItem('terms_popup_shown', 'true');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for custom event from Navbar
  useEffect(() => {
    const handleShowTerms = () => {
      setIsOpen(true);
    };
    window.addEventListener('show-terms-popup', handleShowTerms);
    return () => window.removeEventListener('show-terms-popup', handleShowTerms);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white text-rose-gold hover:bg-rose-gold hover:text-white rounded-full transition-all shadow-xl border border-rose-100"
          aria-label="Close terms"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative max-h-[85vh] overflow-y-auto bg-white">
          <img 
            src="/assets/terms-popup.jpg" 
            alt="Terms and Conditions" 
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
};

export default TermsPopup;
