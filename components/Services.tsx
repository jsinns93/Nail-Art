
import React from 'react';
import { BRANCHES } from '../constants';
import { MapPin, Phone, ChevronRight, X, Info, FileText, ExternalLink, Clock } from 'lucide-react';
import { Branch } from '../types';

interface ServicesProps {
  selectedBranch: Branch | null;
  onSelectBranch: (branch: Branch | null) => void;
}

const Services: React.FC<ServicesProps> = ({ selectedBranch, onSelectBranch }) => {
  return (
    <section id="services" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Salon Locations</h2>
          <div className="w-20 h-1 bg-rose-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose a location to view pricelists, terms and conditions, and contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BRANCHES.map((branch) => (
            <div 
              key={branch.id} 
              onClick={() => onSelectBranch(branch)}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-rose-100 flex flex-col group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/30 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-rose-200/50 transition-colors"></div>
              
              <div className="bg-rose-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-gold transition-colors relative z-10">
                <MapPin className="text-rose-gold group-hover:text-white w-6 h-6 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-serif mb-4 group-hover:text-rose-gold transition-colors relative z-10">
                {branch.locationName}
              </h3>
              
              <div className="space-y-2 mb-8 relative z-10">
                <div className="flex items-center text-gray-500 gap-2">
                  <Phone className="w-4 h-4 text-rose-gold/70" />
                  <span className="text-sm font-medium">{branch.contact}</span>
                </div>
                <div className="flex items-center text-gray-500 gap-2">
                  <Clock className="w-4 h-4 text-rose-gold/70" />
                  <span className="text-xs font-medium">{branch.workingHours}</span>
                </div>
                {branch.addresses && (
                  <div className="pt-2 space-y-2">
                    {branch.addresses.map((addr, idx) => (
                      <a 
                        key={idx}
                        href={addr.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-xs text-gray-400 hover:text-rose-gold transition group/addr"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MapPin className="w-3 h-3 mt-0.5 text-rose-gold/50 group-hover/addr:text-rose-gold" />
                        <span className="underline decoration-dotted underline-offset-2">{addr.label}: {addr.address}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-auto space-y-4 relative z-10">
                <button className="w-full bg-white border-2 border-rose-gold text-rose-gold py-3 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-rose-gold group-hover:text-white transition-all">
                  View Pricelist <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Branch Details Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-md transition-opacity"
            onClick={() => onSelectBranch(null)}
          ></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
            
            {/* Modal Header */}
            <div className="p-8 pb-6 flex justify-between items-start border-b border-gray-100">
              <div>
                <h3 className="text-3xl font-serif mb-3">{selectedBranch.locationName}</h3>
                <div className="flex flex-col gap-2">
                  <a 
                    href={`tel:${selectedBranch.contact.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-2 text-rose-gold font-bold hover:underline text-sm"
                  >
                    <Phone className="w-4 h-4" /> {selectedBranch.contact}
                  </a>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" /> {selectedBranch.workingHours}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => onSelectBranch(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-8 overflow-y-auto space-y-12">
              {/* Pricelist Section */}
              <div id="modal-pricelist">
                <div className="flex items-center gap-2 mb-8">
                  <div className="p-2 bg-rose-50 rounded-lg">
                    <Info className="w-5 h-5 text-rose-gold" />
                  </div>
                  <h4 className="text-xl font-serif">Pricelist</h4>
                </div>
                
                <div className="space-y-10">
                  {selectedBranch.pricelist.map((cat, i) => (
                    <div key={i} className="animate-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                      <h5 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-4">
                        <span className="whitespace-nowrap">{cat.category}</span>
                        <div className="h-px bg-gray-100 w-full"></div>
                      </h5>
                      <div className="space-y-4">
                        {cat.items.map((item, j) => (
                          <div key={j} className="flex justify-between items-center group">
                            <span className="text-gray-700 group-hover:text-black transition">{item.service}</span>
                            <div className="flex-grow border-b border-dotted border-gray-200 mx-4"></div>
                            <span className="font-bold text-rose-gold">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms Section */}
              <div id="modal-terms" className="bg-rose-50/50 p-8 rounded-2xl border border-rose-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-white rounded-lg border border-rose-100">
                    <FileText className="w-5 h-5 text-rose-gold" />
                  </div>
                  <h4 className="font-bold text-gray-900 uppercase text-xs tracking-[0.2em]">Terms & Conditions</h4>
                </div>
                <ul className="space-y-4">
                  {selectedBranch.terms.map((term, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-3 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-gold mt-1.5 flex-shrink-0"></div>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 pt-4 bg-gray-50 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/${selectedBranch.contact.replace(/[^0-9]/g, '')}`, '_blank')}
                className="flex-1 bg-rose-gold text-white py-4 rounded-xl font-bold shadow-lg shadow-rose-200 hover:bg-rose-700 transition flex items-center justify-center gap-2"
              >
                BOOK ON WHATSAPP <ExternalLink className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onSelectBranch(null)}
                className="flex-1 bg-white text-gray-500 py-4 rounded-xl font-bold border border-gray-200 hover:bg-gray-50 transition"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
