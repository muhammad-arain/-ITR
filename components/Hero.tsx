
import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6 backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Authorized Solar Partners Across Pakistan</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
            Reliable & Smart <span className="text-emerald-500">Solar Energy</span> Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            Switch to cleaner, smarter energy with ITR Automation Group. We provide end-to-end solar installations with high-efficiency panels and smart inverters from the world's leading brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center transition-all group shadow-2xl shadow-emerald-500/20"
            >
              Get Free Quote
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={CONTACT_DETAILS.links.whatsapp} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold flex items-center justify-center transition-all"
            >
              <MessageCircle className="mr-2 w-5 h-5 text-emerald-400" />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold text-2xl">100%</span>
              <span className="text-slate-400 text-sm uppercase tracking-widest">Quality Assurance</span>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold text-2xl">Nationwide</span>
              <span className="text-slate-400 text-sm uppercase tracking-widest">Service Coverage</span>
            </div>
            <div className="flex flex-col hidden md:flex">
              <span className="text-emerald-500 font-bold text-2xl">Expert</span>
              <span className="text-slate-400 text-sm uppercase tracking-widest">Installation Team</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[150px] -z-1"></div>
    </section>
  );
};

export default Hero;
