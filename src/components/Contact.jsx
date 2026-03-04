import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section  className="contact-wrapper">

      <div id="Contact" className="contact-box">

        {/* Left Image */}
        <div className="contact-image"></div>

        {/* Right Form */}
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <p className="subtitle">We’d love to hear from you</p>

          <form className="contact-form">

            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="text" placeholder="Address" />

            <div className="row">
              <input type="tel" placeholder="Mobile Number" />
              <input type="email" placeholder="Email" />
            </div>

            <textarea rows="3" placeholder="Add a note..."></textarea>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>

    </section>
  );
};

export default Contact;