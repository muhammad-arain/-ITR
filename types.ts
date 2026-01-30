
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  link?: string;
}
