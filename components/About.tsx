
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const brands = ["Inverex", "Crown", "MaxPower", "Volnex", "Longi Solar", "Jinko Solar"];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-50 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
              alt="Solar Panel Installation" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-emerald-600">
              <p className="text-3xl font-bold text-slate-900">10+</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-tighter">Years of Excellence</p>
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Empowering Pakistan</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
              Premium Solar Solutions by <span className="text-emerald-600">ITR Automation Group</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              ITR Solar is a premier provider of smart energy solutions. As a part of the ITR Automation Group, we specialize in delivering high-performance solar systems across Pakistan. Our mission is to lead the transition to renewable energy through innovation and technical excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold">{brand} Authorized Dealer</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nationwide Reach</h3>
              <p className="text-slate-600">
                Whether you're in Karachi, Lahore, Islamabad, or Hyderabad, our engineering team ensures top-quality solar installation and maintenance services wherever you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
