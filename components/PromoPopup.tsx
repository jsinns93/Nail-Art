
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PromoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on mount
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white text-rose-gold hover:bg-rose-gold hover:text-white rounded-full transition-all shadow-xl border border-rose-100"
          aria-label="Close notification"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative aspect-[9/16] w-full">
          <img 
            src="/assets/popup-announcement.jpg" 
            alt="Important Announcement" 
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
