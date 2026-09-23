import Image from "next/image";
import { NativeLink as Link } from "@/components/native-link";
import { ScrollReveal } from "@/components/scroll-reveal";

type NavItem = {
  href: string;
  label: string;
  children: { href: string; label: string }[];
};

const nav: NavItem[] = [
  { href: "/en/packages", label: "Packages", children: [
    { href: "/en/packages/essential", label: "Essential Osaka" },
    { href: "/en/packages/signature", label: "Osaka Signature" },
    { href: "/en/packages/prestige", label: "Kansai Prestige" },
  ] },
  { href: "/en/destinations", label: "Destinations", children: [
    { href: "/en/destinations/osaka", label: "Osaka" },
    { href: "/en/destinations/kyoto", label: "Kyoto" },
    { href: "/en/destinations/wakayama", label: "Wakayama & Kumano" },
  ] },
  { href: "/en/stays", label: "Stays", children: [
    { href: "/en/stays/kuromon-9", label: "Kuromon 9" },
    { href: "/en/stays/tsutenkaku-3", label: "Tsutenkaku 3" },
    { href: "/en/stays/namba-minami-7", label: "Namba Minami 7" },
  ] },
  { href: "/en/concierge", label: "Experiences", children: [
    { href: "/en/concierge#stay", label: "Stay · 住" },
    { href: "/en/concierge#dine", label: "Dine · 食" },
    { href: "/en/concierge#move", label: "Move · 行" },
    { href: "/en/concierge#relax", label: "Relax · 癒" },
    { href: "/en/concierge#enjoy", label: "Enjoy · 楽" },
  ] },
  { href: "/en/how-it-works", label: "How it works", children: [
    { href: "/en/how-it-works", label: "The planning process" },
    { href: "/en/plan-your-journey", label: "Begin your brief" },
  ] },
  { href: "/en/about", label: "About", children: [
    { href: "/en/about", label: "Apartment Hotel 11 + HIWIN" },
    { href: "/en/plan-your-journey", label: "Plan with us" },
  ] },
];

function HeaderSocialLinks({ mobile = false }: { mobile?: boolean }) {
  return <div className={`header-socials${mobile ? " mobile-header-socials" : ""}`} role="group" aria-label="Social media and company links">
    <Link className="header-social-link" href="https://www.instagram.com/zhuyi_hotel/" target="_blank" rel="noreferrer" aria-label="Apartment Hotel 11 on Instagram" title="Instagram">
      <Image className="social-logo-image social-logo-instagram" src="/images/social-instagram.png" alt="" width={438} height={438} unoptimized />
    </Link>
    <Link className="header-social-link" href="https://line.me/ti/p/OPyUC3OZo9" target="_blank" rel="noreferrer" aria-label="Apartment Hotel 11 on LINE" title="LINE">
      <Image className="social-logo-image social-logo-line" src="/images/social-line.png" alt="" width={438} height={438} unoptimized />
    </Link>
    <Link className="header-social-link" href="https://www.xiaohongshu.com/user/profile/665d65e4000000000303207a?xhsshare=CopyLink&appuid=665d65e4000000000303207a&apptime=1721635778" target="_blank" rel="noreferrer" aria-label="Apartment Hotel 11 on Xiaohongshu" title="Xiaohongshu">
      <Image className="social-logo-image social-logo-xiaohongshu" src="/images/social-xiaohongshu.png" alt="" width={438} height={438} unoptimized />
    </Link>
    <Link className="header-social-link header-social-hiwin" href="https://hiwin-japan.co.jp/" target="_blank" rel="noreferrer" aria-label="HIWIN corporate website" title="HIWIN Japan">
      <Image src="/images/hiwin_logo.png" alt="" width={1400} height={422} unoptimized />
    </Link>
  </div>;
}

function MobileNavigation() {
  return <details className="mobile-navigation">
    <summary className="mobile-menu-trigger" aria-label="Open or close navigation menu">
      <i aria-hidden="true"><b /><b /></i>
    </summary>
    <div className="mobile-nav-panel">
      <nav className="mobile-nav-list" aria-label="Mobile navigation">
        {nav.map((item, index) => <section key={item.href}>
          <Link className="mobile-nav-parent" href={item.href}><small>0{index + 1}</small>{item.label}</Link>
          <div className="mobile-nav-children">
            {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
          </div>
        </section>)}
      </nav>
      <div className="mobile-nav-footer">
        <Link href="/en/plan-your-journey" className="button button-light">Plan your journey</Link>
        <HeaderSocialLinks mobile />
      </div>
    </div>
  </details>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-row">
        <Link href="/en" className="wordmark" aria-label="Apartment Hotel 11 home">
          <Image
            src="/images/logo.png"
            alt="Apartment Hotel 11"
            width={655}
            height={206}
            priority
          />
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {nav.map((item) => <div className="nav-item" key={item.href}>
            <Link className="nav-parent" href={item.href}>{item.label}<span className="nav-caret" aria-hidden="true" /></Link>
            <div className="nav-dropdown">
              <span className="nav-dropdown-label">Explore {item.label}</span>
              {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
            </div>
          </div>)}
        </nav>
        <div className="header-actions">
          <Link href="/en/plan-your-journey" className="button button-small header-plan-button">Plan your journey</Link>
          <HeaderSocialLinks />
        </div>
        <MobileNavigation />
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
          <p className="micro-label">Operated by</p>
          <p>HIWIN<br />Osaka, Japan</p>
        </div>
        <div>
          <p className="micro-label">Website status</p>
          <p>Public Ver.2 MVP<br />Inquiries stay on your device.</p>
        </div>
        <div className="footer-links">
          <Link href="/en/packages">Compare packages</Link>
          <Link href="/en/destinations">Explore destinations</Link>
          <Link href="/en/plan-your-journey">Plan your journey</Link>
          <Link href="/en/about">About this service</Link>
          <Link href="https://hiwin-japan.co.jp/">HIWIN corporate site</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Apartment Hotel 11</span>
        <span>From prices are preview estimates · Final confirmation required</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><ScrollReveal><main>{children}</main></ScrollReveal><SiteFooter /></>;
}
