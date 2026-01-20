
import React from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif mb-4">Shop the Collection</h2>
            <p className="text-gray-600">Hand-painted, reusable, and perfectly fitted.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-rose-gold text-white text-sm font-medium">All</button>
            <button className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-rose-gold">Press-ons</button>
            <button className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-rose-gold">Nail Care</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-gray-100">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-2 bg-white rounded-full shadow-md hover:text-rose-gold">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full bg-white/90 backdrop-blur py-3 rounded-xl shadow-lg font-semibold flex items-center justify-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category === 'press-on' ? 'Full Set (24 Nails)' : 'Care Product'}</p>
                </div>
                <span className="font-bold text-rose-gold">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
