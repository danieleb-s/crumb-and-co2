import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading

    if (name === "" || email === "" || subject === "" || message === "") {
      setError("Please fill in all the fields.");
      setSuccess(false);
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    // everything is fine
    setError("");
    setSuccess(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Email: hello@crumbandco.com</p>
      <p>Phone: 0800 000 0000</p>
      <p>Address: 5 Baker Street</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Subject</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

        <label>Message</label>
        <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Thank you! Your message was sent.</p>}

        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
