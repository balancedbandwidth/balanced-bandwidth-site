import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Need senior IT leadership without a full-time executive hire?</h2>
            <p>Let’s clarify your priorities, risks, vendors, roadmap, and next best move.</p>
          </div>
          <Link className="btn btn-secondary" href="/contact">Book a Consultation</Link>
        </div>
      </div>
    </section>
  );
}
