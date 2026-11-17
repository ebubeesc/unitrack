import { useState } from "react";

function Contact() {
const [submitted, setSubmitted] = useState(false);

function handleSubmit(event) {
event.preventDefault();
setSubmitted(true);
event.target.reset();
}

return (
<div className="page-content">
<section className="contact-heading">
<span className="tag">GET IN TOUCH</span>
<h1>Contact UniTrack</h1>
<p>Have a question or suggestion? Send us a message.</p>
</section>

<div className="contact-card">
{submitted && (
<p className="success-message">
Your message has been received. Thank you!
</p>
)}

<form onSubmit={handleSubmit}>
<label>Full Name</label>
<input type="text" placeholder="Enter your name" required />

<label>Email Address</label>
<input type="email" placeholder="Enter your email" required />

<label>Your Message</label>
<textarea placeholder="Write your message here..." required />

<button type="submit">Send Message →</button>
</form>
</div>
</div>
);
}

export default Contact;

