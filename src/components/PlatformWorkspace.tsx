import { useMemo, useState } from 'react';
import {
  Activity, ArrowLeft, ArrowRight, CalendarDays, Check, ChevronDown,
  HelpCircle, Clock3, FileText, Globe2, HandHeart, LayoutDashboard,
  Menu, MessageSquareText, Monitor, MoreHorizontal, Paintbrush, PanelLeftClose,
  Rocket, Search, Settings, ShoppingBag, Sparkles, Users, X
} from 'lucide-react';
import { getSiteDataForTheme } from '../data/themeDataFactory';
import { SiteData } from '../types/platform';

type WorkspaceView = 'home' | 'easy' | 'advanced' | 'project' | 'analytics' | 'settings';
type EasyTask = 'identity' | 'hours' | 'announcement' | 'contact';

const primaryNavigation = [
  { id: 'home' as const, label: 'Home', icon: LayoutDashboard },
  { id: 'easy' as const, label: 'Easy Edit', icon: Sparkles },
  { id: 'advanced' as const, label: 'Website', icon: Globe2 },
  { id: 'project' as const, label: 'Project', icon: MessageSquareText },
  { id: 'analytics' as const, label: 'Analytics', icon: Activity },
];

const stagedModules = [
  { label: 'Sell', icon: ShoppingBag, note: 'Stage 2' },
  { label: 'Appointments', icon: Clock3, note: 'Stage 2' },
  { label: 'Events', icon: CalendarDays, note: 'Stage 2' },
  { label: 'Giving', icon: HandHeart, note: 'Stage 2' },
  { label: 'People', icon: Users, note: 'Stage 3' },
];

const quickTasks: Array<{ id: EasyTask; title: string; detail: string; icon: typeof Sparkles }> = [
  { id: 'identity', title: 'Site name and welcome', detail: 'Update your organization name, tagline, and homepage message.', icon: FileText },
  { id: 'hours', title: 'Service times and hours', detail: 'Keep weekly hours and gathering times accurate everywhere.', icon: Clock3 },
  { id: 'announcement', title: 'Announcement', detail: 'Post a timely message without changing the page layout.', icon: MessageSquareText },
  { id: 'contact', title: 'Contact information', detail: 'Update the address, phone number, and public email.', icon: Users },
];

export function PlatformWorkspace({ onBackToMarketing }: { onBackToMarketing: () => void }) {
  const [view, setView] = useState<WorkspaceView>('home');
  const [site, setSite] = useState<SiteData>(() => getSiteDataForTheme('sanctuary_modern'));
  const [draftSite, setDraftSite] = useState<SiteData>(() => getSiteDataForTheme('sanctuary_modern'));
  const [activeTask, setActiveTask] = useState<EasyTask>('identity');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [publishedAt, setPublishedAt] = useState('Today at 10:42 AM');
  const [notice, setNotice] = useState<string | null>(null);

  const hasChanges = useMemo(() => JSON.stringify(site) !== JSON.stringify(draftSite), [site, draftSite]);
  const flash = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(null), 2200); };

  const publish = () => {
    setSite(JSON.parse(JSON.stringify(draftSite)));
    const stamp = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setPublishedAt(`Today at ${stamp}`);
    flash('Published successfully. Your live site is current.');
  };

  const goTo = (next: WorkspaceView) => { setView(next); setSidebarOpen(false); };

  return (
    <div className="platform-app">
      <aside className={sidebarOpen ? 'platform-sidebar is-open' : 'platform-sidebar'}>
        <div className="platform-brand-row">
          <button className="platform-brand" onClick={onBackToMarketing}>omnisite<span>.</span></button>
          <button className="platform-close-nav" onClick={() => setSidebarOpen(false)} aria-label="Close navigation"><X size={20} /></button>
        </div>
        <button className="platform-site-switcher"><span className="platform-site-mark">S</span><span><strong>Sanctuary Grace</strong><small>Website workspace</small></span><ChevronDown size={16} /></button>

        <nav className="platform-navigation" aria-label="Workspace navigation">
          <p>Workspace</p>
          {primaryNavigation.map(item => <button key={item.id} className={view === item.id ? 'active' : ''} onClick={() => goTo(item.id)}><item.icon size={18} /><span>{item.label}</span>{item.id === 'project' && <i>2</i>}</button>)}
          <p>Coming in the launch family</p>
          {stagedModules.map(item => <button key={item.label} className="staged" title={`${item.label} is planned for ${item.note}`}><item.icon size={18} /><span>{item.label}</span><small>{item.note}</small></button>)}
        </nav>
        <div className="platform-sidebar-bottom">
          <button className={view === 'settings' ? 'active' : ''} onClick={() => goTo('settings')}><Settings size={18} />Settings</button>
          <button><HelpCircle size={18} />Help and support</button>
          <div className="platform-user"><span>DS</span><div><strong>Dipendra Subedi</strong><small>Tenant owner</small></div><MoreHorizontal size={17} /></div>
        </div>
      </aside>

      <div className="platform-main">
        <header className="platform-topbar">
          <button className="platform-mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open navigation"><Menu size={21} /></button>
          <div><span className="platform-live-dot" />Site is live <small>· {publishedAt}</small></div>
          <div className="platform-top-actions">
            <button className="platform-help"><HelpCircle size={17} />Ask for help</button>
            <button className="platform-preview" onClick={() => goTo('advanced')}><Monitor size={17} />Preview</button>
            <button className="platform-publish" onClick={publish} disabled={!hasChanges}><Rocket size={17} />{hasChanges ? 'Review & publish' : 'Published'}</button>
          </div>
        </header>

        {notice && <div className="platform-toast"><Check size={17} />{notice}</div>}
        {view === 'home' && <Dashboard onNavigate={goTo} publishedAt={publishedAt} />}
        {view === 'easy' && <EasyEdit site={draftSite} setSite={setDraftSite} task={activeTask} setTask={setActiveTask} />}
        {view === 'advanced' && <WebsiteEditor site={draftSite} setSite={setDraftSite} />}
        {view === 'project' && <ProjectWorkspace />}
        {view === 'analytics' && <AnalyticsWorkspace />}
        {view === 'settings' && <SettingsWorkspace site={draftSite} setSite={setDraftSite} />}
      </div>
      {sidebarOpen && <button className="platform-scrim" onClick={() => setSidebarOpen(false)} aria-label="Close navigation" />}
    </div>
  );
}

