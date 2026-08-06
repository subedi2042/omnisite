import { SiteData, ThemePresetID } from '../types/platform';
import { THEME_MANIFESTS } from './themesManifest';

export function getSiteDataForTheme(themeId: ThemePresetID): SiteData {
  const manifest = THEME_MANIFESTS.find(m => m.id === themeId) || THEME_MANIFESTS[0];

  switch (themeId) {
    case 'sanctuary_modern':
      return {
        id: 'site-sanctuary',
        orgName: 'Sanctuary Grace Community',
        orgType: 'church',
        tagline: 'A Place to Belong · Loving God, Serving People',
        address: '450 Highland Avenue, Seattle, WA 98109',
        phone: '(206) 555-0192',
        email: 'hello@sanctuarygrace.org',
        customDomain: 'sanctuarygrace.org',
        published: true,
        lastPublishedAt: '2026-08-05 14:30 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'md',
          darkMode: false,
          themePreset: 'sanctuary_modern'
        },
        hours: [
          { id: 'h1', label: 'Sunday Worship Service', days: 'Sundays at 9:00 AM & 11:00 AM', note: 'Childcare provided' },
          { id: 'h2', label: 'Midweek Prayer', days: 'Wednesdays at 7:00 PM', note: 'In Fellowship Hall' }
        ],
        announcements: [
          { id: 'a1', title: 'Summer Outdoor Baptism & Picnic', content: 'Join us at Lakeview Park this Sunday at 1 PM.', type: 'event', active: true }
        ],
        staff: [
          { id: 's1', name: 'Pastor David Miller', role: 'Lead Pastor', bio: 'Serving with a passion for biblical teaching.', email: 'david@sanctuarygrace.org', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' }
        ],
        services: [
          { id: 'm1', title: 'Grace Kids Ministry', description: 'Gospel-centered fun for children every Sunday.', price: 'Free', category: 'Ministry', imageUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [
          { id: 'e1', title: 'Family Marriage Retreat', date: 'Sept 18-20, 2026', time: '6 PM - 12 PM', location: 'Cascade Mountain Lodge', description: 'Refreshing weekend for couples.', category: 'Retreat', registrationOpen: true }
        ],
        sermons: [
          { id: 'sr1', title: 'Walking in Unshakable Hope', speaker: 'Pastor David Miller', date: 'Aug 2, 2026', series: 'Hebrews 6-10' }
        ],
        pages: [
          {
            id: 'p1', title: 'Home', slug: '/', seoTitle: 'Sanctuary Grace Community | Seattle, WA', seoDescription: 'Join us Sundays for worship.',
            sections: [
              { id: 'sec-1', type: 'hero', title: 'A Place to Belong', subtitle: 'Welcome home to Sanctuary Grace.', visible: true },
              { id: 'sec-2', type: 'hours_times', title: 'Worship Service Times', visible: true },
              { id: 'sec-3', type: 'announcements', title: 'Church Announcements', visible: true },
              { id: 'sec-4', type: 'services_products', title: 'Ministries & Programs', visible: true },
              { id: 'sec-5', type: 'give_donate', title: 'Support Our Ministry', visible: true },
              { id: 'sec-6', type: 'contact_form', title: 'Plan Your Visit & Contact Us', visible: true }
            ]
          }
        ]
      };

    case 'community_light':
      return {
        id: 'site-community-light',
        orgName: 'Horizon Community Church',
        orgType: 'church',
        tagline: 'Faith Grows in Community · Bright, Open & Hopeful',
        address: '880 Skyline Blvd, Austin, TX 78701',
        phone: '(512) 555-0144',
        email: 'info@horizonchurch.org',
        customDomain: 'horizonchurch.org',
        published: true,
        lastPublishedAt: '2026-08-04 10:00 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'lg',
          darkMode: false,
          themePreset: 'community_light'
        },
        hours: [
          { id: 'h1', label: 'Sunday Gathering', days: 'Sundays at 10:00 AM', note: 'In-person & Livestream' }
        ],
        announcements: [
          { id: 'a1', title: 'New Small Groups Launching Next Week', content: 'Sign up in the lobby after Sunday service.', type: 'info', active: true }
        ],
        staff: [
          { id: 's1', name: 'Pastor Maya Lin', role: 'Community Lead', bio: 'Fostering inclusive, hopeful worship.', email: 'maya@horizonchurch.org', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
        ],
        services: [
          { id: 'm1', title: 'Youth & Young Adult Collective', description: 'Weekly gatherings for teens and young adults.', price: 'Free', category: 'Community', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [],
        sermons: [],
        pages: [
          {
            id: 'p1', title: 'Home', slug: '/', seoTitle: 'Horizon Community Church | Austin, TX', seoDescription: 'Faith grows in community.',
            sections: [
              { id: 'sec-1', type: 'hero', title: 'Faith Grows in Community', subtitle: 'Join us every Sunday morning at 10 AM.', visible: true },
              { id: 'sec-2', type: 'hours_times', title: 'Sunday Gathering Times', visible: true },
              { id: 'sec-3', type: 'services_products', title: 'Connect Groups & Youth', visible: true },
              { id: 'sec-4', type: 'contact_form', title: 'Get Connected', visible: true }
            ]
          }
        ]
      };

    case 'local_authority':
      return {
        id: 'site-local-authority',
        orgName: 'Apex Advisory & IT Partners',
        orgType: 'business',
        tagline: 'Practical Expertise for Growing Businesses',
        address: '500 Commerce Way, Suite 400, Chicago, IL 60601',
        phone: '(312) 555-8290',
        email: 'consulting@apexadvisory.com',
        customDomain: 'apexadvisory.com',
        published: true,
        lastPublishedAt: '2026-08-04 18:00 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'md',
          darkMode: false,
          themePreset: 'local_authority'
        },
        hours: [
          { id: 'bh1', label: 'Office Consultation Hours', days: 'Mon - Fri: 8:30 AM - 5:30 PM', note: 'Appointments recommended' }
        ],
        announcements: [],
        staff: [
          { id: 'bs1', name: 'Marcus Sterling', role: 'Managing Partner', bio: '20+ years guiding IT infrastructure and finance automation.', email: 'marcus@apexadvisory.com', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' }
        ],
        services: [
          { id: 'bsv1', title: 'Strategic IT & Security Audit', description: 'Comprehensive cyber readiness, network architecture, and cloud assessment.', price: 'Custom Quote', category: 'IT Leadership', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80', featured: true },
          { id: 'bsv2', title: 'Fractional CFO & Tax Planning', description: 'Quarterly financial strategy and cash flow optimization.', price: 'Monthly Retainer', category: 'Finance Advisory', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [],
        sermons: [],
        pages: [
          {
            id: 'bp1', title: 'Home', slug: '/', seoTitle: 'Apex Advisory & IT Partners | Chicago, IL', seoDescription: 'Practical business expertise.',
            sections: [
              { id: 'bsec-1', type: 'hero', title: 'Practical Expertise for Growing Businesses', subtitle: 'Trusted advisory, IT security, and accounting leadership.', visible: true },
              { id: 'bsec-2', type: 'services_products', title: 'Our Core Practice Areas', visible: true },
              { id: 'bsec-3', type: 'hours_times', title: 'Consultation Hours & Location', visible: true },
              { id: 'bsec-4', type: 'staff', title: 'Leadership Team', visible: true },
              { id: 'bsec-5', type: 'contact_form', title: 'Book a Strategy Consultation', visible: true }
            ]
          }
        ]
      };

    case 'trusted_home_pro':
      return {
        id: 'site-trusted-home-pro',
        orgName: 'Vance Heating, Air & Plumbing',
        orgType: 'homeservice',
        tagline: 'Reliable Service. Done Right.',
        address: '1400 Industrial Way, Denver, CO 80216',
        phone: '(303) 555-4392',
        email: 'service@vancehomepro.com',
        customDomain: 'vancehomepro.com',
        published: true,
        lastPublishedAt: '2026-08-03 12:00 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'md',
          darkMode: false,
          themePreset: 'trusted_home_pro'
        },
        hours: [
          { id: 'h1', label: 'Dispatcher & Service Hours', days: 'Mon - Sat: 7:00 AM - 7:00 PM', note: '24/7 Emergency dispatch available' }
        ],
        announcements: [
          { id: 'a1', title: '$50 Off Full Furnace Tune-Up', content: 'Special promotion for early autumn inspections. Mention "FALL50".', type: 'alert', active: true }
        ],
        staff: [
          { id: 's1', name: 'Bob Vance', role: 'Master HVAC Technician', bio: '25+ years servicing residential heating and cooling systems.', email: 'bob@vancehomepro.com', imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80' }
        ],
        services: [
          { id: 'sv1', title: 'Full A/C & Heating Overhaul', description: 'Complete system tune-up, duct inspection, filter replacement, and safety check.', price: 'From $149', category: 'HVAC', imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&q=80', featured: true },
          { id: 'sv2', title: 'Tankless Water Heater Installation', description: 'High-efficiency continuous hot water installation with 10-year warranty.', price: 'From $899', category: 'Plumbing', imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [],
        sermons: [],
        pages: [
          {
            id: 'p1', title: 'Home', slug: '/', seoTitle: 'Vance Heating, Air & Plumbing | Denver, CO', seoDescription: 'Reliable service done right.',
            sections: [
              { id: 'sec-1', type: 'hero', title: 'Reliable Home Service. Done Right.', subtitle: 'Denver’s trusted licensed HVAC technicians and plumbers.', visible: true },
              { id: 'sec-2', type: 'announcements', title: 'Seasonal Specials', visible: true },
              { id: 'sec-3', type: 'services_products', title: 'Repair & Installation Services', visible: true },
              { id: 'sec-4', type: 'hours_times', title: 'Dispatch Hours', visible: true },
              { id: 'sec-5', type: 'contact_form', title: 'Request Service or Estimate', visible: true }
            ]
          }
        ]
      };

    case 'local_table':
      return {
        id: 'site-local-table',
        orgName: 'The Rustic Table Bakery & Bistro',
        orgType: 'restaurant',
        tagline: 'Made Fresh. Shared Together.',
        address: '742 Maple Street, Portland, OR 97201',
        phone: '(503) 555-9120',
        email: 'dine@rustictablepdx.com',
        customDomain: 'rustictablepdx.com',
        published: true,
        lastPublishedAt: '2026-08-05 16:00 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'lg',
          darkMode: false,
          themePreset: 'local_table'
        },
        hours: [
          { id: 'h1', label: 'Bakery & Breakfast', days: 'Tue - Sun: 7:00 AM - 2:00 PM', note: 'Fresh sourdough baked daily' },
          { id: 'h2', label: 'Bistro Dinner Service', days: 'Thu - Sat: 5:00 PM - 10:00 PM', note: 'Reservations encouraged' }
        ],
        announcements: [
          { id: 'a1', title: 'Weekend Chef Specials Announced!', content: 'Featuring wood-fired wild salmon & peach tart.', type: 'info', active: true }
        ],
        staff: [],
        services: [
          { id: 'm1', title: 'Artisan Sourdough Loaf', description: 'Naturally fermented 36-hour wild yeast sourdough.', price: '$9.50', category: 'Bakery', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80', featured: true },
          { id: 'm2', title: 'Wood-Fired Wild Salmon', description: 'Pan-seared salmon with roasted asparagus and lemon herb butter.', price: '$28.00', category: 'Dinner Menu', imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [],
        sermons: [],
        pages: [
          {
            id: 'p1', title: 'Home', slug: '/', seoTitle: 'The Rustic Table Bakery & Bistro | Portland, OR', seoDescription: 'Made fresh, shared together.',
            sections: [
              { id: 'sec-1', type: 'hero', title: 'Made Fresh. Shared Together.', subtitle: 'Artisan bakery & seasonal bistro in downtown Portland.', visible: true },
              { id: 'sec-2', type: 'announcements', title: 'Chef Specials', visible: true },
              { id: 'sec-3', type: 'services_products', title: 'Featured Menu Highlights', visible: true },
              { id: 'sec-4', type: 'hours_times', title: 'Dining Hours & Location', visible: true },
              { id: 'sec-5', type: 'contact_form', title: 'Reserve a Table or Inquire', visible: true }
            ]
          }
        ]
      };

    case 'modern_merchant':
      return {
        id: 'site-modern-merchant',
        orgName: 'Atelier Goods & Apparel',
        orgType: 'ecommerce',
        tagline: 'Everyday Pieces, Made Personal.',
        address: '108 Mercer Street, New York, NY 10012',
        phone: '(212) 555-0812',
        email: 'care@ateliergoods.com',
        customDomain: 'ateliergoods.com',
        published: true,
        lastPublishedAt: '2026-08-04 20:00 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'full',
          darkMode: false,
          themePreset: 'modern_merchant'
        },
        hours: [
          { id: 'h1', label: 'Flagship Showroom Hours', days: 'Mon - Sat: 11:00 AM - 7:00 PM', note: 'Online ordering 24/7 with fast shipping' }
        ],
        announcements: [
          { id: 'a1', title: 'Autumn Capsule Collection Released', content: 'Free worldwide express shipping on orders over $150.', type: 'info', active: true }
        ],
        staff: [],
        services: [
          { id: 'p1', title: 'Organic Heavyweight Linen Shirt', description: 'Tailored 100% organic French flax linen shirt in oat.', price: '$128.00', category: 'Apparel', imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80', featured: true },
          { id: 'p2', title: 'Minimalist Leather Carryall Bag', description: 'Handcrafted vegetable-tanned Italian leather tote.', price: '$245.00', category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [],
        sermons: [],
        pages: [
          {
            id: 'p1', title: 'Home', slug: '/', seoTitle: 'Atelier Goods & Apparel | Specialty E-Commerce', seoDescription: 'Everyday pieces, made personal.',
            sections: [
              { id: 'sec-1', type: 'hero', title: 'Everyday Pieces, Made Personal.', subtitle: 'Sustainable apparel and handcrafted leather goods.', visible: true },
              { id: 'sec-2', type: 'services_products', title: 'Featured Collection', visible: true },
              { id: 'sec-3', type: 'hours_times', title: 'Showroom Hours & Shipping', visible: true },
              { id: 'sec-4', type: 'contact_form', title: 'Customer Care & Inquiries', visible: true }
            ]
          }
        ]
      };

    case 'calm_wellness':
      return {
        id: 'site-calm-wellness',
        orgName: 'Eucalyptus Mind & Body Sanctuary',
        orgType: 'wellness',
        tagline: 'Care That Meets You Where You Are.',
        address: '320 Eucalyptus Lane, Santa Barbara, CA 93101',
        phone: '(805) 555-7310',
        email: 'welcome@eucalyptuswellness.com',
        customDomain: 'eucalyptuswellness.com',
        published: true,
        lastPublishedAt: '2026-08-03 14:00 UTC',
        theme: {
          primaryColor: manifest.colors.primary,
          accentColor: manifest.colors.accent,
          backgroundColor: manifest.colors.bg,
          textColor: manifest.colors.text,
          fontFamily: manifest.typography,
          borderRadius: 'lg',
          darkMode: false,
          themePreset: 'calm_wellness'
        },
        hours: [
          { id: 'h1', label: 'Sanctuary Appointments', days: 'Mon - Fri: 8:00 AM - 6:00 PM', note: 'Virtual & In-person sessions available' }
        ],
        announcements: [],
        staff: [
          { id: 's1', name: 'Dr. Elena Rostova', role: 'Licensed Holistic Therapist', bio: 'Specializing in mindfulness-based stress reduction and gentle therapy.', email: 'elena@eucalyptuswellness.com', imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80' }
        ],
        services: [
          { id: 'v1', title: 'Individual Mindfulness & Therapy Session', description: '50-minute gentle, confidential session focused on wellness goals.', price: '$165', category: 'Therapy', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80', featured: true }
        ],
        events: [],
        sermons: [],
        pages: [
          {
            id: 'p1', title: 'Home', slug: '/', seoTitle: 'Eucalyptus Mind & Body | Santa Barbara, CA', seoDescription: 'Care that meets you where you are.',
            sections: [
              { id: 'sec-1', type: 'hero', title: 'Care That Meets You Where You Are.', subtitle: 'Compassionate therapy, wellness retreats, and bodywork.', visible: true },
              { id: 'sec-2', type: 'services_products', title: 'Care Services & Sessions', visible: true },
              { id: 'sec-3', type: 'hours_times', title: 'Sanctuary Hours', visible: true },
              { id: 'sec-4', type: 'staff', title: 'Our Practitioner Team', visible: true },
              { id: 'sec-5', type: 'contact_form', title: 'Schedule a Consultation Visit', visible: true }
            ]
          }
        ]
      };

    default:
      return getSiteDataForTheme('sanctuary_modern');
  }
}
