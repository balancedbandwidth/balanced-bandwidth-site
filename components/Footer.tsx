import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/">Balanced<span>Bandwidth</span></Link>
          <p style={{marginTop: '1rem', maxWidth: '58ch'}}>Fractional IT leadership and enterprise-level technology guidance for growing businesses.</p>
        </div>
        <div className="footer-links">
          <Link href="/fractional-it-leadership">Fractional IT Leadership</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:info@balancedbandwidth.com">info@balancedbandwidth.com</a>
        </div>
      </div>
    </footer>
  );
}