function Dashboard({ onNavigate, publishedAt }: { onNavigate: (view: WorkspaceView) => void; publishedAt: string }) {
  return <main className="platform-page platform-dashboard">
    <div className="platform-page-heading"><div><span>Thursday, August 6</span><h1>Good afternoon, Dipendra.</h1><p>Your website is live and healthy. Here’s what deserves your attention.</p></div><button onClick={() => onNavigate('easy')}><Sparkles size={18} />Update my site</button></div>
    <section className="platform-health-card">
      <div className="platform-health-copy"><span className="platform-status-icon"><Check size={21} /></span><div><small>Website status</small><h2>Everything is working</h2><p>Domain, publishing, forms, and accessibility basics passed their latest checks.</p></div></div>
      <div className="platform-health-meta"><span><strong>sanctuarygrace.org</strong><small>Connected domain</small></span><span><strong>{publishedAt}</strong><small>Last published</small></span><button onClick={() => onNavigate('advanced')}>Open website <ArrowRight size={16} /></button></div>
    </section>
    <div className="platform-dashboard-grid">
      <section className="platform-card platform-launch-card"><div className="platform-card-heading"><div><span>Launch progress</span><h2>Your foundation is ready</h2></div><strong>82%</strong></div><div className="platform-progress"><i /></div>{[['Add your privacy policy', false], ['Confirm contact form routing', true], ['Connect your custom domain', true], ['Complete Easy Edit handoff', false]].map(([label, done]) => <div className="platform-check-row" key={String(label)}><span className={done ? 'done' : ''}>{done && <Check size={13} />}</span><p>{label}</p>{!done && <ArrowRight size={15} />}</div>)}</section>
      <section className="platform-card"><div className="platform-card-heading"><div><span>Recent activity</span><h2>What changed</h2></div><button>View all</button></div>{[['Homepage announcement updated', 'You · 18 minutes ago'], ['Release 7 published', 'You · Today at 10:42 AM'], ['Designer left 2 review notes', 'OmniSite team · Yesterday']].map(([title, meta]) => <div className="platform-activity" key={title}><i /><div><strong>{title}</strong><small>{meta}</small></div></div>)}</section>
    </div>
    <section className="platform-quick-section"><div className="platform-card-heading"><div><span>Common updates</span><h2>What would you like to change?</h2></div><button onClick={() => onNavigate('easy')}>See all updates <ArrowRight size={15} /></button></div><div className="platform-quick-grid">{quickTasks.map(task => <button key={task.id} onClick={() => onNavigate('easy')}><task.icon size={21} /><strong>{task.title}</strong><span>{task.detail}</span><ArrowRight size={16} /></button>)}</div></section>
  </main>;
}

