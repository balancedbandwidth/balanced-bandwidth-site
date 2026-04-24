import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" href="/">Balanced<span>Bandwidth</span></Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/fractional-it-leadership">Fractional IT</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-secondary" href="/contact">Book a Consultation</Link>
        </nav>
      </div>
    </header>
  );
}
