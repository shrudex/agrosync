import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="container">
      <span className="big-circle"></span>
      <div className="form">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
