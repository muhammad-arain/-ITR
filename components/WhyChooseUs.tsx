
import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Trust & Excellence</span>
            <h2 className="text-4xl font-extrabold text-white mt-2 mb-6">Why Choose ITR Solar?</h2>
            <p className="text-slate-400 text-lg mb-10">
              We don't just sell solar panels; we engineer custom energy independence solutions. Our commitment to quality and technical precision sets us apart in the Pakistani market.
            </p>

            <div className="space-y-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-800 rounded-3xl p-2 h-full">
              <img 
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2031&auto=format&fit=crop" 
                alt="Modern Solar Installation" 
                className="rounded-2xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
