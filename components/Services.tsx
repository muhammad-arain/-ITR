
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Complete Solar Energy Ecosystem</h2>
          <p className="text-slate-500 text-lg">
            We provide a comprehensive range of solar services tailored to the specific energy needs of Pakistan's climate and infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {/* Fixed: Use React.isValidElement and cast to any to allow overriding className via cloneElement */}
                {React.isValidElement(service.icon) && React.cloneElement(service.icon as React.ReactElement<any>, { 
                  className: 'w-8 h-8 transition-colors duration-300' 
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-emerald-600 font-bold text-sm inline-flex items-center hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
