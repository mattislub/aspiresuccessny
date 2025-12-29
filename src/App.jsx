import { useEffect, useMemo, useState } from 'react';
import { FiActivity, FiArrowRight, FiBarChart2, FiBell, FiBookOpen, FiCheckCircle, FiClock, FiCompass, FiEdit, FiGrid, FiPlus, FiSearch, FiSun, FiUsers } from 'react-icons/fi';
import Button from './components/Button';
import Card from './components/Card';
import Icon from './components/Icon';
import InputField from './components/InputField';
import Layout from './components/Layout';
import Modal from './components/Modal';
import Tabs from './components/Tabs';
import Toast from './components/Toast';

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'requests', label: 'Requests' },
  { id: 'guide', label: 'Playbook' },
];

const sidebarLinks = [
  { href: '#hero', label: 'Hero & CTA', icon: FiCompass },
  { href: '#actions', label: 'Actions & Cards', icon: FiGrid },
  { href: '#components', label: 'Components', icon: FiBookOpen },
  { href: '#table', label: 'Data table', icon: FiBarChart2 },
  { href: '#statuses', label: 'Statuses', icon: FiActivity },
];

const requestRows = [
  {
    name: 'Care plan kickoff',
    owner: 'Jordan Ellis',
    status: 'Active',
    type: 'Care Management',
    updated: '2h ago',
  },
  {
    name: 'DSP placement',
    owner: 'Taylor Morgan',
    status: 'Pending',
    type: 'Specialist placement',
    updated: 'Today',
  },
  {
    name: 'OPWDD eligibility',
    owner: 'Riley Chen',
    status: 'At risk',
    type: 'Government programs',
    updated: 'Yesterday',
  },
  {
    name: 'ABA renewal',
    owner: 'Jordan Ellis',
    status: 'Complete',
    type: 'Care Management',
    updated: 'Mon',
  },
];

const statusTone = {
  Active: 'info',
  Pending: 'warning',
  'At risk': 'error',
  Complete: 'success',
};

const quickActions = [
  {
    title: 'Log a new intake',
    desc: 'Collect context and route to the right care manager.',
    icon: FiPlus,
    cta: 'Start intake',
  },
  {
    title: 'Schedule a consult',
    desc: 'Share availability and invite the family for next steps.',
    icon: FiClock,
    cta: 'Book time',
  },
  {
    title: 'Match a specialist',
    desc: 'Use filters to recommend the right DSP, peer, or clinician.',
    icon: FiUsers,
    cta: 'Open roster',
  },
  {
    title: 'Send an update',
    desc: 'Keep families in the loop with concise action notes.',
    icon: FiEdit,
    cta: 'Write update',
  },
];

const metrics = [
  { label: 'Active journeys', value: '24', delta: '+3 this week' },
  { label: 'Avg. response', value: '1.2h', delta: 'SLA: < 4h' },
  { label: 'Placement fill', value: '92%', delta: 'Last 30 days' },
  { label: 'Satisfaction', value: '4.8/5', delta: 'Voice of family' },
];

const badgeClass = {
  success: 'badge badge--success',
  warning: 'badge badge--warning',
  error: 'badge badge--error',
  info: 'badge badge--info',
};

