import { NativeLink as Link } from "@/components/native-link";

const nav = [
  { href: "/en/stays", label: "Stays" },
  { href: "/en/concierge", label: "Concierge" },
  { href: "/en/how-it-works", label: "How it works" },
  { href: "/en/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/en" className="wordmark" aria-label="Apartment Hotel 11 home">
          <span>APARTMENT HOTEL 11</span>
          <small>OFFICIAL LOGO PENDING</small>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link href="/en/plan-your-journey" className="button button-small">Plan your journey</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">APARTMENT HOTEL 11</p>
          <p>Tailor-made Osaka Journeys</p>
        </div>
        <div>
          <p className="micro-label">Contact placeholders</p>
          <p>[BUSINESS EMAIL]<br />[WHATSAPP NUMBER]</p>
        </div>
        <div>
          <p className="micro-label">Preview status</p>
          <p>Owner-private MVP<br />No information is submitted.</p>
        </div>
        <div className="footer-links">
          <Link href="/en/plan-your-journey">Plan your journey</Link>
          <Link href="/en/about">About this service</Link>
          <span>[PRIVACY POLICY URL]</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Apartment Hotel 11</span>
        <span>Private preview · Content review required</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}
