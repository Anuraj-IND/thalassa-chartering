// ============================================================================
// INCWORX — central site content & data.
// All placeholder copy lives here, separated from the UI components, so real
// company information can be dropped in later without touching any markup.
// ============================================================================

export const brand = {
  name: 'INCWORX',
  tagline: 'Global Shipping • Trading • Mobility',
};

export const nav = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Global Presence', href: '#global' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Get in Touch', href: '#contact' },
};

export const hero = {
  eyebrow: 'Global Shipping • Trading • Mobility',
  titleLine1: 'Moving Business.',
  titleLine2: 'Across Borders.',
  body:
    'Integrated solutions across shipping, trading and mobility, connecting businesses to global opportunities.',
  primaryCta: { label: 'Explore Our Services', href: '#services' },
  secondaryCta: { label: 'Contact INCWORX', href: '#contact' },
  trust: 'Building connections across global markets.',
};

export const about = {
  eyebrow: 'About INCWORX',
  heading: 'Built for Global Movement.',
  body:
    'INCWORX brings together expertise across shipping, trading and mobility to help businesses move products, people and opportunities across markets.',
  image: '/images/about-port.jpg',
  blocks: [
    {
      key: 'vision',
      title: 'Our Vision',
      text: 'To be a trusted partner for businesses moving across international markets.',
    },
    {
      key: 'mission',
      title: 'Our Mission',
      text: 'To connect shipping, trading and mobility into one dependable, integrated ecosystem.',
    },
    {
      key: 'approach',
      title: 'Our Approach',
      text: 'Practical execution, long-term relationships and a global perspective on every engagement.',
    },
  ],
};

export const services = {
  eyebrow: 'Our Businesses',
  heading: 'Our Businesses',
  subtitle: 'Three capabilities. One connected ecosystem.',
  items: [
    {
      key: 'shipping',
      icon: 'ship',
      title: 'Shipping',
      text: 'Maritime solutions designed to support the movement of cargo across global markets.',
      image: '/images/service-shipping.jpg',
      href: '#contact',
    },
    {
      key: 'trading',
      icon: 'trade',
      title: 'Trading',
      text: 'Connecting suppliers, buyers and opportunities across international markets.',
      image: '/images/service-trading.jpg',
      href: '#contact',
    },
    {
      key: 'mobility',
      icon: 'mobility',
      title: 'Mobility',
      text: 'Flexible mobility solutions designed around the movement of people, assets and business.',
      image: '/images/service-mobility.jpg',
      href: '#contact',
    },
  ],
};

export const why = {
  eyebrow: 'Why INCWORX',
  heading: 'Why INCWORX',
  items: [
    { no: '01', title: 'Global Perspective', text: 'Designed for businesses operating across markets.' },
    { no: '02', title: 'Integrated Thinking', text: 'Shipping, trading and mobility brought together.' },
    { no: '03', title: 'Operational Focus', text: 'Built around dependable execution and practical solutions.' },
    { no: '04', title: 'Long-Term Partnerships', text: 'Focused on creating lasting value for customers and partners.' },
    { no: '05', title: 'Forward Looking', text: 'Adapting to a rapidly changing global business environment.' },
  ],
};

export const globalPresence = {
  eyebrow: 'Global Presence',
  heading: 'Connected to Global Markets.',
  body: 'A network built to support businesses wherever they operate.',
  networkLabel: 'Global Office Network',
  networkNote: 'Location details coming soon',
  // Approximate marker positions on the stylized map (percentages).
  markers: [
    { x: 22, y: 40 }, { x: 30, y: 34 }, { x: 48, y: 30 },
    { x: 55, y: 44 }, { x: 68, y: 38 }, { x: 78, y: 52 }, { x: 84, y: 42 },
  ],
};

export const projects = {
  eyebrow: 'Featured Projects',
  heading: 'Projects That Move Business Forward.',
  // Structured so titles, images, locations & metrics can be swapped from an API.
  items: [
    {
      id: 'project-01',
      no: 'Project 01',
      title: 'Global Maritime Logistics',
      category: 'Shipping',
      location: 'Location coming soon',
      description: 'Placeholder description for an integrated maritime logistics engagement.',
      image: '/images/project-maritime.jpg',
      href: '#contact',
    },
    {
      id: 'project-02',
      no: 'Project 02',
      title: 'International Trade Network',
      category: 'Trading',
      location: 'Location coming soon',
      description: 'Placeholder description for a cross-border trade network engagement.',
      image: '/images/project-trade.jpg',
      href: '#contact',
    },
  ],
};

export const leadership = {
  eyebrow: 'Leadership',
  heading: 'Leadership',
  body: 'Profiles will be published as team information becomes available.',
  // Placeholder profiles — no fabricated names or biographies.
  members: [
    { name: '[Name]', role: '[Designation]', bio: '[Short biography placeholder]' },
    { name: '[Name]', role: '[Designation]', bio: '[Short biography placeholder]' },
    { name: '[Name]', role: '[Designation]', bio: '[Short biography placeholder]' },
    { name: '[Name]', role: '[Designation]', bio: '[Short biography placeholder]' },
  ],
};

