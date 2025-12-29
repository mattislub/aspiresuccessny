import Button from './Button';

const Layout = ({
  navigation,
  activeNav,
  onNavChange,
  onToggleTheme,
  theme,
  sidebarActions,
  sidebarLinks,
  children,
}) => {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand" aria-label="Aspire Success NY">
          <div className="brand__mark">AS</div>
          <div className="brand__text">
            <span className="brand__name">Aspire Success NY</span>
            <span className="brand__tagline">Care strategy & coordination</span>
          </div>
        </div>
        <nav aria-label="Primary">
          <div className="nav-links">
            {navigation.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeNav === item.id ? 'nav-link--active' : ''}`}
                onClick={() => onNavChange(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="actions">
          <Button variant="ghost" onClick={onToggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </Button>
          <Button>Start consultation</Button>
        </div>
      </header>

      <aside className="sidebar">
        <div>
          <p className="sidebar__title">Quick sections</p>
          <div className="sidebar__nav">
            {sidebarLinks.map((link) => (
              <a key={link.href} className="sidebar__link" href={link.href}>
                {link.icon ? <link.icon aria-hidden="true" /> : null}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="sidebar__cta">
          <p className="eyebrow">Need alignment?</p>
          <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
            Use this layout for dashboards, lists, and detail pages. Keep primary actions on the right.
          </p>
          {sidebarActions}
        </div>
      </aside>

      <main className="main">{children}</main>

      <footer className="footer">
        <span>Design system v1.0 · Grid 8px · Inter/Manrope</span>
        <span>Light/Dark theme ready · Inclusive focus states</span>
      </footer>
    </div>
  );
};

export default Layout;
