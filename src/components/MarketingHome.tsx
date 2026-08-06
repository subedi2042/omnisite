import { useState } from 'react';
import { ArrowRight, Check, Menu, X } from 'lucide-react';

const plans = [
  { name: 'Start', price: 16, description: 'A professional home for a new organization.', features: ['1 published website', 'Custom domain', 'Forms and basic analytics', 'Email support'] },
  { name: 'Grow', price: 39, description: 'For teams ready to book, sell, or expand.', features: ['Bookings or commerce', 'Advanced analytics', 'More collaborators', 'Priority support'], featured: true },
  { name: 'Managed', price: 89, description: 'A done-for-you site with ongoing help.', features: ['Professional initial build', 'Content updates', 'Launch and domain support', 'Named support path'] },
];

const templates = [
  { name: 'Local Authority', type: 'Professional services', color: '#163A5F', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Local Table', type: 'Restaurants', color: '#B84E32', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Faith Community', type: 'Churches', color: '#17243A', image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=85' },
];

const testimonials = [
  { quote: 'We finally have a site our volunteers can update without worrying about breaking the design.', name: 'Maya Thompson', role: 'Community director', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80' },
  { quote: 'The guided setup gave us a credible site quickly, and the everyday editor is genuinely simple.', name: 'Marcus Lee', role: 'Local business owner', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80' },
  { quote: 'Having one team handle the website, domain, and ongoing changes removed a huge burden.', name: 'Sofia Martin', role: 'Nonprofit founder', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=80' },
];

const platformHighlights = [
  ['5', 'Purpose-built starter kits'],
  ['AA', 'Accessibility target'],
  ['1', 'Simple place to manage it'],
  ['Real', 'Human help when needed'],
];

export function MarketingHome({ onStartBuilding }: { onStartBuilding: () => void }) {
  const [annual, setAnnual] = useState(true);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const price = (value: number) => annual ? Math.round(value * .8) : value;

  return (
    <div className="marketing-site">
      <header className="marketing-nav">
        <a className="marketing-logo" href="#top">omnisite<span>.</span></a>
        <nav className={menuOpen ? 'marketing-links is-open' : 'marketing-links'} aria-label="Main navigation">
          {['Features', 'Templates', 'Pricing', 'Managed service'].map(item => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="marketing-nav-actions">
          <button className="marketing-login" type="button">Log in</button>
          <button className="marketing-primary small" onClick={onStartBuilding}>Start building</button>
          <button className="marketing-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="marketing-hero">
          <div className="marketing-eyebrow"><span /> Websites and real human support</div>
          <h1>Your website.<br /><em>Made manageable.</em></h1>
          <p>Build a professional website yourself or let us handle it. OmniSite gives small businesses, churches, and nonprofits the tools—and the help—to stay current.</p>
          <div className="marketing-hero-actions">
            <button className="marketing-primary" onClick={onStartBuilding}>Start building free</button>
            <a className="marketing-secondary" href="#templates">View templates <ArrowRight size={18} /></a>
          </div>
          <span className="marketing-fine-print">No card required · Preview before you commit</span>

          <div className="marketing-browser" aria-label="OmniSite editor preview">
            <div className="marketing-browser-bar"><i /><i /><i /><span>yourorganization.org</span></div>
            <div className="marketing-browser-content">
              <div className="marketing-browser-copy">
                <span>Faith Community</span>
                <h2>A place to belong.</h2>
                <p>Share what matters, welcome newcomers, and keep your community informed.</p>
                <button>Plan your visit</button>
              </div>
              <div className="marketing-edit-card">
                <small>EASY EDIT</small>
                <strong>What would you like to update?</strong>
                {['Service times', 'Announcement', 'Upcoming event'].map(item => <div key={item}>{item}<ArrowRight size={16} /></div>)}
              </div>
            </div>
          </div>

          <div className="marketing-stats" aria-label="Platform highlights">
            {platformHighlights.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="marketing-feature-section" id="features">
          <div className="marketing-section-heading"><span>Everything you need</span><h2>Professional online.<br />Simple behind the scenes.</h2></div>
          <div className="marketing-feature-grid">
            {[
              ['01', 'Start with confidence', 'Choose an industry-ready design with clear structure, responsive layouts, and accessible defaults.'],
              ['02', 'Update without fear', 'Change hours, services, announcements, staff, and events through focused, protected forms.'],
              ['03', 'Get help when needed', 'Use the same platform for self-service or invite our team to build and manage the site with you.'],
            ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="marketing-templates" id="templates">
          <div className="marketing-section-heading left"><span>Starter themes</span><h2>A strong starting point for every organization.</h2></div>
          <div className="marketing-template-tabs">
            {templates.map((template, index) => <button key={template.name} className={activeTemplate === index ? 'active' : ''} onClick={() => setActiveTemplate(index)}>{template.type}</button>)}
          </div>
          <div className="marketing-template-showcase">
            <img src={templates[activeTemplate].image} alt={`${templates[activeTemplate].name} template preview`} />
            <div><span>{templates[activeTemplate].type}</span><h3>{templates[activeTemplate].name}</h3><p>Purposeful hierarchy, generous spacing, and flexible content collections—ready to adapt to your organization.</p><ul>{['Responsive on every screen', 'Easy Edit content controls', 'Accessible, SEO-ready structure'].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul><button onClick={onStartBuilding}>Use this template <ArrowRight size={18} /></button></div>
          </div>
        </section>

        <section className="marketing-testimonials">
          <p className="marketing-trust-label">Built for people who have a business or mission to run</p>
          <div className="marketing-testimonial-grid">
            {testimonials.map(item => <article key={item.name}><div className="marketing-stars">★★★★★</div><blockquote>“{item.quote}”</blockquote><div className="marketing-person"><img src={item.avatar} alt="" /><div><strong>{item.name}</strong><span>{item.role}</span></div></div></article>)}
          </div>
        </section>

        <section className="marketing-pricing" id="pricing">
          <div className="marketing-section-heading"><span>Simple packages</span><h2>Choose software, service, or both.</h2></div>
          <div className="marketing-billing"><span>Monthly</span><button onClick={() => setAnnual(!annual)} className={annual ? 'annual' : ''} aria-label="Toggle annual billing"><i /></button><span>Annual</span>{annual && <b>Save 20%</b>}</div>
          <div className="marketing-plan-grid">
            {plans.map(plan => <article key={plan.name} className={plan.featured ? 'featured' : ''}>{plan.featured && <div className="marketing-popular">Most popular</div>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="marketing-price"><strong>${price(plan.price)}</strong><span>/mo</span></div><ul>{plan.features.map(feature => <li key={feature}><Check size={17} />{feature}</li>)}</ul><button onClick={onStartBuilding}>{plan.name === 'Managed' ? 'Talk to us' : 'Start free'}</button></article>)}
          </div>
          <p className="marketing-pricing-note">Final launch pricing will be confirmed before commercial release.</p>
        </section>

        <section className="marketing-final-cta" id="managed-service">
          <span>Prefer to have it handled?</span>
          <h2>Bring us your vision.<br />We’ll help make it real.</h2>
          <p>Start on your own, or work with a real person for setup, launch, and ongoing care.</p>
          <button onClick={onStartBuilding}>Start your project <ArrowRight size={19} /></button>
        </section>
      </main>

      <footer className="marketing-footer">
        <div><a className="marketing-logo" href="#top">omnisite<span>.</span></a><p>Professional websites and practical help for local organizations.</p></div>
        <div><strong>Product</strong><a href="#features">Features</a><a href="#templates">Templates</a><a href="#pricing">Pricing</a></div>
        <div><strong>Company</strong><a href="#managed-service">Managed service</a><a href="#">About</a><a href="#">Contact</a></div>
        <div><strong>Legal</strong><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></div>
        <small>© 2026 OmniSite. All rights reserved.</small>
      </footer>
    </div>
  );
}
