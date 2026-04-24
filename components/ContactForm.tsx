export default function ContactForm() {
  return (
    <form className="form" name="contact" method="POST" data-netlify="true" action="/thank-you">
      <input type="hidden" name="form-name" value="contact" />
      <input className="input" name="name" required placeholder="Your name" />
      <input className="input" name="company" placeholder="Company" />
      <input className="input" name="email" type="email" required placeholder="Email" />
      <input className="input" name="phone" type="tel" placeholder="Phone" />
      <textarea className="textarea" name="message" required placeholder="What are you looking for help with?" />
      <button className="btn btn-primary" type="submit">Send Inquiry</button>
    </form>
  );
}
