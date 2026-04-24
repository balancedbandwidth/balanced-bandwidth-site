import Link from 'next/link';
import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';

const leadership = [
  ['IT roadmap & priorities', 'Translate business goals into a practical technology plan.'],
  ['Vendor & MSP accountability', 'Improve contracts, renewals, service quality, and ownership.'],
  ['Security & risk leadership', 'Establish sensible controls without unnecessary complexity.'],
  ['Operations maturity', 'Improve support workflows, documentation, escalation, and reporting.'],
  ['Budget & lifecycle planning', 'Plan spend, refreshes, licensing, and project investments.'],
  ['Executive communication', 'Give owners and leaders clear, decision-ready technology guidance.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Orange County • Fractional IT Leadership</span>
            <h1>Senior IT leadership without a full-time executive hire.</h1>
            <p className="lead">Balanced Bandwidth helps growing businesses bring structure, accountability, and strategy to technology decisions, vendors, security, operations, and systems.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
              <Link className="btn btn-secondary" href="/fractional-it-leadership">Explore Fractional IT</Link>
            </div>
          </div>
          <aside className="card hero-card">
            <h3>For businesses that have outgrown reactive IT</h3>
            <p>You do not need more disconnected tools. You need clearer ownership, better decisions, and a practical roadmap.</p>
            <div className="metric-grid">
              <div className="metric"><strong>Strategy</strong><span>Roadmaps and priorities</span></div>
              <div className="metric"><strong>Operations</strong><span>Support and service quality</span></div>
              <div className="metric"><strong>Risk</strong><span>Security and compliance basics</span></div>
              <div className="metric"><strong>Vendors</strong><span>Accountability and value</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="What We Lead" title="Fractional IT leadership focused on business outcomes">
            <p>Practical technology leadership for owners, COOs, and teams that need senior guidance but are not ready for a full-time CIO or IT Director.</p>
          </SectionHeader>
          <div className="grid grid-3">
            {leadership.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="panel">
            <span className="eyebrow">Best Fit</span>
            <h2>Built for growing teams that need structure</h2>
            <ul className="list">
              <li>10–100 employee businesses without senior internal IT leadership</li>
              <li>Teams with vendor sprawl, recurring support friction, or unclear ownership</li>
              <li>Organizations facing higher security, compliance, or customer expectations</li>
              <li>Owners who want technology tied to operations, revenue, and risk</li>
            </ul>
          </div>
          <div className="panel">
            <span className="eyebrow">Engagements</span>
            <h2>Simple ways to start</h2>
            <ul className="list">
              <li>IT leadership assessment and 90-day roadmap</li>
              <li>Monthly fractional IT leadership retainer</li>
              <li>Project leadership for systems, vendors, security, or infrastructure</li>
              <li>MSP oversight and technology governance support</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