const getPreferredTheme = () => {
  const stored = localStorage.getItem('as-theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);
  const [activeNav, setActiveNav] = useState('home');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [toasts, setToasts] = useState([{ id: 1, tone: 'info', title: 'Design tokens applied', message: 'Spacing grid and theme tokens now power every surface.' }]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('as-theme', theme);
  }, [theme]);

  const filteredRows = useMemo(() => {
    return requestRows.filter((row) => {
      const matchesStatus = statusFilter === 'all' || row.status === statusFilter;
      const matchesSearch = row.name.toLowerCase().includes(search.toLowerCase()) || row.owner.toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [statusFilter, search]);

  const handleToastDismiss = (id) => setToasts((prev) => prev.filter((toast) => toast.id !== id));

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <Layout
      navigation={navigation}
      activeNav={activeNav}
      onNavChange={setActiveNav}
      onToggleTheme={toggleTheme}
      theme={theme}
      sidebarLinks={sidebarLinks}
      sidebarActions={
        <Button variant="secondary" onClick={() => setShowModal(true)}>
          View component anatomy
        </Button>
      }
    >
      <section className="section section--muted" id="hero">
        <div className="section__header">
          <p className="eyebrow">New design language</p>
          <h1 className="title-lg">A modular system for Aspire Success NY dashboards and pages.</h1>
          <p className="lead">
            Tokens for color, type, spacing, and elevation power every component. Layout includes a stable header, sidebar, responsive grid, and mobile-first breakpoints.
          </p>
        </div>
        <div className="hero">
          <div>
            <p className="eyebrow">Hero / CTA</p>
            <h2 className="title-md">Guide every journey with clarity.</h2>
            <p className="lead">
              Use this hero for home, dashboard, and list pages. Keep actions grouped and align to our 8px spacing scale.
            </p>
            <div className="hero__actions">
              <Button startIcon={FiArrowRight}>Start consultation</Button>
              <Button variant="secondary" startIcon={FiBell}>
                Notify team
              </Button>
              <Button variant="ghost" startIcon={FiBookOpen}>
                View playbook
              </Button>
            </div>
          </div>
          <div className="metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <strong>{metric.value}</strong>
                <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                  {metric.label}
                </p>
                <p className="eyebrow">{metric.delta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="actions">
        <div className="section__header">
          <p className="eyebrow">Actions & cards</p>
          <h2 className="title-md">Consistent cards, actions, and iconography.</h2>
          <p className="lead">
            Buttons ship in primary, secondary, and ghost variants with focus-visible outlines and reduced-motion support. Cards use soft radius and medium shadow for legibility.
          </p>
        </div>
        <div className="grid grid--3">
          {quickActions.map((action) => (
            <Card key={action.title} icon={() => <Icon as={action.icon} tone="primary" />} title={action.title}>
              <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                {action.desc}
              </p>
              <div className="hero__actions" style={{ gap: 'var(--space-2)' }}>
                <Button size="small" endIcon={FiArrowRight}>
                  {action.cta}
                </Button>
                <Button variant="ghost">Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section" id="components">
        <div className="section__header">
          <p className="eyebrow">Component library</p>
          <h2 className="title-md">Buttons, inputs, tabs, tags, and alerts.</h2>
          <p className="lead">Use helper text for guidance, error text for validation, and keep inputs full width on mobile.</p>
        </div>
        <div className="grid grid--2">
          <div className="surface">
            <p className="eyebrow">Buttons</p>
            <div className="hero__actions">
              <Button startIcon={FiPlus}>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div className="surface">
            <p className="eyebrow">Inputs</p>
            <InputField id="name" label="Full name" placeholder="Jordan Ellis" helper="Use sentence case labels." required />
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              error="Email is required."
            />
          </div>
          <div className="surface">
            <p className="eyebrow">Tabs</p>
            <Tabs
              tabs={[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'requests', label: 'Requests' },
                { id: 'insights', label: 'Insights' },
              ]}
              active={activeTab}
              onChange={setActiveTab}
            />
            <p className="lead" style={{ marginTop: 'var(--space-3)', fontSize: 'var(--font-size-sm)' }}>
              Use tabs for sibling content; never nest them. Keep 12–16px padding and accent underline for the active tab.
            </p>
          </div>
          <div className="surface">
            <p className="eyebrow">Tags & states</p>
            <div className="status-row">
              <span className={badgeClass.success}>Success</span>
              <span className={badgeClass.warning}>Warning</span>
              <span className={badgeClass.error}>Error</span>
              <span className={badgeClass.info}>Info</span>
            </div>
            <p className="lead" style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
              Pair status tags with icons in tables and lists. Keep contrast AA+ across light/dark themes.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="table">
        <div className="toolbar">
          <div className="section__header" style={{ margin: 0 }}>
            <p className="eyebrow">Data table</p>
            <h2 className="title-md">Requests overview</h2>
            <p className="lead">
              Use toolbar for filters, search, and table actions. Stick to 14px text and 48px hit areas.
            </p>
          </div>
          <div className="toolbar__controls">
            <div className="chip">
              <Icon as={FiSun} size="sm" /> Theme ready
            </div>
            <div className="chip">
              <Icon as={FiActivity} size="sm" /> Focus visible
            </div>
            <div className="chip">
              <Icon as={FiBell} size="sm" /> Alerts
            </div>
          </div>
        </div>
        <div className="hero__actions" style={{ justifyContent: 'space-between' }}>
          <div className="hero__actions" style={{ flexWrap: 'wrap' }}>
            <InputField
              id="search"
              label="Search"
              placeholder="Search requests"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              startIcon={FiSearch}
            />
            <div className="input">
              <label htmlFor="status">Status</label>
              <select id="status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="At risk">At risk</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </div>
          <div className="hero__actions">
            <Button variant="ghost" startIcon={FiGrid}>
              Export
            </Button>
            <Button startIcon={FiPlus}>New request</Button>
          </div>
        </div>
        <div className="surface">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Owner</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Updated</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className="layout-helper">
                      <p className="lead">No requests yet. Start with a new intake to populate this table.</p>
                      <Button startIcon={FiPlus}>Add request</Button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredRows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.owner}</td>
                    <td>
                      <span className={badgeClass[statusTone[row.status]]}>{row.status}</span>
                    </td>
                    <td>{row.type}</td>
                    <td>{row.updated}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="statuses">
        <div className="section__header">
          <p className="eyebrow">Layout system</p>
          <h2 className="title-md">Surfaces, spacing, and responsive grid.</h2>
          <p className="lead">Use .section for feature blocks, .surface for supporting content, and .grid utilities for 1–3 column flows.</p>
        </div>
        <div className="layout-helper">
          <div className="layout-helper__row">
            <div className="background-swatch">
              <p className="eyebrow">Surface</p>
              <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                Apply to cards, forms, and tables. Radius 16px, border 1px, shadow xs.
              </p>
            </div>
            <div className="background-swatch">
              <p className="eyebrow">Muted</p>
              <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                Use for section backgrounds and data empties. Respect the 8px spacing scale.
              </p>
            </div>
            <div className="background-swatch">
              <p className="eyebrow">Accent</p>
              <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                Accent ghost backgrounds for icon chips, tags, and hero highlights.
              </p>
            </div>
          </div>
          <div className="layout-helper__row">
            <div className="surface">
              <p className="eyebrow">Micro-interactions</p>
              <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                Hover: translateY(-3px) and medium shadow. Focus-visible outlines rely on accent color. Reduced-motion disables transforms.
              </p>
            </div>
            <div className="surface">
              <p className="eyebrow">Keyboard travel</p>
              <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
                All interactive elements use button/anchor semantics, maintain 44px minimum height, and honor logical tab order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {showModal ? (
        <Modal
          title="Component anatomy"
          description="Use this modal pattern for confirmations and teaching moments. Keep it short, add helper text, and always provide a secondary way to close."
          onClose={() => setShowModal(false)}
          actions={<Button startIcon={FiCheckCircle}>Acknowledge</Button>}
        >
          <ul className="list">
            <li>Header with title + supporting text</li>
            <li>Content area for short forms or teaching content</li>
            <li>Footer actions with primary on the right</li>
          </ul>
        </Modal>
      ) : null}

      {toasts.length > 0 ? (
        <div className="toast-stack" role="status" aria-live="polite">
          {toasts.map((toast) => (
            <Toast key={toast.id} tone={toast.tone} title={toast.title} message={toast.message} onDismiss={() => handleToastDismiss(toast.id)} />
          ))}
        </div>
      ) : null}
    </Layout>
  );
}

export default App;
