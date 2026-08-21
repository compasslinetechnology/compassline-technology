// Single source of truth for company info, nav structure, and shared copy.
// Edit this file to update contact details or navigation without touching templates.

export const site = {
  name: 'Compassline Technology',
  tagline: 'Guiding Your Business Forward',
  url: 'https://compasslinetechnology.com',
  email: 'hello@compasslinetechnology.com',
  description:
    'Compassline Technology helps small businesses build professional websites, manage Google Workspace, secure business email, and simplify the technology behind their business.',
};

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Websites', href: '/website-design' },
  { label: 'Google Workspace', href: '/google-workspace' },
  { label: 'Business Email', href: '/business-email' },
  { label: 'Technology Services', href: '/technology-services' },
  { label: 'Website Management', href: '/website-management' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks: NavItem[] = [
  { label: 'Website Design', href: '/website-design' },
  { label: 'Google Workspace', href: '/google-workspace' },
  { label: 'Business Email', href: '/business-email' },
  { label: 'Website Management', href: '/website-management' },
  { label: 'Technology Services', href: '/technology-services' },
];

export const footerCompanyLinks: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

// Service dropdown options used by the contact form and by "Service Interested In"
// query params linked from each service page's CTA.
export const serviceOptions = [
  { value: 'website-design', label: 'Website Design' },
  { value: 'google-workspace', label: 'Google Workspace' },
  { value: 'business-email', label: 'Business Email' },
  { value: 'website-management', label: 'Website Management' },
  { value: 'technology-support', label: 'Technology Support' },
  { value: 'domain-dns', label: 'Domain/DNS Assistance' },
  { value: 'other', label: 'Other' },
];
