
import React from 'react';
import { ShieldCheck, Zap, Battery, Settings, Users, Globe, Headset } from 'lucide-react';
import { Service, Brand } from './types';

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Solar Solutions',
    description: 'Customized solar systems designed for homes to eliminate electricity bills and provide 24/7 power backup.',
    icon: <Zap className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'commercial',
    title: 'Commercial & Industrial',
    description: 'High-capacity solar installations for businesses and factories looking to reduce operational costs significantly.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'storage',
    title: 'Solar Inverters & Batteries',
    description: 'Premium storage solutions using high-efficiency lithium and deep-cycle batteries with smart inverters.',
    icon: <Battery className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'maintenance',
    title: 'Installation & Support',
    description: 'Professional engineering services, nationwide installation, and dedicated after-sales maintenance.',
    icon: <Settings className="w-8 h-8 text-emerald-600" />
  }
];

export const BRANDS: Brand[] = [
  { name: 'Inverex', logo: 'https://picsum.photos/seed/inverex/200/100' },
  { name: 'Crown', logo: 'https://picsum.photos/seed/crown/200/100' },
  { name: 'MaxPower', logo: 'https://picsum.photos/seed/maxpower/200/100' },
  { name: 'Volnex', logo: 'https://picsum.photos/seed/volnex/200/100' },
  { name: 'Longi Solar', logo: 'https://picsum.photos/seed/longi/200/100' },
  { name: 'Jinko Solar', logo: 'https://picsum.photos/seed/jinko/200/100' }
];

export const FEATURES = [
  {
    title: 'Authorized Dealer',
    description: 'Officially certified partner for top-tier global solar brands.',
    icon: <ShieldCheck className="w-6 h-6 text-white" />
  },
  {
    title: 'Experienced Engineers',
    description: 'Technical team with years of expertise in high-end solar automation.',
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    title: 'Nationwide Service',
    description: 'Reliable installations and support across all major cities of Pakistan.',
    icon: <Globe className="w-6 h-6 text-white" />
  },
  {
    title: 'Reliable After-Sales',
    description: 'Dedicated support system to ensure your energy system performs at peak.',
    icon: <Headset className="w-6 h-6 text-white" />
  }
];

export const CONTACT_DETAILS = {
  mainBranch: {
    address: 'ITR AUTOMATION GROUP (ITR SOLAR), Rahat Cinema Road, Doctors Colony, Hyderabad, 71000',
    mobile: '0315-2733377',
    whatsapp: '0322-4487487',
    ptcl: '022-2780617',
    email: 'hyd.itr@gmail.com'
  },
  secondBranch: {
    address: 'ITR SOLAR, Main Autobhan Road, near Zengler Gold, opposite Dawood Super Market, Hyderabad, 71000, Pakistan'
  },
  links: {
    whatsapp: 'https://wa.me/923224487487',
    instagram: 'https://www.instagram.com/itrsolar?igsh=cTE1dW51dWlrMzNq&utm_source=qr',
    facebook: 'https://www.facebook.com/profile.php?id=61565456555269&mibextid=LQQJ4d',
    linkedin: 'https://ng.linkedin.com/company/itr-automation-group-pakistan',
    googleBusiness: 'https://share.google/KPZkAlX9Jsy4HxhLE'
  }
};
