import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';

export default function ServicesPage() {
  const services = ['Fractional IT Leadership','IT Operations & Service Desk','Infrastructure & Networking','Cloud, SaaS & Business Systems','Cybersecurity & Compliance','Vendor Management & Procurement'];
  return <><section className="hero"><div className="container"><span className="eyebrow">Services</span><h1>Practical technology leadership and execution support.</h1><p className="lead">Services designed to improve clarity, reliability, risk management, and business outcomes.</p></div></section><section className="section section-alt"><div className="container"><SectionHeader eyebrow="Capabilities" title="Where Balanced Bandwidth can help" /><div className="grid grid-3">{services.map(s => <article className="card" key={s}><h3>{s}</h3><p>Senior-level guidance adapted to the needs, budget, and pace of a growing business.</p></article>)}</div></div></section><CTA /></>;
}
