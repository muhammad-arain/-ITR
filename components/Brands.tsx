
import React from 'react';

const Brands: React.FC = () => {
  const brands = [
    "Inverex", "Crown", "MaxPower", "Volnex", "Longi Solar", "Jinko Solar"
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Partnered with Global Market Leaders</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand} className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-black text-slate-400 select-none">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