function EasyEdit({ site, setSite, task, setTask }: { site: SiteData; setSite: (site: SiteData) => void; task: EasyTask; setTask: (task: EasyTask) => void }) {
  const update = (field: keyof SiteData, value: string) => setSite({ ...site, [field]: value });
  return <main className="platform-page editor-page">
    <div className="platform-page-heading"><div><span>Easy Edit</span><h1>Update your site safely.</h1><p>Choose a familiar task. Layout, mobile behavior, and brand styles stay protected.</p></div><div className="platform-saved"><Check size={15} />Draft saved</div></div>
    <div className="easy-layout">
      <aside className="easy-task-list"><label><Search size={16} /><input placeholder="Search updates" /></label>{quickTasks.map(item => <button key={item.id} className={task === item.id ? 'active' : ''} onClick={() => setTask(item.id)}><item.icon size={18} /><span><strong>{item.title}</strong><small>{item.detail}</small></span><ArrowRight size={15} /></button>)}</aside>
      <section className="easy-form-panel">
        <button className="easy-back" onClick={() => setTask('identity')}><ArrowLeft size={15} />Easy Edit</button>
        {task === 'identity' && <><span className="platform-kicker">Homepage identity</span><h2>Site name and welcome</h2><p>These fields appear in the homepage hero and browser title.</p><FormField label="Organization name" value={site.orgName} onChange={value => update('orgName', value)} limit="60 characters" /><FormField label="Tagline" value={site.tagline} onChange={value => update('tagline', value)} multiline limit="140 characters" /></>}
        {task === 'hours' && <><span className="platform-kicker">Reusable collection</span><h2>Service times and hours</h2><p>Update once and every page using these times will stay in sync.</p>{site.hours.map((hour, index) => <div className="easy-collection-card" key={hour.id}><div><strong>{index + 1}</strong><span>Schedule entry</span></div><FormField label="Label" value={hour.label} onChange={value => setSite({ ...site, hours: site.hours.map(item => item.id === hour.id ? { ...item, label: value } : item) })} /><FormField label="When" value={hour.days} onChange={value => setSite({ ...site, hours: site.hours.map(item => item.id === hour.id ? { ...item, days: value } : item) })} /></div>)}</>}
        {task === 'announcement' && <><span className="platform-kicker">Time-sensitive update</span><h2>Homepage announcement</h2><p>The active message appears below service times and can be removed without changing the layout.</p>{site.announcements.slice(0, 1).map(item => <div key={item.id}><FormField label="Headline" value={item.title} onChange={value => setSite({ ...site, announcements: site.announcements.map(a => a.id === item.id ? { ...a, title: value } : a) })} /><FormField label="Message" value={item.content} onChange={value => setSite({ ...site, announcements: site.announcements.map(a => a.id === item.id ? { ...a, content: value } : a) })} multiline /></div>)}</>}
        {task === 'contact' && <><span className="platform-kicker">Organization information</span><h2>Contact information</h2><p>This shared information appears in the contact section and footer.</p><FormField label="Address" value={site.address} onChange={value => update('address', value)} /><div className="easy-two-col"><FormField label="Phone" value={site.phone} onChange={value => update('phone', value)} /><FormField label="Public email" value={site.email} onChange={value => update('email', value)} /></div></>}
      </section>
      <SiteMiniPreview site={site} />
    </div>
  </main>;
}

function FormField({ label, value, onChange, multiline, limit }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean; limit?: string }) {
  return <label className="easy-field"><span>{label}{limit && <small>{limit}</small>}</span>{multiline ? <textarea value={value} onChange={event => onChange(event.target.value)} /> : <input value={value} onChange={event => onChange(event.target.value)} />}</label>;
}

function SiteMiniPreview({ site }: { site: SiteData }) {
  return <aside className="site-mini-preview"><div className="mini-preview-bar"><span><i /><i /><i /></span><strong>Desktop preview</strong><button><MoreHorizontal size={16} /></button></div><div className="mini-site"><header><b>{site.orgName}</b><nav>About&nbsp;&nbsp; Ministries&nbsp;&nbsp; Contact</nav><button>Plan a visit</button></header><main><span>Welcome to our community</span><h2>{site.tagline || 'A place to belong.'}</h2><p>Come as you are. There is a place for you here.</p><button>Plan your visit</button><section><small>THIS WEEK</small><h3>{site.hours[0]?.label}</h3><p>{site.hours[0]?.days}</p></section></main></div></aside>;
}