export const sustainability = {
  eyebrow: 'Sustainability',
  heading: 'Moving Toward a More Responsible Future.',
  body: 'A considered approach to how we operate, the people we work with and our impact.',
  image: '/images/sustainability-ocean.jpg',
  areas: [
    { title: 'Responsible Operations', text: 'A commitment to dependable, responsible ways of working.' },
    { title: 'People & Communities', text: 'Supporting the people and communities connected to our work.' },
    { title: 'Environmental Progress', text: 'Working toward a lower-impact, more sustainable future.' },
  ],
};

export const navPanels: Record<string, { rail: { heading: string; body: string; link: { label: string; href: string } } }> = {
  About: {
    rail: {
      heading: 'About INCWORX',
      body: 'A trusted partner for businesses moving across international markets.',
      link: { label: 'More About Us', href: '#about' },
    },
  },
  Services: {
    rail: {
      heading: 'Our Businesses',
      body: 'Three capabilities. One connected ecosystem.',
      link: { label: 'View All Services', href: '#services' },
    },
  },
  Projects: {
    rail: {
      heading: 'Featured Projects',
      body: 'A selection of engagements across shipping, trading and mobility.',
      link: { label: 'View All Projects', href: '#projects' },
    },
  },
  'Global Presence': {
    rail: {
      heading: 'Global Presence',
      body: 'A network built to support businesses wherever they operate.',
      link: { label: 'Our Network', href: '#global' },
    },
  },
  Contact: {
    rail: {
      heading: 'Contact',
      body: 'Reach out to INCWORX — our team will get back to you.',
      link: { label: 'Contact Details', href: '#contact' },
    },
  },
};

export const megaMenu = {
  columns: [
    {
      heading: 'Explore',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Why INCWORX', href: '#why' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      heading: 'Global & Company',
      links: [
        { label: 'Global Presence', href: '#global' },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Sustainability', href: '#sustainability' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      heading: 'Businesses',
      links: [
        { label: 'Shipping', href: '#services' },
        { label: 'Trading', href: '#services' },
        { label: 'Mobility', href: '#services' },
      ],
    },
  ],
  featured: {
    heading: 'About INCWORX',
    body: 'INCWORX brings together expertise across shipping, trading and mobility to help businesses move products, people and opportunities across markets.',
    link: { label: 'More About Us', href: '#about' },
  },
  banner: {
    image: '/images/about-port.jpg',
    ctas: [
      { label: 'Explore Our Services', href: '#services' },
      { label: 'Get in Touch', href: '#contact' },
    ],
  },
};

// Right-rail content for the hamburger mega menu — swaps as each column link
// is hovered (cascading-menu effect). Falls back to megaMenu.featured.
export const megaRails: Record<string, { heading: string; body: string; link: { label: string; href: string } }> = {
  About: navPanels.About.rail,
  Services: navPanels.Services.rail,
  'Why INCWORX': {
    heading: why.heading,
    body: 'Global perspective, integrated thinking and dependable execution for businesses operating across markets.',
    link: { label: 'Why INCWORX', href: '#why' },
  },
  Projects: navPanels.Projects.rail,
  'Global Presence': navPanels['Global Presence'].rail,
  Leadership: {
    heading: leadership.heading,
    body: leadership.body,
    link: { label: 'Meet the Team', href: '#leadership' },
  },
  Sustainability: {
    heading: 'Sustainability',
    body: sustainability.body,
    link: { label: 'Our Approach', href: '#sustainability' },
  },
  Contact: navPanels.Contact.rail,
  Shipping: {
    heading: services.items[0].title,
    body: services.items[0].text,
    link: { label: 'Explore Shipping', href: '#services' },
  },
  Trading: {
    heading: services.items[1].title,
    body: services.items[1].text,
    link: { label: 'Explore Trading', href: '#services' },
  },
  Mobility: {
    heading: services.items[2].title,
    body: services.items[2].text,
    link: { label: 'Explore Mobility', href: '#services' },
  },
};

export const contactCta = {
  heading: "Let's Move Forward Together.",
  body: 'Talk to INCWORX about your shipping, trading or mobility requirements.',
  primaryCta: { label: 'Start a Conversation', href: '#contact' },
  secondaryCta: { label: 'Explore Services', href: '#services' },
};

export const contact = {
  eyebrow: 'Contact',
  heading: "Let's talk.",
  body: 'Reach out to INCWORX — our team will get back to you.',
  info: [
    { label: 'Email', value: 'hello@incworx.example' },
    { label: 'Phone', value: '+00 000 000 0000' },
    { label: 'Head Office', value: 'Head office address coming soon' },
    { label: 'Global Offices', value: 'Global office network — details coming soon' },
  ],
};

export const footer = {
  blurb:
    'Integrated solutions across shipping, trading and mobility — connecting businesses to global opportunities.',
  columns: [
    {
      heading: 'Navigation',
      links: ['About', 'Services', 'Projects', 'Global Presence', 'Leadership', 'Contact'],
    },
    {
      heading: 'Business',
      links: ['Shipping', 'Trading', 'Mobility'],
    },
    {
      heading: 'Company',
      links: ['About', 'Careers', 'Sustainability', 'Contact'],
    },
  ],
  contact: [
    { label: 'Email', value: 'hello@incworx.example' },
    { label: 'Phone', value: '+00 000 000 0000' },
    { label: 'Address', value: 'Head office address coming soon' },
  ],
  social: ['LinkedIn', 'Instagram', 'YouTube'],
  copyright: '© 2026 INCWORX. All rights reserved.',
  legal: ['Privacy Policy', 'Terms & Conditions'],
};

