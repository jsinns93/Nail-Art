
import React, { useState } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { BRANCHES } from '../constants';
import { Branch } from '../types';

interface NavbarProps {
  onSelectBranch: (branch: Branch) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelectBranch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleBranchClick = (branch: Branch) => {
    onSelectBranch(branch);
    setShowServicesDropdown(false);
    setIsOpen(false);
    // Scroll to services section
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Sparkles className="text-rose-gold w-6 h-6" />
            <span className="text-2xl font-serif tracking-widest uppercase">Shanail.co</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-medium hover:text-rose-gold transition">HOME</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-rose-gold transition py-8">
                SERVICES <ChevronDown className={`w-4 h-4 transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showServicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white border border-rose-100 shadow-xl rounded-b-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {BRANCHES.map((branch) => (
                    <button
                      key={branch.id}
                      onClick={() => handleBranchClick(branch)}
                      className="w-full text-left px-6 py-4 text-sm hover:bg-rose-50 hover:text-rose-gold transition border-b border-rose-50 last:border-0"
                    >
                      {branch.locationName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#shop" className="text-sm font-medium hover:text-rose-gold transition">SHOP</a>
            <a href="#services" className="bg-rose-gold text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-rose-700 transition">
              BOOK NOW
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-4 text-center text-base font-medium" onClick={() => setIsOpen(false)}>HOME</a>
            
            <div className="bg-rose-50/50 rounded-xl px-4 py-2 my-2">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 text-center">Our Locations</span>
              {BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => handleBranchClick(branch)}
                  className="w-full text-center py-3 text-sm font-medium border-b border-rose-100 last:border-0"
                >
                  {branch.locationName}
                </button>
              ))}
            </div>

            <a href="#shop" className="block px-3 py-4 text-center text-base font-medium" onClick={() => setIsOpen(false)}>SHOP</a>
            <a href="#services" className="w-full block bg-rose-gold text-white px-6 py-4 rounded-xl text-base font-semibold text-center" onClick={() => setIsOpen(false)}>
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
