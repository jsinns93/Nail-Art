
import React, { useState, useRef } from 'react';
import { Sparkles, Camera, Upload, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { getNailArtSuggestion } from '../services/gemini';
import { NailSuggestion } from '../types';

const NailConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestion, setSuggestion] = useState<NailSuggestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt && !image) return;

    setLoading(true);
    const base64Data = image ? image.split(',')[1] : undefined;
    const result = await getNailArtSuggestion(prompt || "a trendy design", base64Data);
    setSuggestion(result);
    setLoading(false);
  };

  return (
    <section id="consultant" className="py-24 bg-rose-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-gold px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" /> AI POWERED STYLIST
          </div>
          <h2 className="text-4xl font-serif mb-4">Personalized Design Consultant</h2>
          <p className="text-gray-600">Tell us your mood, upload your outfit, or describe an event. Gemini will create your perfect nail concept.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100 border border-rose-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Describe your vibe</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'I'm wearing a sage green slip dress for a summer garden wedding...'"
                  className="w-full h-40 p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-gold transition outline-none resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Upload Reference (Outfit/Inspo)</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-40 rounded-2xl border-2 border-dashed border-rose-200 flex flex-col items-center justify-center cursor-pointer hover:bg-rose-50 transition overflow-hidden"
                >
                  {image ? (
                    <img src={image} className="w-full h-full object-cover" alt="Preview" />
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-rose-300 mb-2" />
                      <span className="text-sm text-gray-400">Click to upload photo</span>
                    </>
                  )}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  className="hidden" 
                  accept="image/*"
                />
                <button 
                  type="button"
                  onClick={() => { /* Camera logic could go here */ }}
                  className="w-full py-2 flex items-center justify-center gap-2 text-rose-gold text-sm font-semibold"
                >
                  <Camera className="w-4 h-4" /> Open Camera
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-rose-gold text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-rose-700 transition disabled:opacity-50 shadow-lg shadow-rose-200"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
              {loading ? 'Consulting the Stylist...' : 'GET MY DESIGN'}
            </button>
          </form>

          {suggestion && (
            <div className="mt-12 p-8 bg-rose-50 rounded-2xl border border-rose-200 animate-in fade-in zoom-in duration-500">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{suggestion.designName}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-rose-gold border border-rose-100">{suggestion.shape}</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-rose-gold border border-rose-100">{suggestion.style}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{suggestion.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-semibold text-gray-500 uppercase">Palette:</span>
                    <div className="flex gap-2">
                      {suggestion.colorPalette.map((color, i) => (
                        <div 
                          key={i} 
                          title={color}
                          className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-64 space-y-4">
                   <div className="bg-white p-4 rounded-xl border border-rose-100">
                     <p className="text-xs font-bold text-gray-400 uppercase mb-2">Stylist Recommendation</p>
                     <ul className="text-sm space-y-2">
                       <li className="flex items-center gap-2 text-gray-700">
                         <CheckCircle2 className="w-4 h-4 text-green-500" /> Use Gel-X Extensions
                       </li>
                       <li className="flex items-center gap-2 text-gray-700">
                         <CheckCircle2 className="w-4 h-4 text-green-500" /> High-Gloss Top Coat
                       </li>
                     </ul>
                   </div>
                   <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition">
                     ORDER CUSTOM SET
                   </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NailConsultant;
