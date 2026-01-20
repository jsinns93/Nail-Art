
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import PromoPopup from './components/PromoPopup';
import TermsPopup from './components/TermsPopup';
import { Instagram, Phone } from 'lucide-react';
import { Branch } from './types';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif tracking-widest uppercase">Shanail.co</h3>
          <p className="text-gray-400 leading-relaxed">
            Crafting elegance and confidence through the art of fine nails, lash, brow, and hair. Reusable luxury for the modern individual.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/shanail.id/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-rose-gold transition"
            >
              <div className="p-3 rounded-full bg-gray-800 group-hover:bg-rose-gold/10 transition">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
            </a>
            <a 
              href="#services" 
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-rose-gold transition"
            >
              <div className="p-3 rounded-full bg-gray-800 group-hover:bg-rose-gold/10 transition">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">WhatsApp</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Feedback</h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Suggestions? Comments? Let us know! We'd love to hear from you!
          </p>
          <a 
            href="https://wa.me/62895351406765" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-gold text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-rose-700 transition shadow-lg shadow-rose-900/20"
          >
            <Phone className="w-4 h-4" /> SEND FEEDBACK
          </a>
        </div>
      </div>
      
      <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shanail.co. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  const handleSelectBranch = (branch: Branch | null) => {
    setActiveBranch(branch);
  };

  return (
    <div className="min-h-screen">
      <PromoPopup />
      <TermsPopup />
      <Navbar onSelectBranch={handleSelectBranch} />
      <main>
        <Hero />
        
        {/* Social Proof Section */}
        <section className="py-12 border-y border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500">
            <span className="text-2xl font-serif">VOGUE</span>
            <span className="text-2xl font-serif">ELLE</span>
            <span className="text-2xl font-serif">COSMOPOLITAN</span>
            <span className="text-2xl font-serif">BAZAAR</span>
            <span className="text-2xl font-serif">GLAMOUR</span>
          </div>
        </section>

        <Services selectedBranch={activeBranch} onSelectBranch={handleSelectBranch} />
        <Gallery />

        {/* Brand Philosophy */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-50 rounded-full -z-10 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000" 
                  alt="Process"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-serif mb-8 leading-tight">Handcrafted Excellence in <span className="italic">Every Service</span></h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    At Shanail.co, we believe your beauty is your ultimate accessory. From hand-painted press-on nails to expert lash, brow, and hair styling, our master artists bring excellence to every detail.
                  </p>
                  <p>
                    Our mission is to provide you with a salon-quality manicure in under 10 minutes—without compromising on health, style, or quality. Reusable up to 5 times, eco-conscious, and uniquely yours.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-3xl font-serif text-rose-gold mb-1">5k+</h5>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Sets Sold</p>
                  </div>
                  <div>
                    <h5 className="text-3xl font-serif text-rose-gold mb-1">100%</h5>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Handmade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
