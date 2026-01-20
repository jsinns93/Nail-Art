
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1604654894610-df490c91550a?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Nails"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h2 className="text-rose-gold text-lg font-semibold tracking-[0.3em] uppercase mb-4">Aesthetics & Perfection</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            Elevate Your <br />
            <span className="italic">Natural Beauty</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-md leading-relaxed">
            Luxury handmade press-on nails, bespoke lash, brow, and hair services designed to make you shine every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="bg-rose-gold text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-rose-700 transition shadow-lg shadow-rose-200">
              SHOP COLLECTION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
