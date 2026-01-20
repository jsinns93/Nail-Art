
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductGrid from './components/ProductGrid';
import NailConsultant from './components/NailConsultant';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Branch } from './types';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif tracking-widest uppercase">Shanail.co</h3>
          <p className="text-gray-400 leading-relaxed">
            Crafting elegance and confidence through the art of fine nails. Reusable luxury for the modern individual.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-rose-gold transition"><Instagram /></a>
            <a href="#" className="hover:text-rose-gold transition"><Facebook /></a>
            <a href="#" className="hover:text-rose-gold transition"><Twitter /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="#consultant" className="hover:text-white transition">AI Stylist</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5" /> 123 Beauty Lane, Chic City</li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5" /> +1 (555) 0123-4567</li>
            <li className="flex items-center gap-3"><Mail className="w-5 h-5" /> hello@shanail.co</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
          <p className="text-gray-400 mb-4">Subscribe to get design inspo and new product alerts.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 flex-grow focus:ring-1 focus:ring-rose-gold"
            />
            <button className="bg-rose-gold px-4 py-2 rounded-lg font-bold">JOIN</button>
          </div>
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
        <ProductGrid />
        <NailConsultant />

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
                <h2 className="text-5xl font-serif mb-8 leading-tight">Handcrafted Excellence in <span className="italic">Every Tip</span></h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    At Shanail.co, we believe your nails are the ultimate accessory. Each press-on set is hand-painted by our master artists using professional salon-grade soft gel.
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
