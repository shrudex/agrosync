import React from "react";

const ContactInfo = () => {
    let address = 'MIT Manipal';
    let email = 'hello@agrosync.com';
    let mobile = '9265585050';
  return (
    <div className="contact-info">
      <h3 className="title">Planting Seeds of Communication!</h3>
      <p className="text">
        Plant Your Questions, Watch Them Grow: Contact Us for Expert Insights,
        Farming Tips, and Cultivating Connections with Our Agricultural Team
      </p>

      <div className="info">
        <div className="information">
          <i className="fa fa-map-marker icon" aria-hidden="true"></i>
          <p>{address}</p>
        </div>
        <div className="information">
          <i className="fa fa-envelope-o icon" aria-hidden="true"></i>
          <p>{email}</p>
        </div>
        <div className="information">
        <i className="fa fa-phone icon" aria-hidden="true"></i>
          <p>{mobile}</p>
        </div>
      </div>

      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons">
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
