
import React from 'react';
import { Zap, MapPin, Phone, Mail, ChevronRight, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">ITR SOLAR</span>
                <span className="text-[10px] font-medium tracking-widest text-emerald-400 uppercase">Automation Group</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Pakistan's leading provider of smart and reliable solar energy solutions. We empower homes and businesses with high-efficiency technology from global brands.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_DETAILS.links.facebook} className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={CONTACT_DETAILS.links.instagram} className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={CONTACT_DETAILS.links.linkedin} className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-400 hover:text-emerald-500 flex items-center group transition-colors text-sm">
                    <ChevronRight className="w-4 h-4 mr-2 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="hover:text-emerald-500 transition-colors cursor-pointer flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                Residential Solar
              </li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                Commercial Systems
              </li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                Industrial Automation
              </li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                Battery Backup Solutions
              </li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                24/7 Maintenance
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-slate-400">{CONTACT_DETAILS.mainBranch.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-400">{CONTACT_DETAILS.mainBranch.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-400">WhatsApp: {CONTACT_DETAILS.mainBranch.whatsapp}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-400">{CONTACT_DETAILS.mainBranch.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-wider space-y-4 md:space-y-0">
            <p className="uppercase">© {new Date().getFullYear()} ITR SOLAR (ITR AUTOMATION GROUP). ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 uppercase">
              <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
