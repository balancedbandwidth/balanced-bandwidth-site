import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" aria-label="Balanced Bandwidth home">
          <Image
            src="/images/logo-full.png"
            alt="Balanced Bandwidth"
            width={180}
            height={40}
            priority
          />
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/fractional-it-leadership">Fractional IT</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link className="btn btn-secondary" href="/contact">
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}