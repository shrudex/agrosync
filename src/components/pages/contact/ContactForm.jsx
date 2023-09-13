import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <span className="circle one"></span>
      <span className="circle two"></span>

      <form action="index.html" autoComplete="off">
        <h3 className="title">Contact us</h3>
        <div className="input-container">
          <input type="text" name="name" className="input" />
          <label htmlFor="">Username</label>
          <span>Username</span>
        </div>
        <div className="input-container">
          <input type="email" name="email" className="input" />
          <label htmlFor="">Email</label>
          <span>Email</span>
        </div>
        <div className="input-container">
          <input type="tel" name="phone" className="input" />
          <label htmlFor="">Phone</label>
          <span>Phone</span>
        </div>
        <div className="input-container textarea">
          <textarea name="message" className="input"></textarea>
          <label htmlFor="">Message</label>
          <span>Message</span>
        </div>
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};

export default ContactForm;
