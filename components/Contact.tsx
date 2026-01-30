
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Let's Design Your Solar System</h2>
          <p className="text-slate-500 text-lg">
            Contact us today for a free site assessment and customized quotation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-emerald-600 p-3 rounded-lg text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <p className="text-sm font-medium text-slate-500">10:30 AM - 9:00 PM <span className="text-red-500 ml-1">(Friday Closed)</span></p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-slate-800 font-semibold">{CONTACT_DETAILS.mainBranch.mobile}</p>
                <p className="text-slate-800 font-semibold">{CONTACT_DETAILS.mainBranch.ptcl}</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-emerald-600 p-3 rounded-lg text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">WhatsApp</h3>
                  <p className="text-sm text-slate-500">Quick response</p>
                </div>
              </div>
              <a 
                href={CONTACT_DETAILS.links.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-colors"
              >
                Chat Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-sm text-slate-500">General inquiries</p>
                </div>
              </div>
              <p className="text-slate-800 font-semibold">{CONTACT_DETAILS.mainBranch.email}</p>
            </div>
          </div>

          {/* Branch Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Main Branch</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {CONTACT_DETAILS.mainBranch.address}
                </p>
                <a 
                  href={CONTACT_DETAILS.links.googleBusiness} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-bold flex items-center hover:underline"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Branch II</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {CONTACT_DETAILS.secondBranch.address}
                </p>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold uppercase tracking-widest">
                  Premium Experience Center
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-slate-500 font-bold uppercase text-sm tracking-widest">Follow Us:</span>
              <a href={CONTACT_DETAILS.links.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={CONTACT_DETAILS.links.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={CONTACT_DETAILS.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-emerald-600 hover:text-white transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
