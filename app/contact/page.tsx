import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return <section className="hero"><div className="container grid grid-2"><div><span className="eyebrow">Contact</span><h1>Let’s talk about your technology priorities.</h1><p className="lead">Share what is getting in the way, where you need leadership, and what a useful next step would look like.</p><p>Email: info@balancedbandwidth.com<br/>Region: Orange County, California</p></div><div className="panel"><h3>Start the conversation</h3><ContactForm /></div></div></section>;
}
