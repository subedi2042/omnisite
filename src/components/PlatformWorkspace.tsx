import { useEffect, useMemo, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import {
  Activity,
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowRight,
  Bold,
  CalendarDays,
  Check,
  ChevronDown,
  HelpCircle,
  Clock3,
  FileText,
  Globe2,
  HandHeart,
  LayoutDashboard,
  Circle,
  DollarSign,
  Italic,
  Menu,
  MessageSquareText,
  Minus,
  Monitor,
  Move,
  MoreHorizontal,
  PackageCheck,
  Paintbrush,
  PanelLeftClose,
  Plus,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Square,
  Trash2,
  Type,
  Users,
  X,
} from "lucide-react";
import { getSiteDataForTheme } from "../data/themeDataFactory";
import { THEME_MANIFESTS } from "../data/themesManifest";
import {
  CanvasElement,
  Page,
  PageSection,
  SiteData,
  ThemePresetID,
  ViewportMode,
} from "../types/platform";

type WorkspaceView =
  | "home"
  | "easy"
  | "advanced"
  | "project"
  | "analytics"
  | "settings"
  | "sell"
  | "appointments"
  | "events"
  | "giving"
  | "people";
type EasyTask = "identity" | "hours" | "announcement" | "contact";

const primaryNavigation = [
  { id: "home" as const, label: "Home", icon: LayoutDashboard },
  { id: "easy" as const, label: "Easy Edit", icon: Sparkles },
  { id: "advanced" as const, label: "Website", icon: Globe2 },
  { id: "project" as const, label: "Project", icon: MessageSquareText },
  { id: "analytics" as const, label: "Analytics", icon: Activity },
];

const stagedModules = [
  { id: "sell" as const, label: "Sell", icon: ShoppingBag, note: "Preview" },
  {
    id: "appointments" as const,
    label: "Appointments",
    icon: Clock3,
    note: "Preview",
  },
  {
    id: "events" as const,
    label: "Events",
    icon: CalendarDays,
    note: "Preview",
  },
  { id: "giving" as const, label: "Giving", icon: HandHeart, note: "Preview" },
  { id: "people" as const, label: "People", icon: Users, note: "Stage 3" },
];

const quickTasks: Array<{
  id: EasyTask;
  title: string;
  detail: string;
  icon: typeof Sparkles;
}> = [
  {
    id: "identity",
    title: "Site name and welcome",
    detail: "Update your organization name, tagline, and homepage message.",
    icon: FileText,
  },
  {
    id: "hours",
    title: "Service times and hours",
    detail: "Keep weekly hours and gathering times accurate everywhere.",
    icon: Clock3,
  },
  {
    id: "announcement",
    title: "Announcement",
    detail: "Post a timely message without changing the page layout.",
    icon: MessageSquareText,
  },
  {
    id: "contact",
    title: "Contact information",
    detail: "Update the address, phone number, and public email.",
    icon: Users,
  },
];

export function PlatformWorkspace({
  onBackToMarketing,
  initialThemeId,
}: {
  onBackToMarketing: () => void;
  initialThemeId: ThemePresetID;
}) {
  const [view, setView] = useState<WorkspaceView>("home");
  const [site, setSite] = useState<SiteData>(() =>
    getSiteDataForTheme(initialThemeId),
  );
  const [draftSite, setDraftSite] = useState<SiteData>(() =>
    getSiteDataForTheme(initialThemeId),
  );
  const [activeTask, setActiveTask] = useState<EasyTask>("identity");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [publishedAt, setPublishedAt] = useState("Today at 10:42 AM");
  const [notice, setNotice] = useState<string | null>(null);

  const hasChanges = useMemo(
    () => JSON.stringify(site) !== JSON.stringify(draftSite),
    [site, draftSite],
  );
  const flash = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 2200);
  };

  const publish = () => {
    setSite(JSON.parse(JSON.stringify(draftSite)));
    const stamp = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    setPublishedAt(`Today at ${stamp}`);
    flash("Published successfully. Your live site is current.");
  };

  const goTo = (next: WorkspaceView) => {
    setView(next);
    setSidebarOpen(false);
  };

  return (
    <div className="platform-app">
      <aside
        className={
          sidebarOpen ? "platform-sidebar is-open" : "platform-sidebar"
        }
      >
        <div className="platform-brand-row">
          <button className="platform-brand" onClick={onBackToMarketing}>
            omnisite<span>.</span>
          </button>
          <button
            className="platform-close-nav"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>
        <button className="platform-site-switcher">
          <span className="platform-site-mark">
            {draftSite.orgName.charAt(0)}
          </span>
          <span>
            <strong>{draftSite.orgName}</strong>
            <small>
              {draftSite.orgType.replace("homeservice", "home service")} website
            </small>
          </span>
          <ChevronDown size={16} />
        </button>

        <nav className="platform-navigation" aria-label="Workspace navigation">
          <p>Workspace</p>
          {primaryNavigation.map((item) => (
            <button
              key={item.id}
              className={view === item.id ? "active" : ""}
              onClick={() => goTo(item.id)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {item.id === "project" && <i>2</i>}
            </button>
          ))}
          <p>Coming in the launch family</p>
          {stagedModules.map((item) => (
            <button
              key={item.label}
              className={view === item.id ? "active staged" : "staged"}
              onClick={() => goTo(item.id)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              <small>{item.note}</small>
            </button>
          ))}
        </nav>
        <div className="platform-sidebar-bottom">
          <button
            className={view === "settings" ? "active" : ""}
            onClick={() => goTo("settings")}
          >
            <Settings size={18} />
            Settings
          </button>
          <button>
            <HelpCircle size={18} />
            Help and support
          </button>
          <div className="platform-user">
            <span>DS</span>
            <div>
              <strong>Dipendra Subedi</strong>
              <small>Tenant owner</small>
            </div>
            <MoreHorizontal size={17} />
          </div>
        </div>
      </aside>

      <div className="platform-main">
        <header className="platform-topbar">
          <button
            className="platform-mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={21} />
          </button>
          <div>
            <span className="platform-live-dot" />
            Site is live <small>· {publishedAt}</small>
          </div>
          <div className="platform-top-actions">
            <button className="platform-help">
              <HelpCircle size={17} />
              Ask for help
            </button>
            <button
              className="platform-preview"
              onClick={() => goTo("advanced")}
            >
              <Monitor size={17} />
              Preview
            </button>
            <button
              className="platform-publish"
              onClick={publish}
              disabled={!hasChanges}
            >
              <Rocket size={17} />
              {hasChanges ? "Review & publish" : "Published"}
            </button>
          </div>
        </header>

        {notice && (
          <div className="platform-toast">
            <Check size={17} />
            {notice}
          </div>
        )}
        {view === "home" && (
          <Dashboard onNavigate={goTo} publishedAt={publishedAt} />
        )}
        {view === "easy" && (
          <EasyEdit
            site={draftSite}
            setSite={setDraftSite}
            task={activeTask}
            setTask={setActiveTask}
          />
        )}
        {view === "advanced" && (
          <WebsiteEditor site={draftSite} setSite={setDraftSite} />
        )}
        {view === "project" && <ProjectWorkspace />}
        {view === "analytics" && <AnalyticsWorkspace />}
        {view === "settings" && (
          <SettingsWorkspace site={draftSite} setSite={setDraftSite} />
        )}
        {view === "sell" && <SellWorkspace />}
        {view === "appointments" && <AppointmentsWorkspace />}
        {view === "events" && <EventsWorkspace />}
        {view === "giving" && <GivingWorkspace />}
        {view === "people" && <PeopleWorkspace />}
      </div>
      {sidebarOpen && (
        <button
          className="platform-scrim"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        />
      )}
    </div>
  );
}

function Dashboard({
  onNavigate,
  publishedAt,
}: {
  onNavigate: (view: WorkspaceView) => void;
  publishedAt: string;
}) {
  return (
    <main className="platform-page platform-dashboard">
      <div className="platform-page-heading">
        <div>
          <span>Thursday, August 6</span>
          <h1>Good afternoon, Dipendra.</h1>
          <p>
            Your website is live and healthy. Here’s what deserves your
            attention.
          </p>
        </div>
        <button onClick={() => onNavigate("easy")}>
          <Sparkles size={18} />
          Update my site
        </button>
      </div>
      <section className="platform-health-card">
        <div className="platform-health-copy">
          <span className="platform-status-icon">
            <Check size={21} />
          </span>
          <div>
            <small>Website status</small>
            <h2>Everything is working</h2>
            <p>
              Domain, publishing, forms, and accessibility basics passed their
              latest checks.
            </p>
          </div>
        </div>
        <div className="platform-health-meta">
          <span>
            <strong>sanctuarygrace.org</strong>
            <small>Connected domain</small>
          </span>
          <span>
            <strong>{publishedAt}</strong>
            <small>Last published</small>
          </span>
          <button onClick={() => onNavigate("advanced")}>
            Open website <ArrowRight size={16} />
          </button>
        </div>
      </section>
      <div className="platform-dashboard-grid">
        <section className="platform-card platform-launch-card">
          <div className="platform-card-heading">
            <div>
              <span>Launch progress</span>
              <h2>Your foundation is ready</h2>
            </div>
            <strong>82%</strong>
          </div>
          <div className="platform-progress">
            <i />
          </div>
          {[
            ["Add your privacy policy", false],
            ["Confirm contact form routing", true],
            ["Connect your custom domain", true],
            ["Complete Easy Edit handoff", false],
          ].map(([label, done]) => (
            <div className="platform-check-row" key={String(label)}>
              <span className={done ? "done" : ""}>
                {done && <Check size={13} />}
              </span>
              <p>{label}</p>
              {!done && <ArrowRight size={15} />}
            </div>
          ))}
        </section>
        <section className="platform-card">
          <div className="platform-card-heading">
            <div>
              <span>Recent activity</span>
              <h2>What changed</h2>
            </div>
            <button>View all</button>
          </div>
          {[
            ["Homepage announcement updated", "You · 18 minutes ago"],
            ["Release 7 published", "You · Today at 10:42 AM"],
            ["Designer left 2 review notes", "OmniSite team · Yesterday"],
          ].map(([title, meta]) => (
            <div className="platform-activity" key={title}>
              <i />
              <div>
                <strong>{title}</strong>
                <small>{meta}</small>
              </div>
            </div>
          ))}
        </section>
      </div>
      <section className="platform-quick-section">
        <div className="platform-card-heading">
          <div>
            <span>Common updates</span>
            <h2>What would you like to change?</h2>
          </div>
          <button onClick={() => onNavigate("easy")}>
            See all updates <ArrowRight size={15} />
          </button>
        </div>
        <div className="platform-quick-grid">
          {quickTasks.map((task) => (
            <button key={task.id} onClick={() => onNavigate("easy")}>
              <task.icon size={21} />
              <strong>{task.title}</strong>
              <span>{task.detail}</span>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function EasyEdit({
  site,
  setSite,
  task,
  setTask,
}: {
  site: SiteData;
  setSite: (site: SiteData) => void;
  task: EasyTask;
  setTask: (task: EasyTask) => void;
}) {
  const update = (field: keyof SiteData, value: string) =>
    setSite({ ...site, [field]: value });
  return (
    <main className="platform-page editor-page">
      <div className="platform-page-heading">
        <div>
          <span>Easy Edit</span>
          <h1>Update your site safely.</h1>
          <p>
            Choose a familiar task. Layout, mobile behavior, and brand styles
            stay protected.
          </p>
        </div>
        <div className="platform-saved">
          <Check size={15} />
          Draft saved
        </div>
      </div>
      <div className="easy-layout">
        <aside className="easy-task-list">
          <label>
            <Search size={16} />
            <input placeholder="Search updates" />
          </label>
          {quickTasks.map((item) => (
            <button
              key={item.id}
              className={task === item.id ? "active" : ""}
              onClick={() => setTask(item.id)}
            >
              <item.icon size={18} />
              <span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </span>
              <ArrowRight size={15} />
            </button>
          ))}
        </aside>
        <section className="easy-form-panel">
          <button className="easy-back" onClick={() => setTask("identity")}>
            <ArrowLeft size={15} />
            Easy Edit
          </button>
          {task === "identity" && (
            <>
              <span className="platform-kicker">Homepage identity</span>
              <h2>Site name and welcome</h2>
              <p>These fields appear in the homepage hero and browser title.</p>
              <FormField
                label="Organization name"
                value={site.orgName}
                onChange={(value) => update("orgName", value)}
                limit="60 characters"
              />
              <FormField
                label="Tagline"
                value={site.tagline}
                onChange={(value) => update("tagline", value)}
                multiline
                limit="140 characters"
              />
            </>
          )}
          {task === "hours" && (
            <>
              <span className="platform-kicker">Reusable collection</span>
              <h2>Service times and hours</h2>
              <p>
                Update once and every page using these times will stay in sync.
              </p>
              {site.hours.map((hour, index) => (
                <div className="easy-collection-card" key={hour.id}>
                  <div>
                    <strong>{index + 1}</strong>
                    <span>Schedule entry</span>
                  </div>
                  <FormField
                    label="Label"
                    value={hour.label}
                    onChange={(value) =>
                      setSite({
                        ...site,
                        hours: site.hours.map((item) =>
                          item.id === hour.id
                            ? { ...item, label: value }
                            : item,
                        ),
                      })
                    }
                  />
                  <FormField
                    label="When"
                    value={hour.days}
                    onChange={(value) =>
                      setSite({
                        ...site,
                        hours: site.hours.map((item) =>
                          item.id === hour.id ? { ...item, days: value } : item,
                        ),
                      })
                    }
                  />
                </div>
              ))}
            </>
          )}
          {task === "announcement" && (
            <>
              <span className="platform-kicker">Time-sensitive update</span>
              <h2>Homepage announcement</h2>
              <p>
                The active message appears below service times and can be
                removed without changing the layout.
              </p>
              {site.announcements.slice(0, 1).map((item) => (
                <div key={item.id}>
                  <FormField
                    label="Headline"
                    value={item.title}
                    onChange={(value) =>
                      setSite({
                        ...site,
                        announcements: site.announcements.map((a) =>
                          a.id === item.id ? { ...a, title: value } : a,
                        ),
                      })
                    }
                  />
                  <FormField
                    label="Message"
                    value={item.content}
                    onChange={(value) =>
                      setSite({
                        ...site,
                        announcements: site.announcements.map((a) =>
                          a.id === item.id ? { ...a, content: value } : a,
                        ),
                      })
                    }
                    multiline
                  />
                </div>
              ))}
            </>
          )}
          {task === "contact" && (
            <>
              <span className="platform-kicker">Organization information</span>
              <h2>Contact information</h2>
              <p>
                This shared information appears in the contact section and
                footer.
              </p>
              <FormField
                label="Address"
                value={site.address}
                onChange={(value) => update("address", value)}
              />
              <div className="easy-two-col">
                <FormField
                  label="Phone"
                  value={site.phone}
                  onChange={(value) => update("phone", value)}
                />
                <FormField
                  label="Public email"
                  value={site.email}
                  onChange={(value) => update("email", value)}
                />
              </div>
            </>
          )}
        </section>
        <SiteMiniPreview site={site} />
      </div>
    </main>
  );
}

function FormField({
  label,
  value,
  onChange,
  multiline,
  limit,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  limit?: string;
}) {
  return (
    <label className="easy-field">
      <span>
        {label}
        {limit && <small>{limit}</small>}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}

function SiteMiniPreview({
  site,
  viewport = "desktop",
  page = site.pages[0],
  selectedElementId,
  onSelectElement,
  onUpdateElement,
}: {
  site: SiteData;
  viewport?: ViewportMode;
  page?: Page;
  selectedElementId?: string;
  onSelectElement?: (id: string) => void;
  onUpdateElement?: (id: string, changes: Partial<CanvasElement>) => void;
}) {
  const hero = page?.sections.find((section) => section.type === "hero");
  const title =
    hero?.title || page?.title || site.tagline || "A place to belong.";
  const subtitle =
    hero?.subtitle ||
    (page?.title === "Home"
      ? "Come as you are. There is a place for you here."
      : `Learn more about ${page?.title.toLowerCase() || "our organization"}.`);
  const canvasElements = (site.canvasElements || []).filter(
    (element) => element.pageId === page?.id,
  );
  const startDrag = (event: ReactPointerEvent<HTMLElement>, element: CanvasElement) => {
    if (!onUpdateElement) return;
    event.preventDefault();
    event.stopPropagation();
    const startX = event.clientX;
    const startY = event.clientY;
    const originX = element.x || 0;
    const originY = element.y || 0;
    const move = (pointerEvent: PointerEvent) => onUpdateElement(element.id, { x: Math.max(0, originX + pointerEvent.clientX - startX), y: Math.max(0, originY + pointerEvent.clientY - startY) });
    const stop = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", stop); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  };
  const startResize = (event: ReactPointerEvent<HTMLElement>, element: CanvasElement) => {
    if (!onUpdateElement) return;
    event.preventDefault();
    event.stopPropagation();
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = element.width;
    const startHeight = element.height;
    const move = (pointerEvent: PointerEvent) => onUpdateElement(element.id, { width: Math.max(20, startWidth + pointerEvent.clientX - startX), height: Math.max(element.kind === "line" ? 2 : 20, startHeight + pointerEvent.clientY - startY) });
    const stop = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", stop); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  };
  return (
    <aside className={`site-mini-preview viewport-${viewport}`}>
      <div className="mini-preview-bar">
        <span>
          <i />
          <i />
          <i />
        </span>
        <strong>
          {viewport === "mobile"
            ? "Phone"
            : viewport === "tablet"
              ? "Tablet"
              : "Desktop"}{" "}
          preview
        </strong>
        <button aria-label="Preview options">
          <MoreHorizontal size={16} />
        </button>
      </div>
      <div className="mini-device">
        <div
          className="mini-site"
          style={
            {
              "--site-primary": site.theme.primaryColor,
              "--site-accent": site.theme.accentColor,
              "--site-bg": site.theme.backgroundColor,
              "--site-text": site.theme.textColor,
            } as CSSProperties
          }
        >
          <header>
            <b>{site.orgName}</b>
            <nav>
              {site.pages.slice(0, 4).map((item) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </nav>
            <button>Get started</button>
          </header>
          <main>
            <span>{page?.title || "Home"}</span>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button>Get started</button>
            {page?.sections.some(
              (section) => section.type === "hours_times",
            ) && (
              <section>
                <small>THIS WEEK</small>
                <h3>{site.hours[0]?.label}</h3>
                <p>{site.hours[0]?.days}</p>
              </section>
            )}
            {page?.title !== "Home" && (
              <div className="mini-content-blocks">
                <i />
                <i />
                <i />
              </div>
            )}
            {canvasElements.length > 0 && (
              <div
                className="canvas-object-area"
                aria-label="Custom page elements"
              >
                {canvasElements.map((element) => (
                  <button
                    key={element.id}
                    type="button"
                    className={`canvas-object canvas-${element.kind} ${selectedElementId === element.id ? "selected" : ""}`}
                    style={{
                      left: `${element.x || 0}px`,
                      top: `${element.y || 0}px`,
                      width: `${element.width}px`,
                      height: `${element.height}px`,
                      color:
                        element.kind === "text" ? element.color : undefined,
                      backgroundColor:
                        element.kind === "rectangle" ||
                        element.kind === "circle"
                          ? element.color
                          : undefined,
                      borderColor:
                        element.kind === "line" ? element.color : undefined,
                      fontSize: `${element.fontSize}px`,
                      fontWeight: element.bold ? 800 : 500,
                      fontStyle: element.italic ? "italic" : "normal",
                      textAlign: element.align,
                    }}
                    onClick={() => onSelectElement?.(element.id)}
                    onPointerDown={(event) => {
                      onSelectElement?.(element.id);
                      if (element.kind !== "text") startDrag(event, element);
                    }}
                  >
                    <i className="canvas-drag-handle" onPointerDown={(event) => startDrag(event, element)} aria-label="Drag to move"><Move size={12} /></i>
                    <i className="canvas-resize-handle" onPointerDown={(event) => startResize(event, element)} aria-hidden="true" />
                    {element.kind === "text" ? (
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(event) =>
                          onUpdateElement?.(element.id, {
                            text: event.currentTarget.textContent || "",
                          })
                        }
                      >
                        {element.text}
                      </span>
                    ) : (
                      <span className="sr-only">{element.kind} shape</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </aside>
  );
}

function WebsiteEditor({
  site,
  setSite,
}: {
  site: SiteData;
  setSite: (site: SiteData) => void;
}) {
  const [panel, setPanel] = useState<"pages" | "design">("pages");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [activePageId, setActivePageId] = useState(site.pages[0]?.id || "");
  const [addingPage, setAddingPage] = useState(false);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    null,
  );
  const activePage =
    site.pages.find((page) => page.id === activePageId) || site.pages[0];
  const selectedElement = (site.canvasElements || []).find(
    (element) => element.id === selectedElementId,
  );

  useEffect(() => {
    setActivePageId(site.pages[0]?.id || "");
  }, [site.id]);

  const pageOptions = [
    "About",
    "Services",
    "Events",
    "Team",
    "Testimonials",
    "Gallery",
    "Blog",
    "Contact",
    "FAQ",
    "Donation",
    "Privacy Policy",
    "Terms",
    "404",
  ];
  const makePage = (title: string): Page => {
    const slug =
      title === "404"
        ? "/404"
        : `/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const sectionMap: Record<string, PageSection["type"]> = {
      Services: "services_products",
      Events: "events",
      Team: "staff",
      Donation: "give_donate",
      Contact: "contact_form",
    };
    return {
      id: `page-${Date.now()}-${title}`,
      title,
      slug,
      seoTitle: `${title} | ${site.orgName}`,
      seoDescription: `${title} information for ${site.orgName}.`,
      sections: [
        {
          id: `hero-${Date.now()}-${title}`,
          type: "hero",
          title: title === "404" ? "Page not found" : title,
          subtitle: `Explore ${title.toLowerCase()} at ${site.orgName}.`,
          visible: true,
        },
        ...(sectionMap[title]
          ? [
              {
                id: `content-${Date.now()}-${title}`,
                type: sectionMap[title],
                title,
                visible: true,
              } as PageSection,
            ]
          : []),
      ],
    };
  };
  const addPage = (title: string) => {
    const existing = site.pages.find((page) => page.title === title);
    if (existing) {
      setActivePageId(existing.id);
      setAddingPage(false);
      return;
    }
    const page = makePage(title);
    setSite({ ...site, pages: [...site.pages, page] });
    setActivePageId(page.id);
    setAddingPage(false);
  };
  const completeSite = () => {
    const missing = pageOptions
      .filter((title) => !site.pages.some((page) => page.title === title))
      .map(makePage);
    setSite({ ...site, pages: [...site.pages, ...missing] });
  };
  const applyTheme = (themeId: ThemePresetID) => {
    const preset = getSiteDataForTheme(themeId);
    setSite({
      ...preset,
      published: false,
      lastPublishedAt: site.lastPublishedAt,
    });
    setAddingPage(false);
  };

  const updatePage = (changes: Partial<Page>) => {
    if (!activePage) return;
    setSite({
      ...site,
      pages: site.pages.map((page) =>
        page.id === activePage.id ? { ...page, ...changes } : page,
      ),
    });
  };

  const updateHero = (field: "title" | "subtitle", value: string) => {
    if (!activePage) return;
    updatePage({
      sections: activePage.sections.map((section) =>
        section.type === "hero" ? { ...section, [field]: value } : section,
      ),
    });
  };

  const addCanvasElement = (kind: CanvasElement["kind"]) => {
    if (!activePage) return;
    const element: CanvasElement = {
      id: `element-${Date.now()}`,
      pageId: activePage.id,
      kind,
      text: kind === "text" ? "Edit this text" : "",
      x: 80,
      y: 135,
      width: kind === "line" ? 180 : kind === "text" ? 220 : 120,
      height: kind === "line" ? 2 : kind === "text" ? 52 : 90,
      color: kind === "text" ? site.theme.textColor : site.theme.accentColor,
      fontSize: 18,
      bold: false,
      italic: false,
      align: "center",
    };
    setSite({
      ...site,
      canvasElements: [...(site.canvasElements || []), element],
    });
    setSelectedElementId(element.id);
  };

  const updateCanvasElement = (id: string, changes: Partial<CanvasElement>) =>
    setSite({
      ...site,
      canvasElements: (site.canvasElements || []).map((element) =>
        element.id === id ? { ...element, ...changes } : element,
      ),
    });
  const removeCanvasElement = () => {
    if (!selectedElementId) return;
    setSite({
      ...site,
      canvasElements: (site.canvasElements || []).filter(
        (element) => element.id !== selectedElementId,
      ),
    });
    setSelectedElementId(null);
  };

  return (
    <main className="platform-page editor-page">
      <div className="platform-page-heading">
        <div>
          <span>Website</span>
          <h1>Design the complete site.</h1>
          <p>
            Choose a full industry template, add pages, and verify every layout
            on desktop or phone. All builder features in this workspace are
            free.
          </p>
        </div>
        <div className="platform-saved">
          <Check size={15} />
          Draft saved
        </div>
      </div>
      <div className="advanced-layout">
        <aside className="advanced-panel">
          <div className="advanced-tabs">
            <button
              className={panel === "pages" ? "active" : ""}
              onClick={() => setPanel("pages")}
            >
              <FileText size={16} />
              Pages
            </button>
            <button
              className={panel === "design" ? "active" : ""}
              onClick={() => setPanel("design")}
            >
              <Paintbrush size={16} />
              Design
            </button>
          </div>
          {panel === "pages" ? (
            <>
              <button
                className="advanced-add"
                onClick={() => setAddingPage(!addingPage)}
              >
                <Plus size={14} /> Add page
              </button>
              {addingPage && (
                <div className="page-template-menu">
                  {pageOptions.map((title) => (
                    <button key={title} onClick={() => addPage(title)}>
                      {title}
                    </button>
                  ))}
                </div>
              )}
              <button className="complete-site" onClick={completeSite}>
                <Sparkles size={15} />
                <span>
                  <strong>Complete my website</strong>
                  <small>Add every essential page free</small>
                </span>
              </button>
              <div className="advanced-page-list">
                {site.pages.map((page) => (
                  <button
                    className={
                      page.id === activePage?.id
                        ? "advanced-page active"
                        : "advanced-page"
                    }
                    onClick={() => setActivePageId(page.id)}
                    key={page.id}
                  >
                    <span>
                      <strong>{page.title}</strong>
                      <small>{page.slug}</small>
                    </span>
                    <MoreHorizontal size={16} />
                  </button>
                ))}
              </div>
              {activePage && (
                <div className="page-details">
                  <span>Page details</span>
                  <label>
                    Page name
                    <input
                      value={activePage.title}
                      onChange={(event) =>
                        updatePage({ title: event.target.value })
                      }
                    />
                  </label>
                  <label>
                    URL slug
                    <input
                      value={activePage.slug}
                      onChange={(event) =>
                        updatePage({
                          slug: event.target.value.startsWith("/")
                            ? event.target.value
                            : `/${event.target.value}`,
                        })
                      }
                    />
                  </label>
                  <label>
                    Page heading
                    <input
                      value={
                        activePage.sections.find(
                          (section) => section.type === "hero",
                        )?.title || ""
                      }
                      onChange={(event) =>
                        updateHero("title", event.target.value)
                      }
                    />
                  </label>
                  <label>
                    Intro text
                    <textarea
                      value={
                        activePage.sections.find(
                          (section) => section.type === "hero",
                        )?.subtitle || ""
                      }
                      onChange={(event) =>
                        updateHero("subtitle", event.target.value)
                      }
                    />
                  </label>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="template-list">
                <span>Full website templates</span>
                {(
                  [
                    "sanctuary_modern",
                    "local_authority",
                    "local_table",
                    "trusted_home_pro",
                    "modern_merchant",
                  ] as ThemePresetID[]
                ).map((id) => {
                  const theme = THEME_MANIFESTS.find((item) => item.id === id)!;
                  return (
                    <button
                      key={id}
                      className={site.theme.themePreset === id ? "active" : ""}
                      onClick={() => applyTheme(id)}
                    >
                      <i style={{ background: theme.colors.primary }} />
                      <span>
                        <strong>{theme.name}</strong>
                        <small>{theme.industry}</small>
                      </span>
                      {site.theme.themePreset === id && <Check size={15} />}
                    </button>
                  );
                })}
              </div>
              <p className="template-note">
                Choosing a template loads its matching business type,
                navigation, services, hours, content, and design system.
              </p>
              <div className="advanced-theme">
                <span>Brand colors</span>
                <div>
                  <i style={{ background: site.theme.primaryColor }} />
                  <i style={{ background: site.theme.accentColor }} />
                  <i style={{ background: site.theme.backgroundColor }} />
                </div>
                {(
                  [
                    ["Primary", "primaryColor"],
                    ["Accent", "accentColor"],
                    ["Background", "backgroundColor"],
                    ["Text", "textColor"],
                  ] as const
                ).map(([label, key]) => (
                  <label key={key}>
                    <span>
                      {label}
                      <code>{site.theme[key]}</code>
                    </span>
                    <input
                      aria-label={label}
                      type="color"
                      value={site.theme[key]}
                      onChange={(event) =>
                        setSite({
                          ...site,
                          theme: { ...site.theme, [key]: event.target.value },
                        })
                      }
                    />
                  </label>
                ))}
              </div>
            </>
          )}
        </aside>
        <div className="advanced-canvas">
          <div className="advanced-canvas-tools">
            <div className="viewport-switcher">
              <button
                className={viewport === "desktop" ? "active" : ""}
                onClick={() => setViewport("desktop")}
              >
                <Monitor size={16} />
                <span>Desktop</span>
              </button>
              <button
                className={viewport === "mobile" ? "active" : ""}
                onClick={() => setViewport("mobile")}
              >
                <Smartphone size={16} />
                <span>Phone</span>
              </button>
            </div>
            <span>
              {activePage?.title || "Home"} · {site.orgName}
            </span>
            <button>
              <PanelLeftClose size={16} />
              Hide controls
            </button>
          </div>
          <div className="canvas-insert-toolbar" aria-label="Insert and format elements">
            <div className="canvas-add-group">
              <span>Add</span>
              <button onClick={() => addCanvasElement("text")}><Type size={15} />Text</button>
              <button onClick={() => addCanvasElement("rectangle")}><Square size={15} />Box</button>
              <button onClick={() => addCanvasElement("circle")}><Circle size={15} />Circle</button>
              <button onClick={() => addCanvasElement("line")}><Minus size={15} />Line</button>
            </div>
            {selectedElement ? (
              <div className="canvas-format-group">
                <span>{selectedElement.kind === "text" ? "Editing text" : `Editing ${selectedElement.kind}`}</span>
                {selectedElement.kind === "text" && <>
                  <button className={selectedElement.bold ? "active" : ""} onClick={() => updateCanvasElement(selectedElement.id, { bold: !selectedElement.bold })} aria-label="Bold"><Bold size={14} /></button>
                  <button className={selectedElement.italic ? "active" : ""} onClick={() => updateCanvasElement(selectedElement.id, { italic: !selectedElement.italic })} aria-label="Italic"><Italic size={14} /></button>
                  <button className={selectedElement.align === "left" ? "active" : ""} onClick={() => updateCanvasElement(selectedElement.id, { align: "left" })} aria-label="Align left"><AlignLeft size={14} /></button>
                  <button className={selectedElement.align === "center" ? "active" : ""} onClick={() => updateCanvasElement(selectedElement.id, { align: "center" })} aria-label="Align center"><AlignCenter size={14} /></button>
                  <button className={selectedElement.align === "right" ? "active" : ""} onClick={() => updateCanvasElement(selectedElement.id, { align: "right" })} aria-label="Align right"><AlignRight size={14} /></button>
                  <button onClick={() => updateCanvasElement(selectedElement.id, { fontSize: Math.max(10, selectedElement.fontSize - 2) })} aria-label="Decrease font size">A−</button>
                  <button onClick={() => updateCanvasElement(selectedElement.id, { fontSize: Math.min(72, selectedElement.fontSize + 2) })} aria-label="Increase font size">A+</button>
                </>}
                <label className="canvas-color">Color<input aria-label="Element color" type="color" value={selectedElement.color} onChange={(event) => updateCanvasElement(selectedElement.id, { color: event.target.value })} /></label>
                <small className="canvas-direct-hint"><Move size={12} /> Move it anywhere <b>·</b> Pull the corner to resize</small>
                <button className="canvas-delete" onClick={removeCanvasElement} aria-label="Delete element"><Trash2 size={14} /></button>
              </div>
            ) : <p>Click any text or shape on the page to change it.</p>}
          </div>
          <SiteMiniPreview site={site} viewport={viewport} page={activePage} selectedElementId={selectedElementId || undefined} onSelectElement={setSelectedElementId} onUpdateElement={updateCanvasElement} />
        </div>
      </div>
    </main>
  );
}

function ProjectWorkspace() {
  return (
    <main className="platform-page">
      <div className="platform-page-heading">
        <div>
          <span>Managed service</span>
          <h1>Your website project.</h1>
          <p>Review progress, provide feedback, and keep ownership clear.</p>
        </div>
        <button className="heading-action">Share review link</button>
      </div>
      <div className="project-grid">
        <section className="platform-card">
          <div className="platform-card-heading">
            <div>
              <span>Project plan</span>
              <h2>Launch milestones</h2>
            </div>
            <strong>3 of 5</strong>
          </div>
          {[
            ["Intake and assets", "Complete"],
            ["Theme and first draft", "Complete"],
            ["Your review and feedback", "In review"],
            ["Domain and launch checks", "Next"],
            ["Easy Edit handoff", "Upcoming"],
          ].map(([title, status], index) => (
            <div className="project-step" key={title}>
              <span
                className={index < 2 ? "done" : index === 2 ? "current" : ""}
              >
                {index < 2 ? <Check size={14} /> : index + 1}
              </span>
              <div>
                <strong>{title}</strong>
                <small>{status}</small>
              </div>
              {index === 2 && <button>Open review</button>}
            </div>
          ))}
        </section>
        <section className="platform-card">
          <div className="platform-card-heading">
            <div>
              <span>Review thread</span>
              <h2>2 open comments</h2>
            </div>
          </div>
          <div className="review-message">
            <strong>
              OmniSite design team <small>Yesterday</small>
            </strong>
            <p>
              The homepage direction is ready. Please check the service times
              and contact information.
            </p>
          </div>
          <div className="review-message client">
            <strong>
              You <small>Today</small>
            </strong>
            <p>
              The theme looks right. Please keep all customer tools this clean
              and light.
            </p>
          </div>
          <textarea placeholder="Add a comment for the project team" />
          <button className="heading-action">Send comment</button>
        </section>
      </div>
    </main>
  );
}

function AnalyticsWorkspace() {
  return (
    <main className="platform-page">
      <div className="platform-page-heading">
        <div>
          <span>Analytics</span>
          <h1>A clear view of your website.</h1>
          <p>Privacy-conscious reporting focused on useful customer actions.</p>
        </div>
        <button className="heading-action">
          Last 30 days <ChevronDown size={15} />
        </button>
      </div>
      <div className="analytics-grid">
        {[
          ["1,284", "Site visits", "+18%"],
          ["42", "Contact actions", "+9%"],
          ["3m 12s", "Average visit", "+24s"],
          ["67%", "Mobile visitors", "Stable"],
        ].map(([value, label, change]) => (
          <section className="platform-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{change}</small>
          </section>
        ))}
      </div>
      <section className="platform-card analytics-chart">
        <div className="platform-card-heading">
          <div>
            <span>Traffic</span>
            <h2>Visits over time</h2>
          </div>
        </div>
        <div className="chart-bars">
          {[38, 54, 46, 72, 63, 80, 68, 92, 70, 86, 78, 98].map(
            (height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ),
          )}
        </div>
        <div className="chart-labels">
          <span>Jul 8</span>
          <span>Jul 15</span>
          <span>Jul 22</span>
          <span>Aug 6</span>
        </div>
      </section>
    </main>
  );
}

function SettingsWorkspace({
  site,
  setSite,
}: {
  site: SiteData;
  setSite: (site: SiteData) => void;
}) {
  return (
    <main className="platform-page">
      <div className="platform-page-heading">
        <div>
          <span>Settings</span>
          <h1>Organization and website.</h1>
          <p>High-impact settings remain separate from everyday editing.</p>
        </div>
      </div>
      <div className="settings-layout">
        <nav>
          {[
            "Organization",
            "Domain",
            "Users and roles",
            "Billing",
            "Integrations",
            "Privacy and data",
            "Audit log",
          ].map((item, index) => (
            <button className={index === 0 ? "active" : ""} key={item}>
              {item}
              <ArrowRight size={15} />
            </button>
          ))}
        </nav>
        <section className="platform-card settings-form">
          <span className="platform-kicker">Organization</span>
          <h2>Organization profile</h2>
          <p>Used across the admin area and customer-facing system messages.</p>
          <FormField
            label="Organization name"
            value={site.orgName}
            onChange={(value) => setSite({ ...site, orgName: value })}
          />
          <FormField
            label="Custom domain"
            value={site.customDomain}
            onChange={(value) => setSite({ ...site, customDomain: value })}
          />
          <button className="heading-action">Save settings</button>
        </section>
      </div>
    </main>
  );
}

function usePersistentState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || "") as T;
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as const;
}

function ModuleHeader({
  eyebrow,
  title,
  description,
  action,
  onAction,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="platform-page-heading module-heading">
      <div>
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button onClick={onAction}>
        <Plus size={17} />
        {action}
      </button>
    </div>
  );
}

function MetricCards({ items }: { items: Array<[string, string, string]> }) {
  return (
    <div className="module-metrics">
      {items.map(([label, value, note]) => (
        <section className="platform-card" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
          <small>{note}</small>
        </section>
      ))}
    </div>
  );
}

function SellWorkspace() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = usePersistentState("omnisite-products", [
    {
      id: 1,
      name: "Community T-shirt",
      price: 24,
      stock: 38,
      status: "Active",
    },
    { id: 2, name: "Welcome guide", price: 8, stock: 112, status: "Active" },
    {
      id: 3,
      name: "Event registration",
      price: 15,
      stock: 24,
      status: "Draft",
    },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const addProduct = () => {
    if (!name.trim() || !price) return;
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: name.trim(),
        price: Number(price),
        stock: 0,
        status: "Draft",
      },
    ]);
    setName("");
    setPrice("");
    setShowForm(false);
  };
  return (
    <main className="platform-page">
      <ModuleHeader
        eyebrow="Commerce preview"
        title="Products and orders."
        description="A focused small-store workspace with clear inventory and order states."
        action="Add product"
        onAction={() => setShowForm(!showForm)}
      />
      <div className="module-notice">
        <ShieldCheck size={18} />
        <div>
          <strong>Payment connection required before launch</strong>
          <span>
            This preview does not collect card data. Production checkout will
            use a processor-hosted secure component.
          </span>
        </div>
      </div>
      {showForm && (
        <section className="platform-card module-create">
          <div>
            <span className="platform-kicker">New product</span>
            <h2>Add a catalog item</h2>
          </div>
          <label>
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product or service name"
            />
          </label>
          <label>
            Price
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              min="0"
              placeholder="0.00"
            />
          </label>
          <button onClick={addProduct}>Save draft product</button>
        </section>
      )}
      <MetricCards
        items={[
          ["Gross sales", "$1,842", "+12% this month"],
          ["Orders", "46", "5 need attention"],
          [
            "Products",
            String(products.length),
            `${products.filter((p) => p.status === "Active").length} active`,
          ],
          ["Inventory", "174", "2 low-stock items"],
        ]}
      />
      <section className="platform-card module-table-card">
        <div className="platform-card-heading">
          <div>
            <span>Catalog</span>
            <h2>Products</h2>
          </div>
          <button>Manage inventory</button>
        </div>
        <div className="module-table">
          <div className="module-table-head">
            <span>Product</span>
            <span>Price</span>
            <span>Inventory</span>
            <span>Status</span>
            <span />
          </div>
          {products.map((product) => (
            <div key={product.id}>
              <span>
                <PackageCheck size={18} />
                <strong>{product.name}</strong>
              </span>
              <span>${product.price.toFixed(2)}</span>
              <span>{product.stock || "Not tracked"}</span>
              <span>
                <i className={product.status.toLowerCase()} />
                {product.status}
              </span>
              <button aria-label={`More options for ${product.name}`}>
                <MoreHorizontal size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AppointmentsWorkspace() {
  const [showForm, setShowForm] = useState(false);
  const [bookings, setBookings] = usePersistentState("omnisite-bookings", [
    {
      id: 1,
      person: "Jordan Lee",
      service: "Initial consultation",
      time: "9:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      person: "Avery Martin",
      service: "Project review",
      time: "11:00 AM",
      status: "Confirmed",
    },
    {
      id: 3,
      person: "Sam Wilson",
      service: "Support session",
      time: "2:30 PM",
      status: "Pending",
    },
  ]);
  const [person, setPerson] = useState("");
  const [service, setService] = useState("Initial consultation");
  const addBooking = () => {
    if (!person.trim()) return;
    setBookings([
      ...bookings,
      {
        id: Date.now(),
        person: person.trim(),
        service,
        time: "4:00 PM",
        status: "Pending",
      },
    ]);
    setPerson("");
    setShowForm(false);
  };
  return (
    <main className="platform-page">
      <ModuleHeader
        eyebrow="Scheduling preview"
        title="Appointments."
        description="Manage services, availability, and customer bookings without exposing private calendar details."
        action="Add booking"
        onAction={() => setShowForm(!showForm)}
      />
      {showForm && (
        <section className="platform-card module-create">
          <div>
            <span className="platform-kicker">Manual booking</span>
            <h2>Add an appointment</h2>
          </div>
          <label>
            Customer name
            <input
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              placeholder="Full name"
            />
          </label>
          <label>
            Service
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>Initial consultation</option>
              <option>Project review</option>
              <option>Support session</option>
            </select>
          </label>
          <button onClick={addBooking}>Add pending booking</button>
        </section>
      )}
      <MetricCards
        items={[
          ["Today", String(bookings.length), "1 pending confirmation"],
          ["This week", "18", "+4 from last week"],
          ["Completion", "94%", "Last 30 days"],
          ["Next opening", "Tomorrow", "10:30 AM"],
        ]}
      />
      <div className="module-split">
        <section className="platform-card">
          <div className="platform-card-heading">
            <div>
              <span>Today</span>
              <h2>Thursday, August 6</h2>
            </div>
            <button>Calendar view</button>
          </div>
          {bookings.map((booking) => (
            <div className="booking-row" key={booking.id}>
              <time>{booking.time}</time>
              <i />
              <div>
                <strong>{booking.person}</strong>
                <span>{booking.service}</span>
              </div>
              <small className={booking.status.toLowerCase()}>
                {booking.status}
              </small>
            </div>
          ))}
        </section>
        <section className="platform-card availability-card">
          <span className="platform-kicker">Availability</span>
          <h2>Booking settings</h2>
          <p>
            Times are shown in America/Los_Angeles. New bookings require a
            24-hour notice.
          </p>
          {[
            ["Initial consultation", "45 min"],
            ["Project review", "60 min"],
            ["Support session", "30 min"],
          ].map(([title, time]) => (
            <div key={title}>
              <span>
                <strong>{title}</strong>
                <small>{time}</small>
              </span>
              <button>Edit</button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function EventsWorkspace() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = usePersistentState("omnisite-events", [
    {
      id: 1,
      title: "Community Welcome Lunch",
      date: "Aug 16",
      location: "Fellowship Hall",
      registrations: 46,
      capacity: 80,
    },
    {
      id: 2,
      title: "Volunteer Orientation",
      date: "Aug 22",
      location: "Room 204",
      registrations: 18,
      capacity: 24,
    },
    {
      id: 3,
      title: "Neighborhood Service Day",
      date: "Sep 5",
      location: "Riverside Park",
      registrations: 67,
      capacity: 100,
    },
  ]);
  const [title, setTitle] = useState("");
  const addEvent = () => {
    if (!title.trim()) return;
    setEvents([
      ...events,
      {
        id: Date.now(),
        title: title.trim(),
        date: "Sep 12",
        location: "To be confirmed",
        registrations: 0,
        capacity: 50,
      },
    ]);
    setTitle("");
    setShowForm(false);
  };
  return (
    <main className="platform-page">
      <ModuleHeader
        eyebrow="Events preview"
        title="Events and registrations."
        description="Publish events, manage capacity, and see registration progress in one place."
        action="Create event"
        onAction={() => setShowForm(!showForm)}
      />
      {showForm && (
        <section className="platform-card module-create">
          <div>
            <span className="platform-kicker">New event</span>
            <h2>Create a draft event</h2>
          </div>
          <label>
            Event name
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Event name"
            />
          </label>
          <label>
            Capacity
            <input type="number" defaultValue="50" />
          </label>
          <button onClick={addEvent}>Create event draft</button>
        </section>
      )}
      <MetricCards
        items={[
          ["Upcoming events", String(events.length), "Next 45 days"],
          [
            "Registrations",
            String(events.reduce((sum, event) => sum + event.registrations, 0)),
            "+28 this week",
          ],
          [
            "Available places",
            String(
              events.reduce(
                (sum, event) => sum + event.capacity - event.registrations,
                0,
              ),
            ),
            "Across all events",
          ],
          ["Attendance", "87%", "Previous 5 events"],
        ]}
      />
      <section className="platform-card event-list">
        <div className="platform-card-heading">
          <div>
            <span>Schedule</span>
            <h2>Upcoming events</h2>
          </div>
          <button>Public calendar</button>
        </div>
        {events.map((event) => (
          <article key={event.id}>
            <time>
              <strong>{event.date.split(" ")[1]}</strong>
              <span>{event.date.split(" ")[0]}</span>
            </time>
            <div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
            </div>
            <div className="event-capacity">
              <span>
                <i
                  style={{
                    width: `${Math.min(100, (event.registrations / event.capacity) * 100)}%`,
                  }}
                />
              </span>
              <small>
                {event.registrations} of {event.capacity} registered
              </small>
            </div>
            <button>
              <MoreHorizontal size={18} />
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

function GivingWorkspace() {
  const [funds] = usePersistentState("omnisite-funds", [
    { name: "General Fund", amount: 18420, goal: 25000 },
    { name: "Community Outreach", amount: 6840, goal: 10000 },
    { name: "Building Care", amount: 4210, goal: 8000 },
  ]);
  const [gifts, setGifts] = usePersistentState("omnisite-gifts", [
    {
      id: 1,
      donor: "Anonymous donor",
      fund: "General Fund",
      amount: 150,
      date: "Today, 9:14 AM",
    },
    {
      id: 2,
      donor: "Maya Thompson",
      fund: "Community Outreach",
      amount: 75,
      date: "Yesterday",
    },
    {
      id: 3,
      donor: "Marcus Lee",
      fund: "General Fund",
      amount: 250,
      date: "Aug 4",
    },
  ]);
  const addGift = () =>
    setGifts([
      {
        id: Date.now(),
        donor: "Manual entry",
        fund: "General Fund",
        amount: 100,
        date: "Just now",
      },
      ...gifts,
    ]);
  return (
    <main className="platform-page">
      <ModuleHeader
        eyebrow="Giving preview"
        title="Giving and funds."
        description="A finance-restricted view of gifts, designations, and campaign progress."
        action="Record offline gift"
        onAction={addGift}
      />
      <div className="module-notice">
        <ShieldCheck size={18} />
        <div>
          <strong>Finance administrator access</strong>
          <span>
            Donor exports, contribution history, refunds, and statements require
            a finance-authorized role and immutable audit records.
          </span>
        </div>
      </div>
      <MetricCards
        items={[
          ["Received this month", "$29,470", "+8% from July"],
          ["Gifts", String(gifts.length + 184), "61 recurring"],
          ["Average gift", "$158", "Across all funds"],
          ["Next payout", "$4,820", "Expected Aug 8"],
        ]}
      />
      <div className="module-split giving-split">
        <section className="platform-card">
          <div className="platform-card-heading">
            <div>
              <span>Funds</span>
              <h2>Campaign progress</h2>
            </div>
            <button>Manage funds</button>
          </div>
          {funds.map((fund) => (
            <div className="fund-row" key={fund.name}>
              <div>
                <strong>{fund.name}</strong>
                <span>
                  ${fund.amount.toLocaleString()} of $
                  {fund.goal.toLocaleString()}
                </span>
              </div>
              <div>
                <i style={{ width: `${(fund.amount / fund.goal) * 100}%` }} />
              </div>
              <small>{Math.round((fund.amount / fund.goal) * 100)}%</small>
            </div>
          ))}
        </section>
        <section className="platform-card">
          <div className="platform-card-heading">
            <div>
              <span>Recent activity</span>
              <h2>Latest gifts</h2>
            </div>
            <button>View all</button>
          </div>
          {gifts.slice(0, 5).map((gift) => (
            <div className="gift-row" key={gift.id}>
              <span>
                <DollarSign size={16} />
              </span>
              <div>
                <strong>{gift.donor}</strong>
                <small>
                  {gift.fund} · {gift.date}
                </small>
              </div>
              <b>${gift.amount}</b>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function PeopleWorkspace() {
  const [people, setPeople] = usePersistentState("omnisite-people", [
    {
      id: 1,
      name: "Maya Thompson",
      group: "Community team",
      permission: "Content editor",
    },
    {
      id: 2,
      name: "Marcus Lee",
      group: "Leadership",
      permission: "Site administrator",
    },
    {
      id: 3,
      name: "Sofia Martin",
      group: "Outreach",
      permission: "Group leader",
    },
  ]);
  const addPerson = () =>
    setPeople([
      ...people,
      {
        id: Date.now(),
        name: "New person",
        group: "Unassigned",
        permission: "Member",
      },
    ]);
  return (
    <main className="platform-page">
      <ModuleHeader
        eyebrow="Stage 3 foundation"
        title="People and groups."
        description="Privacy-first records with scoped roles, consent, and directory visibility."
        action="Add person"
        onAction={addPerson}
      />
      <div className="module-notice">
        <ShieldCheck size={18} />
        <div>
          <strong>Private by default</strong>
          <span>
            People records and directories are never public automatically. Field
            visibility and exports require explicit permission.
          </span>
        </div>
      </div>
      <MetricCards
        items={[
          ["People", String(people.length + 241), "18 added this month"],
          ["Households", "96", "12 need review"],
          ["Groups", "14", "9 active this week"],
          ["Volunteers", "68", "23 scheduled"],
        ]}
      />
      <section className="platform-card module-table-card">
        <div className="platform-card-heading">
          <div>
            <span>Directory</span>
            <h2>People records</h2>
          </div>
          <button>Manage fields</button>
        </div>
        <div className="module-table people-table">
          <div className="module-table-head">
            <span>Person</span>
            <span>Group</span>
            <span>Access</span>
            <span>Status</span>
            <span />
          </div>
          {people.map((person) => (
            <div key={person.id}>
              <span>
                <span className="person-avatar">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <strong>{person.name}</strong>
              </span>
              <span>{person.group}</span>
              <span>{person.permission}</span>
              <span>
                <i className="active" />
                Active
              </span>
              <button>
                <MoreHorizontal size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
