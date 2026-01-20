
import React, { useState } from 'react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Luxury Nail Art',
    category: 'Nails',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df490c91550a?auto=format&fit=crop&q=80&w=800',
    description: 'Bespoke hand-painted designs with premium gel.'
  },
  {
    id: 2,
    title: 'Classic Lash Extension',
    category: 'Lash',
    imageUrl: 'https://images.unsplash.com/photo-1582236314820-2ce627607730?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant and natural-looking volume.'
  },
  {
    id: 3,
    title: 'Brow Lamination',
    category: 'Brow',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    description: 'Perfectly shaped and defined brows.'
  },
  {
    id: 4,
    title: 'Luxury Hair Styling',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
    description: 'Professional color and styling services.'
  },
  {
    id: 5,
    title: 'Aura Nail Design',
    category: 'Nails',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    description: 'Trendy aura-style nail gradients.'
  },
  {
    id: 6,
    title: 'Lash Lift & Tint',
    category: 'Lash',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
    description: 'Lifting your natural beauty.'
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Nails', 'Lash', 'Brow', 'Hair'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif mb-4">Our Work</h2>
            <p className="text-gray-600">A showcase of excellence across all our beauty services.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat 
                    ? 'bg-rose-gold text-white' 
                    : 'border border-gray-200 hover:border-rose-gold text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-medium">{item.description}</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-gold mb-1 block">{item.category}</span>
                <h3 className="font-serif text-xl text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
