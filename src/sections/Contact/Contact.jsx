import { useState } from "react";
import styles from './ContactStyles.module.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    // Send data to Formspree (replace with your endpoint)
    const response = await fetch("https://formspree.io/f/xeoklnbd", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.gradientTitle}>Contact</h2>
      {submitted ? (
        <div className={styles.thankyou}>
          <h3>Thanks for contacting!</h3>
          <p>I will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" hidden>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" hidden>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" hidden>Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
      )}
    </section>
  );
}

export default Contact;