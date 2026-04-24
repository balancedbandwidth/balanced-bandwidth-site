import CTA from '@/components/CTA';
import SectionHeader from '@/components/SectionHeader';

export default function FractionalITLeadershipPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Primary Offer</span>
          <h1>Fractional IT leadership for businesses ready to mature.</h1>
          <p className="lead">Get a senior technology partner who can clarify priorities, manage vendors, improve operations, reduce risk, and help leadership make better technology decisions.</p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="Scope" title="What fractional IT leadership can include" />
          <div className="grid grid-3">
            {['IT roadmap and budgeting','Vendor/MSP management','Security and compliance planning','Service desk and support maturity','Infrastructure and cloud guidance','Executive reporting and governance'].map(item => <article className="card" key={item}><h3>{item}</h3><p>Focused advisory and execution support tailored to your business size, budget, and maturity.</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {['Assess current state','Prioritize the highest-value work','Execute with accountability'].map((item, index) => <article className="card" key={item}><span className="eyebrow">0{index + 1}</span><h3>{item}</h3><p>Clear, practical steps that move your business away from reactive IT and toward intentional technology leadership.</p></article>)}
        </div>
      </section>
      <CTA />
    </>
  );
}
