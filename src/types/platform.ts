export type OrgType = 'church' | 'business' | 'restaurant' | 'homeservice' | 'ecommerce' | 'wellness';

export type EditMode = 'easy' | 'advanced' | 'preview' | 'managed';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type ThemePresetID = 
  | 'sanctuary_modern'
  | 'community_light'
  | 'heritage_grace'
  | 'local_authority'
  | 'trusted_home_pro'
  | 'local_table'
  | 'modern_merchant'
  | 'calm_wellness'
  | 'subedi';

export type FontStack = 
  | 'Libre Baskerville + Inter'
  | 'Manrope + Source Sans 3'
  | 'Cormorant Garamond + Lato'
  | 'Manrope + Inter'
  | 'DM Serif Display + DM Sans'
  | 'Space Grotesk + Inter'
  | 'Fraunces + Source Sans 3'
  | 'Space Grotesk'
  | 'Outfit'
  | 'Plus Jakarta Sans';

export interface ServiceHour {
  id: string;
  label: string;
  days: string;
  note?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'alert' | 'event';
  active: boolean;
  startDate?: string;
  endDate?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  imageUrl: string;
}

export interface ServiceOrProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  featured: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  registrationOpen: boolean;
}

export interface SermonItem {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  videoUrl?: string;
  audioUrl?: string;
}

export interface ThemeTokens {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: FontStack;
  borderRadius: 'sm' | 'md' | 'lg' | 'full';
  darkMode: boolean;
  themePreset: ThemePresetID;
}

export interface PageSection {
  id: string;
  type: 'hero' | 'hours_times' | 'announcements' | 'services_products' | 'events' | 'sermons' | 'staff' | 'give_donate' | 'booking' | 'contact_form';
  title: string;
  subtitle?: string;
  visible: boolean;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  sections: PageSection[];
}

export interface CanvasElement {
  id: string;
  pageId: string;
  kind: 'text' | 'rectangle' | 'circle' | 'line';
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  align: 'left' | 'center' | 'right';
}

export interface SiteData {
  id: string;
  orgName: string;
  orgType: OrgType;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  customDomain: string;
  published: boolean;
  lastPublishedAt?: string;
  
  // Design Tokens
  theme: ThemeTokens;
  
  // Collections
  hours: ServiceHour[];
  announcements: Announcement[];
  staff: StaffMember[];
  services: ServiceOrProduct[];
  events: EventItem[];
  sermons: SermonItem[];
  
  // Pages
  pages: Page[];
  canvasElements?: CanvasElement[];
}

export interface Revision {
  id: string;
  version: number;
  timestamp: string;
  author: string;
  summary: string;
  snapshot: SiteData;
}

export interface ManagedStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'pending';
  deliverable?: string;
}

export interface PreLaunchCheck {
  id: string;
  category: 'SEO' | 'Accessibility' | 'Content' | 'Payments/Forms';
  title: string;
  passed: boolean;
  detail: string;
}
