import { ThemeManifest } from '../types/themeManifest';

export const THEME_MANIFESTS: ThemeManifest[] = [
  {
    id: 'sanctuary_modern',
    name: 'Sanctuary Modern',
    industry: 'Churches and faith communities',
    personality: ['Welcoming', 'Peaceful', 'Established'],
    primaryGoal: 'Plan Your Visit',
    secondaryGoals: ['Watch a message', 'View events', 'Donate'],
    typography: 'Libre Baskerville + Inter',
    colors: {
      primary: '#17243A',   // Deep Navy
      secondary: '#FAF7F1', // Warm Ivory
      accent: '#B68A45',    // Muted Gold
      bg: '#FAF7F1',
      text: '#172033',
      mutedText: '#667085',
      border: '#DDE3E8'
    },
    avoid: 'Religious clip art, crowded announcements, gold used everywhere',
    heroDirection: 'A place to belong.'
  },
  {
    id: 'community_light',
    name: 'Community Light',
    industry: 'Modern and multicultural churches',
    personality: ['Bright', 'Open', 'Hopeful'],
    primaryGoal: 'Join Us Sunday',
    secondaryGoals: ['Groups', 'Livestream', 'Events'],
    typography: 'Manrope + Source Sans 3',
    colors: {
      primary: '#1E293B',   // Midnight
      secondary: '#F8FAFC', // Cloud
      accent: '#3B82F6',    // Sky
      bg: '#F8FAFC',
      text: '#1E293B',
      mutedText: '#64748B',
      border: '#DCEAF7'
    },
    avoid: 'Too many bright colors, SaaS-style cards, oversized gradients',
    heroDirection: 'Faith grows in community.'
  },
  {
    id: 'heritage_grace',
    name: 'Heritage Grace',
    industry: 'Traditional churches and ministries',
    personality: ['Timeless', 'Warm', 'Dignified'],
    primaryGoal: 'Discover Our Church',
    secondaryGoals: ['Worship schedule', 'Outreach', 'Sermons'],
    typography: 'Cormorant Garamond + Lato',
    colors: {
      primary: '#243B2F',   // Forest
      secondary: '#F4EFE3', // Parchment
      accent: '#713A45',    // Burgundy
      bg: '#F4EFE3',
      text: '#2B2B29',
      mutedText: '#713A45',
      border: '#A8844A'
    },
    avoid: 'Faux-vintage textures, script fonts for body text, heavy ornament',
    heroDirection: 'Rooted in faith. Serving today.'
  },
  {
    id: 'local_authority',
    name: 'Local Authority',
    industry: 'Consultants, IT firms, accountants, agencies',
    personality: ['Capable', 'Direct', 'Locally trusted'],
    primaryGoal: 'Book a Consultation',
    secondaryGoals: ['Call office', 'View service area', 'Client proof'],
    typography: 'Manrope + Inter',
    colors: {
      primary: '#163A5F',   // Deep Blue
      secondary: '#F8F7F3', // Warm White
      accent: '#2878B5',    // Signal Blue
      bg: '#F8F7F3',
      text: '#17212B',
      mutedText: '#64707D',
      border: '#DDE3E8'
    },
    avoid: 'Abstract 3D graphics, fake metrics, vague corporate language',
    heroDirection: 'Practical expertise for growing businesses.'
  },
  {
    id: 'trusted_home_pro',
    name: 'Trusted Home Pro',
    industry: 'HVAC, plumbing, electrical, cleaning, landscaping',
    personality: ['Dependable', 'Responsive', 'Straightforward'],
    primaryGoal: 'Request Service',
    secondaryGoals: ['Call now', 'Free estimate', 'Service areas'],
    typography: 'Manrope + Inter',
    colors: {
      primary: '#17324D',   // Service Navy
      secondary: '#F5F7F8', // Light Gray
      accent: '#E8752E',    // Action Orange
      bg: '#F5F7F8',
      text: '#18242F',
      mutedText: '#68737D',
      border: '#DDE3E8'
    },
    avoid: 'Fear tactics, flashing emergency banners, orange on every control',
    heroDirection: 'Reliable service. Done right.'
  },
  {
    id: 'local_table',
    name: 'Local Table',
    industry: 'Restaurants, cafés, bakeries',
    personality: ['Warm', 'Appetizing', 'Lively'],
    primaryGoal: 'View The Menu',
    secondaryGoals: ['Reserve a table', 'Order online', 'Location & hours'],
    typography: 'DM Serif Display + DM Sans',
    colors: {
      primary: '#24211E',   // Charcoal
      secondary: '#FBF5EA', // Cream
      accent: '#B84E32',    // Terracotta
      bg: '#FBF5EA',
      text: '#24211E',
      mutedText: '#756E65',
      border: '#D9D2C2'
    },
    avoid: 'Text over food, slow animation, hidden hours or menu',
    heroDirection: 'Made fresh. Shared together.'
  },
  {
    id: 'modern_merchant',
    name: 'Modern Merchant',
    industry: 'Apparel, gifts, specialty e-commerce',
    personality: ['Distinctive', 'Confident', 'Product-focused'],
    primaryGoal: 'Shop The Collection',
    secondaryGoals: ['Explore catalog', 'Join email list', 'Track order'],
    typography: 'Space Grotesk + Inter',
    colors: {
      primary: '#17191C',   // Ink
      secondary: '#FFFFFF', // Paper
      accent: '#5B5BD6',    // Electric Indigo
      bg: '#F5F5F3',
      text: '#17191C',
      mutedText: '#54595E',
      border: '#DFE1E3'
    },
    avoid: 'Multiple popups, fake scarcity, competing promotional banners',
    heroDirection: 'Everyday pieces, made personal.'
  },
  {
    id: 'calm_wellness',
    name: 'Calm Wellness',
    industry: 'Therapy, wellness, clinics, care services',
    personality: ['Calm', 'Credible', 'Reassuring'],
    primaryGoal: 'Schedule A Visit',
    secondaryGoals: ['Care areas', 'Provider profiles', 'FAQ'],
    typography: 'Fraunces + Source Sans 3',
    colors: {
      primary: '#446B5E',   // Eucalyptus
      secondary: '#F5F0E8', // Soft Sand
      accent: '#B9785D',    // Clay
      bg: '#F5F0E8',
      text: '#173F43',
      mutedText: '#446B5E',
      border: '#D9D7E3'
    },
    avoid: 'Clinical coldness, unsupported health claims, low-contrast pastels',
    heroDirection: 'Care that meets you where you are.'
  }
];