function WebsiteEditor({ site, setSite }: { site: SiteData; setSite: (site: SiteData) => void }) {
  return <main className="platform-page editor-page"><div className="platform-page-heading"><div><span>Website</span><h1>Structure and design.</h1><p>Advanced controls are separate from routine customer updates.</p></div><div className="platform-saved"><Check size={15} />Draft saved</div></div><div className="advanced-layout"><aside className="advanced-panel"><div className="advanced-tabs"><button className="active"><FileText size={16} />Pages</button><button><Paintbrush size={16} />Design</button></div><button className="advanced-add">+ Add page</button>{site.pages.map((page, index) => <button className={index === 0 ? 'advanced-page active' : 'advanced-page'} key={page.id}><span><strong>{page.title}</strong><small>/{page.slug}</small></span><MoreHorizontal size={16} /></button>)}<div className="advanced-theme"><span>Theme</span><strong>Faith Community</strong><div><i style={{ background: site.theme.primaryColor }} /><i style={{ background: site.theme.accentColor }} /><i style={{ background: site.theme.backgroundColor }} /></div><label>Accent color<input type="color" value={site.theme.accentColor} onChange={event => setSite({ ...site, theme: { ...site.theme, accentColor: event.target.value } })} /></label></div></aside><div className="advanced-canvas"><div className="advanced-canvas-tools"><button><Monitor size={16} />Desktop</button><span>Home page · Draft</span><button><PanelLeftClose size={16} />Hide controls</button></div><SiteMiniPreview site={site} /></div></div></main>;
}

function ProjectWorkspace() { return <main className="platform-page"><div className="platform-page-heading"><div><span>Managed service</span><h1>Your website project.</h1><p>Review progress, provide feedback, and keep ownership clear.</p></div><button className="heading-action">Share review link</button></div><div className="project-grid"><section className="platform-card"><div className="platform-card-heading"><div><span>Project plan</span><h2>Launch milestones</h2></div><strong>3 of 5</strong></div>{[['Intake and assets', 'Complete'], ['Theme and first draft', 'Complete'], ['Your review and feedback', 'In review'], ['Domain and launch checks', 'Next'], ['Easy Edit handoff', 'Upcoming']].map(([title, status], index) => <div className="project-step" key={title}><span className={index < 2 ? 'done' : index === 2 ? 'current' : ''}>{index < 2 ? <Check size={14} /> : index + 1}</span><div><strong>{title}</strong><small>{status}</small></div>{index === 2 && <button>Open review</button>}</div>)}</section><section className="platform-card"><div className="platform-card-heading"><div><span>Review thread</span><h2>2 open comments</h2></div></div><div className="review-message"><strong>OmniSite design team <small>Yesterday</small></strong><p>The homepage direction is ready. Please check the service times and contact information.</p></div><div className="review-message client"><strong>You <small>Today</small></strong><p>The theme looks right. Please keep all customer tools this clean and light.</p></div><textarea placeholder="Add a comment for the project team" /><button className="heading-action">Send comment</button></section></div></main>; }

function AnalyticsWorkspace() { return <main className="platform-page"><div className="platform-page-heading"><div><span>Analytics</span><h1>A clear view of your website.</h1><p>Privacy-conscious reporting focused on useful customer actions.</p></div><button className="heading-action">Last 30 days <ChevronDown size={15} /></button></div><div className="analytics-grid">{[['1,284', 'Site visits', '+18%'], ['42', 'Contact actions', '+9%'], ['3m 12s', 'Average visit', '+24s'], ['67%', 'Mobile visitors', 'Stable']].map(([value, label, change]) => <section className="platform-card" key={label}><span>{label}</span><strong>{value}</strong><small>{change}</small></section>)}</div><section className="platform-card analytics-chart"><div className="platform-card-heading"><div><span>Traffic</span><h2>Visits over time</h2></div></div><div className="chart-bars">{[38,54,46,72,63,80,68,92,70,86,78,98].map((height,index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>Jul 8</span><span>Jul 15</span><span>Jul 22</span><span>Aug 6</span></div></section></main>; }

function SettingsWorkspace({ site, setSite }: { site: SiteData; setSite: (site: SiteData) => void }) { return <main className="platform-page"><div className="platform-page-heading"><div><span>Settings</span><h1>Organization and website.</h1><p>High-impact settings remain separate from everyday editing.</p></div></div><div className="settings-layout"><nav>{['Organization', 'Domain', 'Users and roles', 'Billing', 'Integrations', 'Privacy and data', 'Audit log'].map((item,index) => <button className={index === 0 ? 'active' : ''} key={item}>{item}<ArrowRight size={15} /></button>)}</nav><section className="platform-card settings-form"><span className="platform-kicker">Organization</span><h2>Organization profile</h2><p>Used across the admin area and customer-facing system messages.</p><FormField label="Organization name" value={site.orgName} onChange={value => setSite({ ...site, orgName: value })} /><FormField label="Custom domain" value={site.customDomain} onChange={value => setSite({ ...site, customDomain: value })} /><button className="heading-action">Save settings</button></section></div></main>; }
