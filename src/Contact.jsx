// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // Import CSS file for styling

function ContactForm() {
  const [state, handleSubmit] = useForm("mdoqqabk");

  if (state.succeeded) {
    return <p>Thank you for your message! I will reply as soon as possible.</p>;
  }

  return (
    <div className="contact-form-container" id="contact-section">
      <div className="contact-form">
        <div className="contact-form-header">
          <h2>Let's Connect!</h2>
        </div>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="name-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="email-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="textarea-container">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
