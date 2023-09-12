import React from "react";
import "./About.css";
function Profile({
  name,
  role,
  description,
  linkedin,
  github,
  email,
  instagram,
  imgSrc,
}) {
  return (
    <div className="box">
      <div className="img">
        <img src={imgSrc} alt={name} />
      </div>
      <h3>{name}</h3>
      <h5>{role}</h5>
      <div className="icons">
        <a href={linkedin}>
          <i className="fa fa-linkedin"></i>
        </a>
        <a href={github}>
          <i className="fa fa-github"></i>
        </a>
        <a href={`mailto:${email}`}>
          <i className="fa fa-envelope"></i>
        </a>
        <a href={instagram}>
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;
