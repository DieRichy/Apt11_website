import Image from "next/image";
import { NativeLink as Link } from "@/components/native-link";
import { ScrollReveal } from "@/components/scroll-reveal";

const nav = [
  { href: "/en/packages", label: "Packages" },
  { href: "/en/stays", label: "Stays" },
  { href: "/en/concierge", label: "Experiences" },
  { href: "/en/how-it-works", label: "How it works" },
  { href: "/en/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/en" className="wordmark" aria-label="Apartment Hotel 11 home">
          <Image
            src="/images/logo.png"
            alt="Apartment Hotel 11"
            width={655}
            height={206}
            priority
          />
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
          <p className="micro-label">Operated by</p>
          <p>HIWIN<br />Osaka, Japan</p>
        </div>
        <div>
          <p className="micro-label">Website status</p>
          <p>Public Ver.2 MVP<br />Inquiries stay on your device.</p>
        </div>
        <div className="footer-links">
          <Link href="/en/packages">Compare packages</Link>
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
